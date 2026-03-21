import { useState } from "react";
import { useRouter } from "next/router";
import { T } from "../../lib/tokens";
import { PRODUCTS } from "../../lib/data";
import { FadeUp } from "../../hooks/useFadeUp";
import Eyebrow from "../../components/Eyebrow";
import ProductCard from "../../components/ProductCard";

export default function ProductPage({ slug }) {
  const router = useRouter();
  const p = PRODUCTS.find(x => x.slug === slug) || PRODUCTS[0];
  const [format, setFormat] = useState(p.formats[0]);
  const price = format === "MP3" ? p.price - 7 : format === "Sheet Music" ? p.price + 8 : p.price;
  const [added, setAdded] = useState(false);
  return (
    <div style={{ paddingTop:68, background:T.ivory }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"4rem 3.5rem" }}>
        <p style={{ fontSize:"0.72rem", color:T.light, marginBottom:"2.5rem" }}>
          <button onClick={() => router.push("/")} style={{ background:"none", border:"none", color:T.light, cursor:"pointer", fontSize:"inherit", fontFamily:"'Jost',sans-serif" }}>Home</button>
          <span style={{ opacity:0.4, margin:"0 0.4rem" }}>›</span>
          <button onClick={() => router.push("/shop")} style={{ background:"none", border:"none", color:T.light, cursor:"pointer", fontSize:"inherit", fontFamily:"'Jost',sans-serif" }}>Shop</button>
          <span style={{ opacity:0.4, margin:"0 0.4rem" }}>›</span>
          <span>{p.title}</span>
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.1fr", gap:"5.5rem", alignItems:"start" }}>
          {/* Art */}
          <div style={{ position:"sticky", top:"calc(68px + 2rem)" }}>
            <div style={{ aspectRatio:"1", background:p.grad, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"8rem", color:"rgba(255,255,255,0.08)", boxShadow:"0 40px 80px rgba(42,37,32,0.2)", marginBottom:"1.2rem" }}>♫</div>
            <div style={{ display:"flex", gap:"0.7rem" }}>
              {["♫","📋","🎹"].map((icon, i) => (
                <div key={i} style={{ width:64, height:64, borderRadius:3, background: i===0 ? p.grad : T.charcoal, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", cursor:"pointer", border:`2px solid ${i===0 ? T.gold : "transparent"}` }}>{icon}</div>
              ))}
            </div>
          </div>
          {/* Info */}
          <div>
            <span style={{ display:"inline-block", background:T.goldPale, color:T.gold, fontSize:"0.66rem", letterSpacing:"0.14em", textTransform:"uppercase", padding:"0.3rem 0.8rem", borderRadius:2, marginBottom:"1.1rem" }}>{p.type}</span>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:300, color:T.charcoal, lineHeight:1.1, marginBottom:"0.4rem" }}>{p.title}</h1>
            <button onClick={() => { if (p.artistSlug) { router.push("/artists/" + p.artistSlug); } }} style={{ fontSize:"0.88rem", color:T.gold, background:"none", border:"none", borderBottom:`1px solid rgba(184,151,90,0.3)`, paddingBottom:1, cursor:"pointer", marginBottom:"1.8rem", fontFamily:"'Jost',sans-serif" }}>by {p.artist}</button>
            <p style={{ fontSize:"0.9rem", color:T.mid, lineHeight:1.9, marginBottom:"2.2rem" }}>{p.desc}</p>
            <p style={{ fontSize:"0.7rem", letterSpacing:"0.14em", textTransform:"uppercase", color:T.light, marginBottom:"0.7rem" }}>Format</p>
            <div style={{ display:"flex", gap:"0.7rem", marginBottom:"2.2rem", flexWrap:"wrap" }}>
              {p.formats.map(f => (
                <button key={f} onClick={() => setFormat(f)} style={{ padding:"0.6rem 1.2rem", border:`1px solid ${format===f ? T.charcoal : T.creamDark}`, borderRadius:2, fontSize:"0.78rem", cursor:"pointer", background: format===f ? T.charcoal : "none", color: format===f ? T.ivory : T.mid, fontFamily:"'Jost',sans-serif", transition:"all 0.2s" }}>{f}</button>
              ))}
            </div>
            <div style={{ borderTop:`1px solid ${T.creamDark}`, paddingTop:"2rem", marginBottom:"1.8rem" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"1.5rem", marginBottom:"1.5rem" }}>
                <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.8rem", fontWeight:300, color:T.charcoal }}>€{price}</span>
                <div style={{ fontSize:"0.76rem", color:T.light, lineHeight:1.5 }}>Free shipping over €50<br />Secure checkout</div>
              </div>
              <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
                <button onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2000); }} style={{ flex:1, background: added ? "#3a7050" : T.gold, color:T.white, padding:"0.9rem 2rem", fontSize:"0.76rem", letterSpacing:"0.1em", textTransform:"uppercase", border:"none", borderRadius:2, cursor:"pointer", fontFamily:"'Jost',sans-serif", transition:"background 0.3s" }}>{added ? "✓ Added to Cart" : "Add to Cart"}</button>
                <button style={{ border:`1px solid ${T.charcoal}`, color:T.charcoal, padding:"0.9rem 1.5rem", fontSize:"0.76rem", letterSpacing:"0.1em", textTransform:"uppercase", background:"none", borderRadius:2, cursor:"pointer", fontFamily:"'Jost',sans-serif" }}>♡ Save</button>
              </div>
            </div>
            {p.tracks.length > 0 && (
              <div style={{ borderTop:`1px solid ${T.creamDark}`, paddingTop:"2rem" }}>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:300, color:T.charcoal, marginBottom:"1.2rem" }}>Track Listing</h3>
                {p.tracks.map((t, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"1rem", padding:"0.75rem 0", borderBottom:`1px solid ${T.cream}` }}>
                    <span style={{ fontSize:"0.74rem", color:T.light, width:22, textAlign:"center", flexShrink:0 }}>{i+1}</span>
                    <span style={{ fontSize:"0.88rem", color:T.charcoal, flex:1 }}>{t}</span>
                    <button style={{ width:28, height:28, borderRadius:"50%", background:T.creamDark, border:"none", cursor:"pointer", fontSize:"0.65rem", color:T.mid, transition:"background 0.2s" }}
                      onMouseEnter={e => { e.target.style.background=T.gold; e.target.style.color=T.white; }}
                      onMouseLeave={e => { e.target.style.background=T.creamDark; e.target.style.color=T.mid; }}>▶</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Related */}
      <section style={{ background:T.cream, padding:"5rem 3.5rem" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <FadeUp><Eyebrow>You May Also Like</Eyebrow><h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.2rem", fontWeight:300, color:T.charcoal, marginBottom:"2.5rem" }}>Related Products</h2></FadeUp>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.5rem", alignItems:"stretch" }}>
            {PRODUCTS.filter(x => x.slug !== slug).slice(0,4).map((rp, i) => (
              <FadeUp key={rp.slug} delay={i * 0.07}><ProductCard p={rp} /></FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: PRODUCTS.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
