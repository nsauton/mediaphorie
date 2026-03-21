import { useState } from "react";
import { useRouter } from "next/router";
import { T } from "../lib/tokens";

export default function ReleaseCard({ p }) {
  const router = useRouter();
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => router.push("/shop/" + p.slug)}
      style={{ background:"rgba(255,255,255,0.04)", border:`1px solid ${hov ? "rgba(184,151,90,0.35)" : "rgba(255,255,255,0.07)"}`, borderRadius:3, overflow:"hidden", cursor:"pointer", transform: hov ? "translateY(-5px)" : "none", transition:"transform 0.3s, border-color 0.3s, background 0.3s", backgroundColor: hov ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)", display:"flex", flexDirection:"column", width:"100%", height:"100%" }}>
      <div style={{ aspectRatio:"1", background:p.grad, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"4.5rem", color:"rgba(255,255,255,0.06)", position:"relative" }}>
        ♫
        <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"1.2rem", background:"linear-gradient(to top, rgba(20,16,12,0.7), transparent)" }}>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem", fontWeight:300, fontStyle:"italic", color:"rgba(255,255,255,0.9)", lineHeight:1.3 }}>{p.title}</h3>
        </div>
      </div>
      <div style={{ padding:"1.1rem 1.3rem 1.4rem" }}>
        <p style={{ fontSize:"0.75rem", color:T.light, marginBottom:"0.6rem" }}>{p.artist}</p>
        <div style={{ display:"flex", gap:"0.4rem", flexWrap:"wrap" }}>
          {p.formats.map(f => <span key={f} style={{ fontSize:"0.62rem", letterSpacing:"0.1em", textTransform:"uppercase", color:T.gold, border:`1px solid rgba(184,151,90,0.3)`, padding:"0.2rem 0.55rem", borderRadius:2 }}>{f}</span>)}
        </div>
      </div>
    </div>
  );
}
