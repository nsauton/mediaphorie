import { useState } from "react";
import { useRouter } from "next/router";
import { T } from "../lib/tokens";

export default function ProductCard({ p }) {
  const router = useRouter();
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={e => { setHov(true); e.currentTarget.style.transform="translateY(-5px)"; }} onMouseLeave={e => { setHov(false); e.currentTarget.style.transform="translateY(0)"; }}
      onClick={() => router.push("/shop/" + p.slug)}
      style={{ display:"flex", flexDirection:"column", background:T.white, borderRadius:3, overflow:"hidden", border:`1px solid ${T.creamDark}`, cursor:"pointer", boxShadow: hov ? "0 20px 50px rgba(42,37,32,0.12)" : "none", width:"100%", height:"100%" }}>
      <div style={{ aspectRatio:"1", background:p.grad, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"3.5rem", color:"rgba(255,255,255,0.1)", position:"relative" }}>
        ♫
        {p.isNew && <span style={{ position:"absolute", top:"0.7rem", left:"0.7rem", background:T.gold, color:T.white, fontSize:"0.62rem", letterSpacing:"0.12em", textTransform:"uppercase", padding:"0.2rem 0.55rem", borderRadius:2 }}>New</span>}
      </div>
      <div style={{ padding:"1.1rem 1.2rem 1.3rem", flex:1, display:"flex", flexDirection:"column" }}>
        <p style={{ fontSize:"0.66rem", letterSpacing:"0.12em", textTransform:"uppercase", color:T.gold, marginBottom:"0.35rem" }}>{p.type}</p>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.05rem", fontWeight:400, color:T.charcoal, lineHeight:1.35, flex:1, marginBottom:"0.25rem" }}>{p.title}</p>
        <p style={{ fontSize:"0.75rem", color:T.light }}>{p.artist}</p>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"0.9rem", paddingTop:"0.8rem", borderTop:`1px solid ${T.creamDark}` }}>
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.2rem", color:T.charcoal }}>€{p.price}</span>
          <button style={{ width:32, height:32, background:T.charcoal, color:T.ivory, border:"none", borderRadius:2, cursor:"pointer", fontSize:"1.1rem", display:"flex", alignItems:"center", justifyContent:"center" }}
            onMouseEnter={e => e.currentTarget.style.background = T.gold}
            onMouseLeave={e => e.currentTarget.style.background = T.charcoal}>+</button>
        </div>
      </div>
    </div>
  );
}
