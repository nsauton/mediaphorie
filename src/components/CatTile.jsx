import { useState } from "react";
import { FadeUp } from "../hooks/useFadeUp";
import { T } from "../lib/tokens";

export default function CatTile({ name, desc, img, onClick, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ background: hov ? T.white : T.ivory, padding:"2.8rem 2.5rem", cursor:"pointer", position:"relative", overflow:"hidden", transition:"background 0.3s", display:"flex", flexDirection:"column", width:"100%", height:"100%", boxSizing:"border-box" }}>
        <div style={{ position:"absolute", bottom:0, left:0, width:"100%", height:3, background:T.gold, transform: hov ? "scaleX(1)" : "scaleX(0)", transformOrigin:"left", transition:"transform 0.4s" }} />
        {img && <div style={{ margin:"-2.8rem -2.5rem 1.5rem", height:160, overflow:"hidden" }}><img src={img} alt={name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", filter: hov ? "brightness(1.05)" : "brightness(0.95)", transition:"filter 0.3s" }} /></div>}
        <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:400, color:T.charcoal, marginBottom:"0.45rem" }}>{name}</h3>
        <p style={{ fontSize:"0.82rem", color:T.light, lineHeight:1.75, flex:1 }}>{desc}</p>
        <span style={{ display:"inline-block", marginTop:"1.2rem", fontSize:"0.7rem", letterSpacing:"0.12em", textTransform:"uppercase", color:T.gold, opacity: hov ? 1 : 0, transform: hov ? "translateX(0)" : "translateX(-8px)", transition:"opacity 0.3s, transform 0.3s" }}>Browse →</span>
      </div>
    </FadeUp>
  );
}
