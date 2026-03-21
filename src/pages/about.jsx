import { T } from "../lib/tokens";
import { FadeUp } from "../hooks/useFadeUp";
import Eyebrow from "../components/Eyebrow";

export default function AboutPage() {
  return (
    <div>
      <section style={{ display:"grid", gridTemplateColumns:"1fr 1fr", paddingTop:68, minHeight:"75vh" }}>
        <div style={{ background:T.charcoal, display:"flex", flexDirection:"column", justifyContent:"center", padding:"5rem 5rem 5rem 5.5rem", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 20% 80%, rgba(184,151,90,0.1) 0%, transparent 60%)" }} />
          <div style={{ position:"relative", zIndex:1 }}>
            <Eyebrow light>Our Story</Eyebrow>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.8rem,5vw,4.8rem)", fontWeight:300, color:T.ivory, lineHeight:1.05, marginBottom:"1.5rem" }}>Music born from<br /><em style={{ fontStyle:"italic", color:T.goldLight }}>a love of dance</em></h1>
            <p style={{ fontSize:"1rem", color:"rgba(248,245,240,0.6)", lineHeight:1.85, maxWidth:420 }}>Mediaphorie was founded on a single belief: that dancers and instructors deserve music created by people who truly understand the studio.</p>
          </div>
        </div>
        <div style={{ background:T.gold, display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"5rem 4.5rem", position:"relative", overflow:"hidden" }}>
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"22rem", color:"rgba(255,255,255,0.07)", position:"absolute", top:"-3rem", left:"-1rem", lineHeight:1, pointerEvents:"none" }}>"</span>
          <div style={{ position:"relative", zIndex:1 }}>
            <blockquote style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.65rem", fontWeight:300, fontStyle:"italic", color:T.white, lineHeight:1.45, marginBottom:"1.2rem" }}>"We are not publishers who happen to record music. We are musicians who are passionate about dance."</blockquote>
            <cite style={{ fontStyle:"normal", fontSize:"0.76rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.6)" }}>— Mediaphorie, founded 2003</cite>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding:"7rem 5.5rem", background:T.ivory, display:"grid", gridTemplateColumns:"1fr 1.5fr", gap:"7rem", alignItems:"start" }}>
        <div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"5rem", fontWeight:300, color:T.creamDark, lineHeight:1, marginBottom:"1.5rem", userSelect:"none" }}>01</p>
          <Eyebrow>Our Mission</Eyebrow>
        </div>
        <FadeUp>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.8rem", fontWeight:300, color:T.charcoal, lineHeight:1.2, marginBottom:"1.8rem" }}>Dedicated to the art of the ballet class, worldwide</h2>
          <p style={{ fontSize:"0.92rem", color:T.mid, lineHeight:1.9, marginBottom:"1rem" }}>Mediaphorie is dedicated to providing dancers and instructors with the finest music for ballet class. Since 2003, we have worked with pianists, composers, and performers from the global dance community to build a catalogue that teachers can trust and dancers can love.</p>
          <p style={{ fontSize:"0.92rem", color:T.mid, lineHeight:1.9 }}>Every album in our collection has been created by artists who accompany or have accompanied professional ballet classes. This is not library music — it is music made from the inside of the dance world.</p>
        </FadeUp>
      </section>

      {/* Values */}
      <section style={{ background:T.charcoal, padding:"7rem 5.5rem" }}>
        <FadeUp><Eyebrow light>What We Believe</Eyebrow><h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.8rem", fontWeight:300, color:T.ivory, marginBottom:"3.5rem" }}>Our values</h2></FadeUp>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5px", background:"rgba(255,255,255,0.05)", borderRadius:4, overflow:"hidden" }}>
          {[["","Musical Excellence","Every recording is made to the highest professional standard, bringing genuine artistry to every note."],["","Deep Studio Knowledge","We only work with artists who understand the ballet class from the inside — informed by real studio experience."],["","International Perspective","Our roster spans six countries, bringing the richness of diverse musical traditions to the studio."],["","Multiple Formats","CD, MP3, or printed score — we make our music accessible in whatever format works best for you."],["","Music for Everyone","From professional companies to children's first classes, our catalogue serves dancers at every level and age."],["","Community First","Mediaphorie exists because of the ballet community, and everything we do is in service of that community."]].map(([icon, title, desc]) => (
            <div key={title} style={{ background:T.charcoal, padding:"3rem", transition:"background 0.3s", display:"flex", flexDirection:"column" }}
              onMouseEnter={e => e.currentTarget.style.background = T.charcoalMid}
              onMouseLeave={e => e.currentTarget.style.background = T.charcoal}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:400, color:T.ivory, marginBottom:"0.5rem" }}>{title}</h3>
              <p style={{ fontSize:"0.82rem", color:T.light, lineHeight:1.8 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Countries */}
      <section style={{ padding:"7rem 5.5rem", background:T.cream, textAlign:"center" }}>
        <FadeUp>
          <Eyebrow>Our Artists Come From</Eyebrow>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"3rem", fontWeight:300, color:T.charcoal, marginBottom:"3rem" }}>Six countries, one passion</h2>
          <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"1.2rem" }}>
            {["France","Russia","Japan","United Kingdom","United States","Canada"].map(country => (
              <div key={country} style={{ background:T.white, border:`1px solid ${T.creamDark}`, borderRadius:50, padding:"0.8rem 1.8rem", fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", color:T.charcoal }}>{country}</div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* Timeline */}
      <section style={{ padding:"7rem 5.5rem", background:T.ivory }}>
        <FadeUp><Eyebrow>History</Eyebrow><h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"3rem", fontWeight:300, color:T.charcoal, marginBottom:"3.5rem" }}>Two decades of music</h2></FadeUp>
        <div style={{ maxWidth:680, margin:"0 auto", position:"relative" }}>
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:1, background:T.creamDark }} />
          {[["2003","Mediaphorie Founded","Established with a mission to bring professional-quality ballet music to teachers and students worldwide."],["2004–2008","First Albums Released","Ellina Akimova's first Dance Accompaniment volumes and Richard Davis's Music for Ballet Class are released."],["2009–2013","International Expansion","Partnerships with Ayumi Hirusaki in Japan and Marina Surgan open the catalogue to the global market."],["2015–2020","Digital & Scores","MP3 downloads and Piano Scores Unlimited launch, making the music instantly accessible worldwide."],["2021–Present","New Releases & Community","Dance Accompaniment Vol. V and Marina Surgan Live 3 mark a new era of growth and artistic excellence."]].map(([year, title, desc], i) => (
            <FadeUp key={year} delay={i * 0.1}>
              <div style={{ paddingLeft:"2.5rem", paddingBottom:"3rem", position:"relative" }}>
                <div style={{ position:"absolute", left:-4, top:6, width:9, height:9, borderRadius:"50%", background:T.gold }} />
                <p style={{ fontSize:"0.7rem", letterSpacing:"0.14em", textTransform:"uppercase", color:T.gold, marginBottom:"0.4rem" }}>{year}</p>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.25rem", color:T.charcoal, marginBottom:"0.3rem" }}>{title}</h3>
                <p style={{ fontSize:"0.83rem", color:T.light, lineHeight:1.75 }}>{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
