import { useRouter } from "next/router";
import { T } from "../../lib/tokens";
import { ARTISTS } from "../../lib/data";
import { useEffect } from "react";
import { FadeUp } from "../../hooks/useFadeUp";
import Eyebrow from "../../components/Eyebrow";

export default function ArtistPage({ slug }) {
  const router = useRouter();
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  const a = ARTISTS.find(x => x.slug === slug) || ARTISTS[0];
  const others = ARTISTS.filter(x => x.slug !== slug).slice(0, 4);
  return (
    <div>
      <section style={{ display:"grid", gridTemplateColumns:"1fr 1.2fr", paddingTop:68, minHeight:"75vh" }}>
        <div style={{ background:a.bg, display:"flex", flexDirection:"column", justifyContent:"center", padding:"5rem 4rem 5rem 5.5rem", position:"relative", overflow:"hidden" }}>
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"8rem", fontWeight:300, color:"rgba(255,255,255,0.08)", position:"absolute", top:"2rem", right:"2rem", pointerEvents:"none", lineHeight:1 }}>{a.initials}</span>
          <div style={{ position:"relative", zIndex:1 }}>
            <p style={{ fontSize:"0.72rem", color:T.light, marginBottom:"1.5rem" }}>
              <button onClick={() => router.push("/")} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.4)", cursor:"pointer", fontSize:"inherit", fontFamily:"'Jost',sans-serif" }}>Home</button>
              <span style={{ opacity:0.3, margin:"0 0.4rem" }}>›</span>
              <button onClick={() => router.push("/artists")} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.4)", cursor:"pointer", fontSize:"inherit", fontFamily:"'Jost',sans-serif" }}>Artists</button>
              <span style={{ opacity:0.3, margin:"0 0.4rem" }}>›</span>
              <span style={{ color:"rgba(255,255,255,0.65)" }}>{a.surname}</span>
            </p>
            <Eyebrow light>{a.country}</Eyebrow>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.5rem,5vw,4.5rem)", fontWeight:300, color:T.white, lineHeight:1.05, marginBottom:"0.4rem" }}>{a.name}<br /><em style={{ fontStyle:"italic" }}>{a.surname}</em></h1>
            <p style={{ fontSize:"0.78rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom:"1.8rem" }}>{a.role}</p>
            <p style={{ fontSize:"0.92rem", lineHeight:1.85, color:"rgba(255,255,255,0.65)", maxWidth:420, marginBottom:"2.5rem" }}>{a.bio}</p>
            <button onClick={() => router.push("/shop")} style={{ background:T.gold, color:T.white, padding:"0.85rem 2rem", fontSize:"0.76rem", letterSpacing:"0.1em", textTransform:"uppercase", border:"none", borderRadius:2, cursor:"pointer", fontFamily:"'Jost',sans-serif" }}>Browse Discography</button>
          </div>
        </div>
        <div style={{ background:T.cream, display:"flex", alignItems:"center", justifyContent:"center", padding:"5rem 4rem", position:"relative" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(184,151,90,0.07) 1px, transparent 1px)", backgroundSize:"28px 28px" }} />
          <div style={{ textAlign:"center", zIndex:1, position:"relative" }}>
            <div style={{ width:220, height:220, borderRadius:"50%", background:a.bg, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cormorant Garamond',serif", fontSize:"5rem", color:"rgba(255,255,255,0.5)", margin:"0 auto 2rem", boxShadow:"0 40px 100px rgba(42,37,32,0.2)", border:"4px solid rgba(255,255,255,0.25)" }}>{a.initials}</div>
            <div style={{ background:T.white, borderRadius:3, padding:"1rem 1.5rem", display:"inline-flex", gap:"2rem", boxShadow:"0 8px 24px rgba(42,37,32,0.1)" }}>
              <div><p style={{ fontSize:"0.62rem", letterSpacing:"0.14em", textTransform:"uppercase", color:T.light, marginBottom:"0.15rem" }}>Origin</p><p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem", color:T.charcoal }}>{a.country}</p></div>
              <div style={{ width:1, background:T.creamDark }} />
              <div><p style={{ fontSize:"0.62rem", letterSpacing:"0.14em", textTransform:"uppercase", color:T.light, marginBottom:"0.15rem" }}>Releases</p><p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem", color:T.charcoal }}>{a.albums.length} Albums</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Discography */}
      <section style={{ padding:"5.5rem 5.5rem", background:T.ivory }}>
        <FadeUp><Eyebrow>Discography</Eyebrow><h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.5rem", fontWeight:300, color:T.charcoal, marginBottom:"2.5rem" }}>Albums by {a.name} {a.surname}</h2></FadeUp>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem", alignItems:"stretch" }}>
          {a.albums.map((al, i) => (
            <FadeUp key={al.title} delay={i * 0.08}>
              <div onClick={() => router.push("/shop")} style={{ background:T.white, border:`1px solid ${T.creamDark}`, borderRadius:3, overflow:"hidden", cursor:"pointer", transition:"transform 0.3s, box-shadow 0.3s", display:"flex", flexDirection:"column", width:"100%", height:"100%" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 20px 50px rgba(42,37,32,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}>
                <div style={{ aspectRatio:"1", background:al.grad, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"3rem", color:"rgba(255,255,255,0.08)", flexShrink:0 }}>♫</div>
                <div style={{ padding:"1.1rem 1.2rem 1.3rem" }}>
                  <p style={{ fontSize:"0.66rem", letterSpacing:"0.12em", textTransform:"uppercase", color:a.accent, marginBottom:"0.35rem" }}>{al.type}</p>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.05rem", color:T.charcoal, lineHeight:1.35 }}>{al.title}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* About extended */}
      <section style={{ background:T.charcoal, padding:"5.5rem 5.5rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
        <div>
          <Eyebrow light>About the Artist</Eyebrow>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.4rem", fontWeight:300, color:T.ivory, lineHeight:1.2, marginBottom:"1.5rem" }}>The story behind the music</h2>
          <p style={{ fontSize:"0.9rem", color:"rgba(248,245,240,0.6)", lineHeight:1.9, marginBottom:"1.5rem" }}>{a.extended}</p>
          {a.quote && <div style={{ borderLeft:`2px solid ${T.gold}`, paddingLeft:"1.5rem" }}>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.35rem", fontStyle:"italic", color:T.goldLight, lineHeight:1.5 }}>"{a.quote}"</p>
          </div>}
        </div>
        <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:4, padding:"3rem", textAlign:"center" }}>
          <div style={{ width:140, height:140, borderRadius:"50%", background:a.bg, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cormorant Garamond',serif", fontSize:"3.5rem", color:"rgba(255,255,255,0.45)", margin:"0 auto 1.8rem", border:"3px solid rgba(255,255,255,0.08)" }}>{a.initials}</div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.7rem", fontWeight:300, color:T.ivory, marginBottom:"0.3rem" }}>{a.name} {a.surname}</p>
          <p style={{ fontSize:"0.74rem", letterSpacing:"0.1em", color:T.light, marginBottom:"1.4rem" }}>{a.role} · {a.country}</p>
          <p style={{ fontSize:"0.78rem", color:T.light }}>{a.albums.length} Album{a.albums.length !== 1 ? "s" : ""} on Mediaphorie</p>
        </div>
      </section>

      {/* Other artists */}
      <section style={{ padding:"5rem 5.5rem", background:T.cream }}>
        <FadeUp><div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"2.5rem", flexWrap:"wrap", gap:"1rem" }}>
          <div><Eyebrow>Explore More</Eyebrow><h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.2rem", fontWeight:300, color:T.charcoal }}>Other voices</h2></div>
          <button onClick={() => router.push("/artists")} style={{ fontSize:"0.74rem", letterSpacing:"0.13em", textTransform:"uppercase", color:T.gold, background:"none", border:"none", borderBottom:`1px solid ${T.gold}`, paddingBottom:2, cursor:"pointer", fontFamily:"'Jost',sans-serif" }}>All artists →</button>
        </div></FadeUp>
        <div className="card-grid" style={{ gridTemplateColumns:"repeat(4,1fr)", gap:"1.5rem" }}>
          {others.map((oa, i) => (
            <FadeUp key={oa.slug} delay={i * 0.07}>
              <div onClick={() => router.push("/artists/" + oa.slug)} style={{ textAlign:"center", background:T.white, borderRadius:3, border:`1px solid ${T.creamDark}`, padding:"2rem 1rem", cursor:"pointer", transition:"transform 0.3s, box-shadow 0.3s", display:"flex", flexDirection:"column", alignItems:"center", width:"100%", height:"100%", boxSizing:"border-box" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 30px rgba(42,37,32,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}>
                <div style={{ width:64, height:64, borderRadius:"50%", background:oa.bg, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cormorant Garamond',serif", fontSize:"1.2rem", color:"rgba(255,255,255,0.6)", margin:"0 auto 0.8rem" }}>{oa.initials}</div>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"0.95rem", color:T.charcoal, marginBottom:"0.2rem" }}>{oa.name} {oa.surname}</p>
                <p style={{ fontSize:"0.7rem", color:T.light }}>{oa.role}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: ARTISTS.map(a => ({ params: { slug: a.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
