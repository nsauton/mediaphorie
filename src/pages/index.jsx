import { useRouter } from "next/router";
import { T } from "../lib/tokens";
import { ARTISTS, PRODUCTS } from "../lib/data";
import { FadeUp } from "../hooks/useFadeUp";
import Eyebrow from "../components/Eyebrow";
import Marquee from "../components/Marquee";
import CatTile from "../components/CatTile";
import ReleaseCard from "../components/ReleaseCard";
import ArtistMini from "../components/ArtistMini";

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      {/* Hero */}
      <section style={{ minHeight:"100vh", background:T.charcoal, display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:68, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 15% 80%, rgba(184,151,90,0.09) 0%, transparent 55%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 85% 20%, rgba(184,151,90,0.05) 0%, transparent 50%)", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1, maxWidth:820, padding:"0 5.5rem" }}>
          <Eyebrow light>Ballet Music Specialists Since 2003</Eyebrow>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(3.5rem,6vw,7rem)", fontWeight:300, lineHeight:1.02, color:T.ivory, marginBottom:"1.6rem" }}>
            Music made<br /><em style={{ fontStyle:"italic", color:T.goldLight }}>for the studio</em>
          </h1>
          <p style={{ fontSize:"1rem", lineHeight:1.85, color:"rgba(248,245,240,0.5)", maxWidth:480, marginBottom:"3rem" }}>
            CDs, MP3 downloads, and piano scores crafted by world-class pianists and composers from the global dance community — Canada, France, Japan, Russia, the UK, and the United States.
          </p>
          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            <button onClick={() => router.push("/shop")} style={{ background:T.gold, color:T.white, padding:"0.9rem 2.2rem", fontSize:"0.76rem", letterSpacing:"0.1em", textTransform:"uppercase", border:"none", borderRadius:2, cursor:"pointer", fontFamily:"'Jost',sans-serif" }}>Browse the Collection</button>
            <button onClick={() => router.push("/artists")} style={{ border:`1px solid rgba(248,245,240,0.25)`, color:T.ivory, padding:"0.9rem 2.2rem", fontSize:"0.76rem", letterSpacing:"0.1em", textTransform:"uppercase", background:"none", borderRadius:2, cursor:"pointer", fontFamily:"'Jost',sans-serif" }}>Meet Our Artists</button>
          </div>
        </div>
        {/* Decorative large background text */}
        <div style={{ position:"absolute", right:"4rem", bottom:"3rem", fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(6rem,14vw,16rem)", fontWeight:300, color:"rgba(255,255,255,0.025)", lineHeight:1, userSelect:"none", pointerEvents:"none", letterSpacing:"-0.02em" }}>
          ♫
        </div>
      </section>

      <Marquee items={["Music for Ballet Class","Piano Scores","MP3 Downloads","Children's Music","Classical Music","Sheet Music","Ballet Accompaniment","Dance Studio Music"]} />

      {/* Categories */}
      <section style={{ padding:"6rem 5.5rem", background:T.ivory, marginBottom:0, paddingBottom:"6rem" }}>
        <FadeUp>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:"2.8rem", flexWrap:"wrap", gap:"1rem" }}>
            <div><Eyebrow>Shop by Format</Eyebrow><h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.9rem,3vw,2.8rem)", fontWeight:300, color:T.charcoal }}>Find your format</h2></div>
            <button onClick={() => router.push("/shop")} style={{ fontSize:"0.74rem", letterSpacing:"0.13em", textTransform:"uppercase", color:T.gold, background:"none", border:"none", borderBottom:`1px solid ${T.gold}`, paddingBottom:2, cursor:"pointer", fontFamily:"'Jost',sans-serif" }}>View all products →</button>
          </div>
        </FadeUp>
        <div className="card-grid" style={{ gridTemplateColumns:"repeat(3,1fr)", gap:"1.5px", background:T.creamDark, borderRadius:4, overflow:"hidden", border:`1.5px solid ${T.creamDark}` }}>
          {[["/images/ballet-class.jpg","Ballet Class CDs","Professionally recorded albums for every barre and centre exercise.","cd"],["/images/mp3.jpg","MP3 Downloads","Instant access to tracks and albums. Download and play immediately.","mp3"],["/images/scores.jpg","Piano Scores","Sheet music for pianists accompanying ballet class.","score"],["/images/children.jpg","Children's Music","Gentle, imaginative music for young dancers, including The Snow Queen.","children"],["/images/classical.jpg","Classical Music","Recital recordings including Camille — La Mouette and more.","classical"],["/images/artists.jpg","Browse by Artist","Discover artists united by a passion for dance and music.","artists"]].map(([img, name, desc, target], i) => (
            <CatTile key={i} img={img} name={name} desc={desc} onClick={() => target==="artists" ? router.push("/artists") : router.push("/shop?filter=" + target)} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section style={{ background:T.charcoal, padding:"6rem 5.5rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 80% 20%, rgba(184,151,90,0.07) 0%, transparent 60%)", pointerEvents:"none" }} />
        <FadeUp>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:"2.8rem", flexWrap:"wrap", gap:"1rem", position:"relative", zIndex:1 }}>
            <div><Eyebrow light>New Releases</Eyebrow><h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.9rem,3vw,2.8rem)", fontWeight:300, color:T.ivory }}>Latest from our artists</h2></div>
            <button onClick={() => router.push("/shop")} style={{ fontSize:"0.74rem", letterSpacing:"0.13em", textTransform:"uppercase", color:T.goldLight, background:"none", border:"none", borderBottom:`1px solid ${T.goldLight}`, paddingBottom:2, cursor:"pointer", fontFamily:"'Jost',sans-serif" }}>View all →</button>
          </div>
        </FadeUp>
        <div className="card-grid" style={{ gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem", position:"relative", zIndex:1 }}>
          {PRODUCTS.slice(0,3).map((p, i) => (
            <FadeUp key={p.slug} delay={i * 0.1}>
              <ReleaseCard p={p} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Artists preview */}
      <section style={{ padding:"6rem 5.5rem", background:T.cream }}>
        <FadeUp>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:"2.8rem", flexWrap:"wrap", gap:"1rem" }}>
            <div><Eyebrow>Our Artists</Eyebrow><h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.9rem,3vw,2.8rem)", fontWeight:300, color:T.charcoal }}>The voices behind the music</h2></div>
            <button onClick={() => router.push("/artists")} style={{ fontSize:"0.74rem", letterSpacing:"0.13em", textTransform:"uppercase", color:T.gold, background:"none", border:"none", borderBottom:`1px solid ${T.gold}`, paddingBottom:2, cursor:"pointer", fontFamily:"'Jost',sans-serif" }}>All artists →</button>
          </div>
        </FadeUp>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"2rem", alignItems:"stretch" }}>
          {ARTISTS.slice(0,4).map((a, i) => (
            <FadeUp key={a.slug} delay={i * 0.08}>
              <ArtistMini a={a} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* About band */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr" }}>
        <div style={{ background:T.gold, padding:"6rem 5.5rem", display:"flex", flexDirection:"column", justifyContent:"center" }}>
          <Eyebrow light>About Mediaphorie</Eyebrow>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,3.5vw,3rem)", fontWeight:300, color:T.white, lineHeight:1.2, marginBottom:"1.4rem" }}>Dedicated to dancers &amp; instructors worldwide</h2>
          <p style={{ fontSize:"0.92rem", color:"rgba(255,255,255,0.8)", lineHeight:1.85, maxWidth:400, marginBottom:"2.5rem" }}>Our artists bring their expertise from dance communities across Canada, France, Japan, Russia, the UK, and the United States.</p>
          <button onClick={() => router.push("/about")} style={{ background:T.white, color:T.gold, padding:"0.85rem 2rem", fontSize:"0.76rem", letterSpacing:"0.1em", textTransform:"uppercase", border:"none", borderRadius:2, cursor:"pointer", fontFamily:"'Jost',sans-serif", alignSelf:"flex-start" }}>Our Story</button>
        </div>
        <div style={{ background:T.charcoal, display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, backgroundColor:T.charcoalMid }}>
          {[["20+","Albums available"],["9","Resident artists"],["6","Countries"],["3","Languages"]].map(([n, l]) => (
            <div key={l} style={{ background:T.charcoal, padding:"3.5rem", display:"flex", flexDirection:"column", justifyContent:"center" }}>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"3.8rem", fontWeight:300, color:T.goldLight, lineHeight:1, marginBottom:"0.4rem" }}>{n}</p>
              <p style={{ fontSize:"0.76rem", color:T.light, letterSpacing:"0.08em" }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
