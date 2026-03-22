const fs = require('fs');
const path = require('path');

// ─── DATA ─────────────────────────────────────────────────────────────────────

const ARTISTS = [
  { slug:"ellina-akimova", name:"Ellina", surname:"Akimova", initials:"EA", role:"Pianist & Composer", country:"France / Russia", accent:"#b8975a", bg:"linear-gradient(145deg,#2a2218,#6b4828,#b8975a)", bio:"Pianist and composer with Russian roots, Ellina Akimova worked at the Bolchoi from 1990 to 1995. She is a pianist accompanist at the Ballet School of the Paris National Opéra, at the CNSMDP, at the CND, and at the dance school of the conservatoire of the XVIIe district of Paris.", extended:"Dance Accompaniment (La Danse Accompagnée) is a set of Music for Ballet Class CDs composed and interpreted by Ellina Akimova. This collection is a wonderful tool for ballet teachers. Volumes I, III and IV feature music for the entire ballet class; Volume II features music for adagio, divertissement and pas de deux.", quote:"", albums:[{title:"Dance Accompaniment, Vol. I",type:"CD",grad:"linear-gradient(145deg,#2d2518,#7a5035)"},{title:"Dance Accompaniment, Vol. II",type:"CD",grad:"linear-gradient(145deg,#201c14,#604530)"},{title:"Dance Accompaniment, Vol. III",type:"CD",grad:"linear-gradient(145deg,#281e14,#7a5a38)"},{title:"Dance Accompaniment, Vol. IV",type:"CD",grad:"linear-gradient(145deg,#2a2018,#906040)"},{title:"Dance Accompaniment, Vol. V",type:"CD · New",grad:"linear-gradient(145deg,#2a2010,#b06040)"},{title:"Camille — La Mouette",type:"Classical · 2 Suites",grad:"linear-gradient(145deg,#1e1a10,#6a5030)"}] },
  { slug:"marina-surgan", name:"Marina", surname:"Surgan", initials:"MS", role:"Pianist", country:"Russia / France", accent:"#4a8090", bg:"linear-gradient(145deg,#1a2428,#2a5060,#4a8090)", bio:"Classically trained in Moscow, Marina Surgan has been principal pianist for the Canada National Ballet School since 1986. She has four CDs and two Piano Score Books available.", extended:"Born in the former Soviet Union and classically trained in Moscow, Marina immigrated to Toronto in 1975. She recorded her first CD, Marina Surgan Live, in December 2006, followed by 20 Greatest Classical Variations in June 2007, Marina Surgan Live 2 in 2009, and Marina Surgan Live 3 thereafter. Her original compositions were used in an episode of the reality TV show Battle of the Blades in September 2010.", quote:"", albums:[{title:"Marina Surgan Live",type:"CD",grad:"linear-gradient(145deg,#1a2830,#3a6070)"},{title:"Marina Surgan Live 2",type:"CD",grad:"linear-gradient(145deg,#1e2c38,#4a7080)"},{title:"Marina Surgan Live 3",type:"CD · New",grad:"linear-gradient(145deg,#202e3a,#508090)"},{title:"20 Greatest Classical Variations",type:"CD",grad:"linear-gradient(145deg,#161e22,#2a5060)"}] },
  { slug:"ayumi-hirusaki", name:"Ayumi", surname:"Hirusaki", initials:"AH", role:"Pianist & Composer", country:"Japan", accent:"#7a5090", bg:"linear-gradient(145deg,#1a1428,#4a2a60,#7a5090)", bio:"Main pianist at the National Opera of Tokyo, Ayumi Hirusaki is the pianist accompanist for the ballet classes and rehearsals. She worked at the Opera of Vienna in 2006 and has had the opportunity to work with Attilio Labis, Michaël Denard, Patrick Dupond, and Bertrand Barena, among others.", extended:"Ayumi Hirusaki travels the world working with professors and dancers from Japan and Europe. She masters the repertoire and can improvise jazz as well as ballet music.", quote:"", albums:[{title:"Music for Ballet Class 1",type:"CD",grad:"linear-gradient(145deg,#1a1428,#4a2860)"},{title:"Music for Ballet Class 2",type:"CD",grad:"linear-gradient(145deg,#1e1830,#5a3068)"},{title:"Music for Ballet Class 3",type:"CD",grad:"linear-gradient(145deg,#201a38,#603870)"},{title:"Music for Ballet Class 4",type:"CD",grad:"linear-gradient(145deg,#221c40,#7a4878)"}] },
  { slug:"richard-davis", name:"Richard", surname:"Davis", initials:"RD", role:"Pianist & Composer", country:"United States", accent:"#6a5030", bg:"linear-gradient(145deg,#1e1610,#5a3a1a,#6a5030)", bio:"Born in California, Richard Davis has been pianist at the Ballet School of the Opera of Paris since 1994. He is also accompanist at the Paris Conservatory.", extended:"Richard Davis brings his expertise from the dance community worldwide. His Music for Ballet Class CD includes works by Strauss, Gounod, Lehar, Bach, and Mozart.", quote:"", albums:[{title:"Music for Ballet Class",type:"CD",grad:"linear-gradient(145deg,#201810,#6a4820)"}] },
  { slug:"bertrand-barena", name:"Bertrand", surname:"Barena", initials:"BB", role:"Ballet Professor", country:"France", accent:"#7a6040", bg:"linear-gradient(145deg,#1a1610,#4a3820,#7a6040)", bio:"Professor at the Ballet School of the Opera of Paris, Bertrand Barena's pedagogy has been inspired by Serge Golovine and Claude Bessy.", extended:"Bertrand Barena collaborated with Ellina Akimova and Tristan Lofficial on the Floor Barre CD. He has worked with Ayumi Hirusaki and many of the leading artists in the Mediaphorie catalogue.", quote:"", albums:[{title:"Floor Barre — Piano Improvisations",type:"CD · with T. Lofficial",grad:"linear-gradient(145deg,#1a1610,#4a3820)"}] },
  { slug:"christopher-hobson", name:"Christopher", surname:"Hobson", initials:"CH", role:"Pianist & Composer", country:"United Kingdom", accent:"#508070", bg:"linear-gradient(145deg,#101a18,#284840,#508070)", bio:"Pianist and composer who had the privilege to work with many world renowned choreographers and directors, including Gillian Lynne, Mark Godden, and David Nixon, on productions including Nixon's Nutcracker and Swan Lake.", extended:"Christopher started piano lessons at the age of 4 and trained at the Royal Northern College of Music Junior School and Chetham's School of Music, studying classical piano with Peter Lawson and jazz piano with Les Chisnall. He has worked at Northern School of Contemporary Dance, Elmhurst School for Dance, Liverpool Institute for Performing Arts, and Central School of Ballet, among others.", quote:"", albums:[{title:"Modern Ballet Studio Melodies, Vol. 1",type:"CD",grad:"linear-gradient(145deg,#101a18,#284840)"},{title:"Modern Ballet Studio Melodies, Vol. 2",type:"CD",grad:"linear-gradient(145deg,#142020,#305850)"}] },
  { slug:"tristan-lofficial", name:"Tristan", surname:"Lofficial", initials:"TL", role:"Pianist & Composer", country:"France", accent:"#6060a0", bg:"linear-gradient(145deg,#101028,#303060,#6060a0)", bio:"Jazzman, composer and pianist, Tristan Lofficial is pianist accompanist at the Paris Opéra. Born in Saint-Louis of Senegal in 1968, he resides in Paris where he leads a career as pianist improviser and performer.", extended:"Tristan Lofficial has been dance accompanist at the Centre national de danse contemporaine, then at the Opéra national de Paris and the Conservatoire national supérieur de musique et danse de Paris between 2005 and 2019. He has participated in numerous workshops, residencies and tours with the Tanztheater Wuppertal, the Ballet du Capitole de Toulouse, and many others.", quote:"", albums:[{title:"Floor Barre — Piano Improvisations",type:"CD · with B. Barena",grad:"linear-gradient(145deg,#101028,#303060)"}] },
  { slug:"elisabeth-maurin", name:"Elisabeth", surname:"Maurin", initials:"EM", role:"Ballet Professor & Étoile", country:"France", accent:"#906080", bg:"linear-gradient(145deg,#201018,#602040,#906080)", bio:"Ballet Professor and former Étoile, Elisabeth Maurin collaborated with Ellina Akimova in 2011 to create Volume V of the Dance Accompaniment collection — a complete course for professional dancers.", extended:"In 2011, Elisabeth Maurin and Ellina Akimova created together Volume V of the Dance Accompaniment collection, covering barre, centre, pointes, and men's exercises.", quote:"", albums:[{title:"Dance Accompaniment, Vol. V",type:"CD · with E. Akimova",grad:"linear-gradient(145deg,#2a2010,#b06040)"}] },
  { slug:"fe-de-mikhnevitch", name:"F.E.", surname:"de Mikhnevitch", initials:"FM", role:"Ballet Professor", country:"France", accent:"#708050", bg:"linear-gradient(145deg,#141810,#384020,#708050)", bio:"Ballet Professor and former dancer at the Opera of Paris, Franciska-Élisabeth de Mikhnevitch collaborated with Ellina Akimova in 2007 to create Volume IV of the Dance Accompaniment collection.", extended:"In 2007, Franciska-Élisabeth de Mikhnevitch and Ellina Akimova created together Volume IV of the Dance Accompaniment collection — a complete course for professional dancers covering barre, centre, pointes, and men's exercises.", quote:"", albums:[{title:"Dance Accompaniment, Vol. IV",type:"CD · with E. Akimova",grad:"linear-gradient(145deg,#2a2018,#906040)"}] },
];

const PRODUCTS = [
  { slug:"dance-accompaniment-v", title:"Dance Accompaniment, Vol. V", artist:"Ellina Akimova", artistSlug:"ellina-akimova", type:"Ballet Class CD", price:22, grad:"linear-gradient(145deg,#2a2010,#b06040)", isNew:true, formats:["CD","MP3"], tracks:["Battements Tendus — Waltz","Dégagés — Mazurka","Ronds de Jambe — Adagio","Fondus — Slow Waltz","Frappés — Polka","Grand Battement — March","Port de Bras — Nocturne","Pirouettes — Allegro","Grand Allegro — Valse Brillante","Reverence — Adagio"], desc:"The fifth and latest volume in Ellina Akimova's celebrated Dance Accompaniment series. Fresh compositions and arrangements bring the same hallmarks — musical sensitivity, perfect tempi, and an intimate understanding of the dancer's needs." },
  { slug:"marina-surgan-live3", title:"Marina Surgan Live 3", artist:"Marina Surgan", artistSlug:"marina-surgan", type:"Ballet Class CD", price:22, grad:"linear-gradient(145deg,#202e3a,#508090)", isNew:true, formats:["CD","MP3","Sheet Music"], tracks:["Opening March — Pliés","Battements — Vivace","Adagio — Ronds de Jambe","Fondus Lyriques","Développés — Largo","Grand Battement — Allegro","Centre Adagio","Allegro I","Grand Allegro","Variations — Coda"], desc:"The third and most celebrated volume of Marina Surgan's Live series. Recorded in a single session full of spontaneity, this album captures Marina at the height of her artistry — bold, rhythmically precise, deeply musical." },
  { slug:"camille-la-mouette", title:"Camille — La Mouette", artist:"Ellina Akimova", artistSlug:"ellina-akimova", type:"Classical Music", price:22, grad:"linear-gradient(145deg,#1e1a10,#6a5030)", formats:["CD","MP3"], tracks:["La Mouette — Prologue","L'Été sur le Lac","Danse de la Mouette","La Valse (Camille)","Camille — Prélude","Nocturne du Soir","Scène Finale"], desc:"Two suites for solo piano composed and performed by Ellina Akimova. Inspired by Chekhov and the French countryside, moving between lyricism and dramatic intensity with natural ease." },
  { slug:"dance-accompaniment-iv", title:"Dance Accompaniment, Vol. IV", artist:"Ellina Akimova", artistSlug:"ellina-akimova", type:"Ballet Class CD", price:22, grad:"linear-gradient(145deg,#2a2018,#906040)", formats:["CD","MP3"], tracks:["Pliés — Largo","Tendus — Moderato","Dégagés — Vivace","Ronds de Jambe","Adagio Central","Grand Battement","Centre Work I","Centre Work II","Allegro","Reverence"], desc:"Volume IV continues the Dance Accompaniment tradition with a fresh collection of compositions designed specifically for the structure and demands of the classical ballet class." },
  { slug:"the-snow-queen", title:"The Snow Queen", artist:"Mediaphorie", artistSlug:null, type:"Children's Music", price:20, grad:"linear-gradient(145deg,#182030,#3a5070)", formats:["CD"], tracks:["Once Upon a Winter","The Snow Queen's Theme","Snowflakes Dance","The Frozen Forest","Kay and Gerda","Mirror of Ice","The Robber Girl","Journey North","The Queen's Palace","Home Again"], desc:"A magical musical journey for young dancers. The Snow Queen brings the Hans Christian Andersen fairy tale to life through enchanting piano music perfect for children's ballet classes and story-dance sessions." },
  { slug:"piano-scores-unlimited", title:"Piano Scores Unlimited", artist:"Various Artists", artistSlug:null, type:"Digital Score Collection", price:45, grad:"linear-gradient(145deg,#1a2428,#4a6070)", formats:["Digital Download"], tracks:[], desc:"A comprehensive digital collection of piano scores from across the Mediaphorie catalogue. Ideal for accompanists who want instant access to a wide range of exercises and compositions." },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function productFilterAttr(p) {
  if (p.type === 'Ballet Class CD') return 'cd';
  if (p.type === 'Classical Music') return 'classical';
  if (p.type === "Children's Music") return 'children';
  if (p.type === 'Digital Score Collection') return 'score';
  if (p.formats && p.formats.some(f => f.includes('MP3'))) return 'mp3';
  return 'all';
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── LAYOUT ───────────────────────────────────────────────────────────────────

function layout(title, bodyContent, activePage) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)} — Mediaphorie</title>
  <meta name="description" content="Mediaphorie — Your online store for ballet class music, CDs, MP3 downloads, and piano scores." />
  <link rel="stylesheet" href="/style.css" />
</head>
<body>

<nav class="main-nav">
  <a href="/" class="nav-logo"><img src="/images/logo.png" alt="Mediaphorie" /></a>
  <div class="nav-desktop">
    <a href="/shop/" class="nav-link ${activePage === 'shop' ? 'active' : ''}">Shop</a>
    <a href="/artists/" class="nav-link ${activePage === 'artists' ? 'active' : ''}">Artists</a>
    <a href="/about/" class="nav-link ${activePage === 'about' ? 'active' : ''}">About</a>
    <a href="/contact/" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
    <a href="/shop/" class="nav-cta">Shop Now</a>
  </div>
  <button class="nav-hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <div class="nav-drawer">
    <a href="/">Home</a>
    <a href="/shop/">Shop</a>
    <a href="/artists/">Artists</a>
    <a href="/about/">About</a>
    <a href="/contact/">Contact</a>
  </div>
</nav>

${bodyContent}

<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="/"><img src="/images/logo.png" alt="Mediaphorie" /></a>
      <p>Your online store for all your ballet music needs — CDs, MP3s, and piano scores.</p>
    </div>
    <div>
      <p class="footer-heading">Shop</p>
      <ul>
        <li><a href="/shop/">All Products</a></li>
        <li><a href="/shop/?filter=cd">Ballet Class CDs</a></li>
        <li><a href="/shop/?filter=mp3">MP3 Downloads</a></li>
        <li><a href="/shop/?filter=score">Piano Scores</a></li>
        <li><a href="/shop/?filter=children">Children's Music</a></li>
        <li><a href="/shop/?filter=classical">Classical Music</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-heading">Artists</p>
      <ul>
        ${ARTISTS.map(a => `<li><a href="/artists/${a.slug}/">${esc(a.name)} ${esc(a.surname)}</a></li>`).join('\n        ')}
        <li><a href="/artists/">All Artists &rarr;</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-heading">Info</p>
      <ul>
        <li><a href="/about/">About Us</a></li>
        <li><a href="/contact/">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; Mediaphorie &mdash; Music for Ballet Class</p>
    <div class="footer-langs"><span>EN</span><span>FR</span><span>JP</span></div>
  </div>
</footer>

<script src="/main.js"></script>
</body>
</html>`;
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────

function marqueeHTML() {
  const items = ['Ballet Class CDs', 'MP3 Downloads', 'Piano Scores', "Children's Music", 'Classical Music', 'Ballet Class CDs', 'MP3 Downloads', 'Piano Scores', "Children's Music", 'Classical Music'];
  return `<div class="marquee-strip">
  <div class="marquee-inner">
    ${items.map(t => `<span>${t}</span>`).join('')}
    ${items.map(t => `<span>${t}</span>`).join('')}
  </div>
</div>`;
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function homePage() {
  const releases = PRODUCTS.slice(0, 3);
  const previewArtists = ARTISTS.slice(0, 4);

  const body = `
<section class="hero">
  <div class="hero-content">
    <div class="eyebrow eyebrow-light">Ballet Music Specialists Since 2003</div>
    <h1>Music made <em>for the studio</em></h1>
    <p class="hero-sub">Handpicked recordings from the world's finest ballet pianists — crafted for teachers, dancers, and accompanists everywhere.</p>
    <div class="hero-actions">
      <a href="/shop/" class="btn-primary">Browse Collection</a>
      <a href="/artists/" class="btn-secondary">Meet Our Artists</a>
    </div>
  </div>
</section>

${marqueeHTML()}

<section class="section section-ivory">
  <div class="section-header-row">
    <div>
      <div class="eyebrow">Explore</div>
      <h2 class="section-header" style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(2rem,3.5vw,3.2rem);color:var(--charcoal);">Shop by Format</h2>
    </div>
    <a href="/shop/" class="btn-dark" style="flex-shrink:0;">View All &rarr;</a>
  </div>
  <div class="card-grid card-grid-3" style="grid-template-columns:repeat(3,1fr);">
    <a href="/shop/?filter=cd" class="cat-tile fade-up">
      <img src="/images/ballet-class.jpg" alt="Ballet Class CDs" />
      <div class="cat-tile-overlay">
        <div class="cat-tile-label">Most Popular</div>
        <div class="cat-tile-title">Ballet Class CDs</div>
        <div class="cat-tile-count">Full class recordings</div>
      </div>
    </a>
    <a href="/shop/?filter=mp3" class="cat-tile fade-up">
      <img src="/images/mp3.jpg" alt="MP3 Downloads" />
      <div class="cat-tile-overlay">
        <div class="cat-tile-label">Digital</div>
        <div class="cat-tile-title">MP3 Downloads</div>
        <div class="cat-tile-count">Instant access</div>
      </div>
    </a>
    <a href="/shop/?filter=score" class="cat-tile fade-up">
      <img src="/images/scores.jpg" alt="Piano Scores" />
      <div class="cat-tile-overlay">
        <div class="cat-tile-label">Print &amp; Digital</div>
        <div class="cat-tile-title">Piano Scores</div>
        <div class="cat-tile-count">Sheet music collections</div>
      </div>
    </a>
    <a href="/shop/?filter=children" class="cat-tile fade-up">
      <img src="/images/children.jpg" alt="Children's Music" />
      <div class="cat-tile-overlay">
        <div class="cat-tile-label">Young Dancers</div>
        <div class="cat-tile-title">Children's Music</div>
        <div class="cat-tile-count">Story &amp; movement</div>
      </div>
    </a>
    <a href="/shop/?filter=classical" class="cat-tile fade-up">
      <img src="/images/classical.jpg" alt="Classical Music" />
      <div class="cat-tile-overlay">
        <div class="cat-tile-label">Concert &amp; Stage</div>
        <div class="cat-tile-title">Classical Music</div>
        <div class="cat-tile-count">Original compositions</div>
      </div>
    </a>
    <a href="/shop/" class="cat-tile fade-up">
      <img src="/images/artists.jpg" alt="Browse by Artist" />
      <div class="cat-tile-overlay">
        <div class="cat-tile-label">Complete catalogue</div>
        <div class="cat-tile-title">All Music</div>
        <div class="cat-tile-count">Browse everything</div>
      </div>
    </a>
  </div>
</section>

<section class="section section-charcoal">
  <div class="section-header-row">
    <div>
      <div class="eyebrow eyebrow-light">Fresh Arrivals</div>
      <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(2rem,3.5vw,3.2rem);color:var(--ivory);">New Releases</h2>
    </div>
    <a href="/shop/" class="btn-secondary" style="flex-shrink:0;">All Products &rarr;</a>
  </div>
  <div class="card-grid card-grid-3">
    ${releases.map(p => `
    <a href="/shop/${p.slug}/" class="release-card fade-up">
      <div class="release-card-bg" style="background:${p.grad};"></div>
      <div class="release-card-overlay">
        <div class="release-card-tag">${esc(p.type)}${p.isNew ? ' &nbsp;· New' : ''}</div>
        <div class="release-card-title">${esc(p.title)}</div>
        <div class="release-card-artist">${esc(p.artist)}</div>
      </div>
    </a>`).join('')}
  </div>
</section>

<section class="section section-cream">
  <div class="section-header-row">
    <div>
      <div class="eyebrow">The Artists</div>
      <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(2rem,3.5vw,3.2rem);color:var(--charcoal);">Meet the Pianists</h2>
    </div>
    <a href="/artists/" class="btn-dark" style="flex-shrink:0;">All Artists &rarr;</a>
  </div>
  <div class="card-grid" style="grid-template-columns:repeat(4,1fr);gap:2rem;">
    ${previewArtists.map(a => `
    <a href="/artists/${a.slug}/" class="artist-mini fade-up">
      <div class="artist-mini-avatar" style="background:${a.bg};">${esc(a.initials)}</div>
      <div class="artist-mini-name">${esc(a.name)} ${esc(a.surname)}</div>
      <div class="artist-mini-role">${esc(a.role)}</div>
    </a>`).join('')}
  </div>
</section>

<div class="band-promo">
  <div class="band-promo-left">
    <div class="eyebrow" style="color:rgba(42,37,32,0.6);">Our Story</div>
    <h2>Ballet music, <em style="font-style:italic;">crafted with care</em></h2>
    <p>Since 2003, Mediaphorie has worked directly with the world's leading ballet pianists to bring studio-quality recordings to teachers and dancers across the globe. Every album is made with the dancer's journey in mind.</p>
    <a href="/about/" class="btn-dark">Learn More</a>
  </div>
  <div class="band-promo-right">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">20+</div>
        <div class="stat-label">Albums</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">9</div>
        <div class="stat-label">Artists</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">6</div>
        <div class="stat-label">Countries</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">3</div>
        <div class="stat-label">Languages</div>
      </div>
    </div>
  </div>
</div>
`;

  return layout('Home', body, 'home');
}

// ─── ARTISTS PAGE ─────────────────────────────────────────────────────────────

function artistsPage() {
  const body = `
<section class="page-hero">
  <div class="eyebrow eyebrow-light">The Roster</div>
  <h1>Our Artists</h1>
  <p>Nine world-class pianists, composers, and ballet professors — united by a passion for the art of dance accompaniment.</p>
</section>

${marqueeHTML()}

<section class="section section-ivory">
  <div class="card-grid card-grid-3">
    ${ARTISTS.map((a, i) => `
    <a href="/artists/${a.slug}/" class="artist-card fade-up" style="transition-delay:${i * 60}ms;">
      <div class="artist-card-avatar" style="background:${a.bg};">${esc(a.initials)}</div>
      <div class="artist-card-name">${esc(a.name)} ${esc(a.surname)}</div>
      <div class="artist-card-role">${esc(a.role)}</div>
      <div class="artist-card-country">${esc(a.country)}</div>
      <div class="artist-card-bio">${esc(a.bio.substring(0, 140))}${a.bio.length > 140 ? '…' : ''}</div>
      <div class="artist-card-albums">${a.albums.length} album${a.albums.length !== 1 ? 's' : ''}</div>
    </a>`).join('')}
  </div>
</section>
`;

  return layout('Artists', body, 'artists');
}

// ─── ARTIST PAGE ──────────────────────────────────────────────────────────────

function artistPage(artist) {
  const others = ARTISTS.filter(a => a.slug !== artist.slug).slice(0, 4);

  const body = `
<div class="artist-hero">
  <div class="artist-hero-left" style="background:${artist.bg};">
    <div class="breadcrumb" style="padding:0 0 2rem;color:rgba(248,245,240,0.4);">
      <a href="/artists/" style="color:rgba(248,245,240,0.4);">Artists</a>
      <span class="breadcrumb-sep">/</span>
      <span style="color:rgba(248,245,240,0.7);">${esc(artist.name)} ${esc(artist.surname)}</span>
    </div>
    <div class="artist-page-role">${esc(artist.role)}</div>
    <h1 class="artist-page-name">${esc(artist.name)} ${esc(artist.surname)}</h1>
    <div class="artist-page-country">${esc(artist.country)}</div>
    <p class="artist-page-bio">${esc(artist.bio)}</p>
  </div>
  <div class="artist-hero-right">
    <div class="artist-page-initials" style="background:${artist.bg};">${esc(artist.initials)}</div>
  </div>
</div>

<section class="section section-ivory">
  <div class="section-header">
    <div class="eyebrow">Works</div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(2rem,3vw,2.8rem);color:var(--charcoal);">Discography</h2>
  </div>
  <div class="album-grid">
    ${artist.albums.map(album => `
    <div class="album-card fade-up">
      <div class="album-card-cover" style="border-radius:3px;background:${album.grad};"></div>
      <div class="album-card-title">${esc(album.title)}</div>
      <div class="album-card-type">${esc(album.type)}</div>
    </div>`).join('')}
  </div>
</section>

<section class="section section-cream">
  <div class="section-header">
    <div class="eyebrow">Biography</div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(2rem,3vw,2.8rem);color:var(--charcoal);">About ${esc(artist.name)}</h2>
  </div>
  <p style="font-family:'Jost',sans-serif;font-weight:300;font-size:1rem;color:var(--mid);line-height:1.8;max-width:680px;">${esc(artist.extended)}</p>
</section>

<section class="section section-ivory">
  <div class="section-header-row">
    <div>
      <div class="eyebrow">Explore</div>
      <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(1.8rem,2.5vw,2.4rem);color:var(--charcoal);">Other Voices</h2>
    </div>
    <a href="/artists/" class="btn-dark" style="flex-shrink:0;">All Artists &rarr;</a>
  </div>
  <div class="other-voices">
    ${others.map(a => `
    <a href="/artists/${a.slug}/" class="artist-card fade-up">
      <div class="artist-card-avatar" style="background:${a.bg};">${esc(a.initials)}</div>
      <div class="artist-card-name">${esc(a.name)} ${esc(a.surname)}</div>
      <div class="artist-card-role">${esc(a.role)}</div>
      <div class="artist-card-country">${esc(a.country)}</div>
    </a>`).join('')}
  </div>
</section>
`;

  return layout(`${artist.name} ${artist.surname}`, body, 'artists');
}

// ─── SHOP PAGE ────────────────────────────────────────────────────────────────

function shopPage() {
  const body = `
<section class="page-hero">
  <div class="eyebrow eyebrow-light">The Catalogue</div>
  <h1>Shop</h1>
  <p>Browse our full collection of ballet class recordings, MP3 downloads, piano scores, and more.</p>
</section>

<div class="filter-bar">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="cd">Ballet Class CDs</button>
  <button class="filter-btn" data-filter="mp3">MP3 Downloads</button>
  <button class="filter-btn" data-filter="score">Piano Scores</button>
  <button class="filter-btn" data-filter="children">Children's Music</button>
  <button class="filter-btn" data-filter="classical">Classical Music</button>
</div>

<section class="section section-ivory">
  <div class="card-grid card-grid-4">
    ${PRODUCTS.map(p => `
    <a href="/shop/${p.slug}/" class="product-card" data-filter="${productFilterAttr(p)}">
      <div class="product-card-cover">
        <div class="product-card-cover-inner" style="background:${p.grad};"></div>
        ${p.isNew ? '<span class="product-card-new">New</span>' : ''}
      </div>
      <div class="product-card-body">
        <div class="product-card-type">${esc(p.type)}</div>
        <div class="product-card-title">${esc(p.title)}</div>
        <div class="product-card-artist">${esc(p.artist)}</div>
        <div class="product-card-footer">
          <div class="product-card-price">&euro;${p.price}</div>
          <div class="product-card-formats">
            ${p.formats.map(f => `<span class="format-tag">${esc(f)}</span>`).join('')}
          </div>
        </div>
      </div>
    </a>`).join('')}
  </div>
</section>
`;

  return layout('Shop', body, 'shop');
}

// ─── PRODUCT PAGE ─────────────────────────────────────────────────────────────

function productPage(product) {
  const related = PRODUCTS.filter(p => p.slug !== product.slug).slice(0, 3);
  const formatPrices = { 'CD': product.price, 'MP3': 15, 'Sheet Music': 30, 'Digital Download': product.price };

  const body = `
<div class="breadcrumb">
  <a href="/shop/">Shop</a>
  <span class="breadcrumb-sep">/</span>
  <span>${esc(product.title)}</span>
</div>

<div class="product-layout">
  <div class="product-cover-area">
    <div class="product-cover-square">
      <div class="product-cover-inner" style="background:${product.grad};"></div>
    </div>
    <div class="product-format-badges">
      ${product.formats.map(f => `<span class="format-tag">${esc(f)}</span>`).join('')}
    </div>
  </div>

  <div class="product-info-area">
    <div class="product-type">${esc(product.type)}</div>
    <h1 class="product-title">${esc(product.title)}</h1>
    ${product.artistSlug
      ? `<a href="/artists/${product.artistSlug}/" class="product-artist-link">${esc(product.artist)}</a>`
      : `<span class="product-artist-link">${esc(product.artist)}</span>`
    }

    <div class="format-selector">
      <div class="format-selector-label">Format</div>
      <div class="format-selector-btns">
        ${product.formats.map((f, i) => `<button class="format-btn${i === 0 ? ' active' : ''}" data-price="${formatPrices[f] || product.price}">${esc(f)}</button>`).join('')}
      </div>
    </div>

    <div class="product-price">&euro;${product.price}</div>

    <p class="product-desc">${esc(product.desc)}</p>

    ${product.tracks && product.tracks.length > 0 ? `
    <div class="track-list">
      <div class="track-list-label">Track Listing</div>
      <ol>
        ${product.tracks.map(t => `<li>${esc(t)}</li>`).join('')}
      </ol>
    </div>` : ''}

    <a href="/contact/" class="btn-primary" style="margin-top:1rem;">Enquire to Order</a>
  </div>
</div>

<section class="related-section">
  <div class="section-header-row">
    <div>
      <div class="eyebrow">You May Also Like</div>
      <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(1.8rem,2.5vw,2.4rem);color:var(--charcoal);">Related Products</h2>
    </div>
    <a href="/shop/" class="btn-dark" style="flex-shrink:0;">All Products &rarr;</a>
  </div>
  <div class="card-grid card-grid-3">
    ${related.map(p => `
    <a href="/shop/${p.slug}/" class="product-card">
      <div class="product-card-cover">
        <div class="product-card-cover-inner" style="background:${p.grad};"></div>
        ${p.isNew ? '<span class="product-card-new">New</span>' : ''}
      </div>
      <div class="product-card-body">
        <div class="product-card-type">${esc(p.type)}</div>
        <div class="product-card-title">${esc(p.title)}</div>
        <div class="product-card-artist">${esc(p.artist)}</div>
        <div class="product-card-footer">
          <div class="product-card-price">&euro;${p.price}</div>
          <div class="product-card-formats">
            ${p.formats.map(f => `<span class="format-tag">${esc(f)}</span>`).join('')}
          </div>
        </div>
      </div>
    </a>`).join('')}
  </div>
</section>
`;

  return layout(product.title, body, 'shop');
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────

function aboutPage() {
  const body = `
<div class="about-hero">
  <div class="about-hero-left">
    <div class="eyebrow eyebrow-light">Our Story</div>
    <h1>The heart behind<br />the music</h1>
    <p>Since 2003, Mediaphorie has been connecting ballet teachers and dancers with the finest accompaniment recordings in the world. We believe great music is the soul of great dance.</p>
  </div>
  <div class="about-hero-right">
    <blockquote class="about-hero-quote">"The music is not an accompaniment to the class — it is the class itself."</blockquote>
    <p class="about-hero-attr">— Mediaphorie, 2003</p>
  </div>
</div>

<section class="section section-ivory">
  <div class="section-header">
    <div class="eyebrow">Our Purpose</div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(2rem,3.5vw,3.2rem);color:var(--charcoal);">Mission</h2>
  </div>
  <p class="mission-text">"To place the world's finest ballet accompaniment in the hands of every teacher and dancer — from Paris to Tokyo, Montreal to London."</p>
</section>

<section class="section section-cream">
  <div class="section-header">
    <div class="eyebrow">What We Stand For</div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(2rem,3.5vw,3.2rem);color:var(--charcoal);">Our Values</h2>
  </div>
  <div class="values-grid">
    <div class="value-tile fade-up">
      <div class="value-tile-icon">&#9834;</div>
      <div class="value-tile-title">Musical Excellence</div>
      <p class="value-tile-text">Every recording is made to the highest standards, with pianists who truly understand the demands of the ballet class.</p>
    </div>
    <div class="value-tile fade-up">
      <div class="value-tile-icon">&#9670;</div>
      <div class="value-tile-title">Pedagogical Depth</div>
      <p class="value-tile-text">Our artists work directly with ballet teachers to ensure tempi, phrasing, and structure serve the dancer's needs perfectly.</p>
    </div>
    <div class="value-tile fade-up">
      <div class="value-tile-icon">&#9775;</div>
      <div class="value-tile-title">Global Reach</div>
      <p class="value-tile-text">Our catalogue serves teachers and dancers in over 30 countries, spanning every major ballet tradition.</p>
    </div>
    <div class="value-tile fade-up">
      <div class="value-tile-icon">&#9679;</div>
      <div class="value-tile-title">Artist Partnership</div>
      <p class="value-tile-text">We work closely with each artist, giving them full creative control while providing the platform to reach a global audience.</p>
    </div>
    <div class="value-tile fade-up">
      <div class="value-tile-icon">&#9733;</div>
      <div class="value-tile-title">Authenticity</div>
      <p class="value-tile-text">No loops, no digital shortcuts — every note is performed live by a world-class pianist in a professional recording environment.</p>
    </div>
    <div class="value-tile fade-up">
      <div class="value-tile-icon">&#9830;</div>
      <div class="value-tile-title">Accessibility</div>
      <p class="value-tile-text">We offer multiple formats — CD, MP3, and digital scores — so every teacher can find the format that suits their studio.</p>
    </div>
  </div>
</section>

<section class="section section-ivory">
  <div class="section-header">
    <div class="eyebrow">Around the World</div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(2rem,3.5vw,3.2rem);color:var(--charcoal);">Our Countries</h2>
  </div>
  <div class="countries-grid">
    <span class="country-badge">France</span>
    <span class="country-badge">Russia</span>
    <span class="country-badge">Japan</span>
    <span class="country-badge">United States</span>
    <span class="country-badge">United Kingdom</span>
    <span class="country-badge">Canada</span>
  </div>
</section>

<section class="section section-cream">
  <div class="section-header">
    <div class="eyebrow">Milestones</div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(2rem,3.5vw,3.2rem);color:var(--charcoal);">Our Story</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-year">2003</div>
      <div class="timeline-text">Mediaphorie is founded with a mission to bring studio-quality ballet accompaniment to teachers worldwide.</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2006</div>
      <div class="timeline-text">The first Dance Accompaniment volumes by Ellina Akimova are released, quickly becoming essential tools for ballet teachers.</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2009</div>
      <div class="timeline-text">Expansion into digital downloads and piano score collections, making our catalogue accessible in new formats.</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2015</div>
      <div class="timeline-text">The roster grows to nine artists spanning six countries — from Tokyo to Toronto, Paris to London.</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-year">2024</div>
      <div class="timeline-text">Launch of our new digital storefront, bringing twenty years of ballet music heritage to a new generation of teachers and dancers.</div>
    </div>
  </div>
</section>
`;

  return layout('About', body, 'about');
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────

function contactPage() {
  const body = `
<section class="page-hero">
  <div class="eyebrow eyebrow-light">Get in Touch</div>
  <h1>Contact</h1>
  <p>Questions about our catalogue, orders, or licensing? We would love to hear from you.</p>
</section>

${marqueeHTML()}

<div class="contact-layout">
  <div class="contact-form">
    <div class="eyebrow">Send a Message</div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(1.8rem,2.5vw,2.4rem);color:var(--charcoal);margin-bottom:2rem;">We&rsquo;ll get back to you</h2>
    <form action="#" method="POST">
      <div class="form-group">
        <label class="form-label" for="name">Your Name</label>
        <input class="form-input" type="text" id="name" name="name" placeholder="Marie Dupont" required />
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input class="form-input" type="email" id="email" name="email" placeholder="marie@balletschool.fr" required />
      </div>
      <div class="form-group">
        <label class="form-label" for="subject">Subject</label>
        <select class="form-select" id="subject" name="subject">
          <option value="">Select a subject…</option>
          <option value="order">Order Enquiry</option>
          <option value="catalogue">Catalogue Question</option>
          <option value="licensing">Licensing</option>
          <option value="artist">Artist Collaboration</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="message">Message</label>
        <textarea class="form-textarea" id="message" name="message" rows="6" placeholder="Tell us what you need…" required></textarea>
      </div>
      <button type="submit" class="btn-primary">Send Message</button>
    </form>
  </div>

  <div class="contact-info">
    <div class="eyebrow">Find Us</div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(1.8rem,2.5vw,2.4rem);color:var(--charcoal);margin-bottom:2rem;">Contact Information</h2>

    <div class="contact-info-item">
      <div class="contact-info-icon">&#9993;</div>
      <div>
        <div class="contact-info-label">Email</div>
        <div class="contact-info-value">contact@mediaphorie.com</div>
      </div>
    </div>

    <div class="contact-info-item">
      <div class="contact-info-icon">&#128205;</div>
      <div>
        <div class="contact-info-label">Based In</div>
        <div class="contact-info-value">Paris, France</div>
      </div>
    </div>

    <div class="contact-info-item">
      <div class="contact-info-icon">&#128337;</div>
      <div>
        <div class="contact-info-label">Response Time</div>
        <div class="contact-info-value">We aim to reply within 2 business days.</div>
      </div>
    </div>

    <div style="margin-top:2rem;padding:1.5rem;background:var(--cream);border-radius:3px;">
      <div class="eyebrow" style="margin-bottom:0.75rem;">Orders</div>
      <p style="font-family:'Jost',sans-serif;font-weight:300;font-size:0.85rem;color:var(--mid);line-height:1.65;">To place an order, please send us a message with the products you are interested in. We will confirm availability and provide payment details by return email.</p>
    </div>
  </div>
</div>
`;

  return layout('Contact', body, 'contact');
}

// ─── FILE I/O ─────────────────────────────────────────────────────────────────

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.statSync(srcPath).isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  });
}

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

// ─── BUILD ────────────────────────────────────────────────────────────────────

if (fs.existsSync('out')) fs.rmSync('out', { recursive: true });
copyDir('public', 'out');

write('out/index.html', homePage());
write('out/artists/index.html', artistsPage());
ARTISTS.forEach(a => write(`out/artists/${a.slug}/index.html`, artistPage(a)));
write('out/shop/index.html', shopPage());
PRODUCTS.forEach(p => write(`out/shop/${p.slug}/index.html`, productPage(p)));
write('out/about/index.html', aboutPage());
write('out/contact/index.html', contactPage());

const total = 2 + ARTISTS.length + 2 + PRODUCTS.length + 2;
console.log('Built successfully \u2014 ' + total + ' pages');
