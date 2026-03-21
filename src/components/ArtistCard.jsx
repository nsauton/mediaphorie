import { useState } from "react";
import { useRouter } from "next/router";
import { T } from "../lib/tokens";

export default function ArtistCard({ a }) {
  const router = useRouter();
  const [hov, setHov] = useState(false);
  return (
    <div onClick={() => router.push("/artists/" + a.slug)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? T.ivory : T.white, padding:"2.8rem 2.5rem", cursor:"pointer", position:"relative", overflow:"hidden", transition:"background 0.3s", display:"flex", flexDirection:"column", width:"100%", height:"100%", boxSizing:"border-box" }}>
      <div style={{ position:"absolute", top:0, left:0, width:4, height:"100%", background:a.accent, opacity: hov ? 1 : 0, transition:"opacity 0.3s" }} />
      <div style={{ width:72, height:72, borderRadius:"50%", background:a.bg, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", color:"rgba(255,255,255,0.65)", marginBottom:"1.3rem", transform: hov ? "scale(1.08)" : "scale(1)", transition:"transform 0.3s" }}>{a.initials}</div>
      <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.45rem", fontWeight:400, color:T.charcoal, marginBottom:"0.2rem" }}>{a.name} {a.surname}</h3>
      <p style={{ fontSize:"0.74rem", color:T.light, letterSpacing:"0.08em", marginBottom:"0.9rem" }}>{a.role} · {a.country}</p>
      <p style={{ fontSize:"0.82rem", color:T.mid, lineHeight:1.75, marginBottom:"1rem" }}>{a.bio}</p>
      <p style={{ fontSize:"0.7rem", color:a.accent, letterSpacing:"0.1em", textTransform:"uppercase" }}>{a.albums.length} Album{a.albums.length !== 1 ? "s" : ""}</p>
      <span style={{ display:"inline-block", marginTop:"0.4rem", fontSize:"0.71rem", letterSpacing:"0.12em", textTransform:"uppercase", color:a.accent, opacity: hov ? 1 : 0, transform: hov ? "translateX(0)" : "translateX(-6px)", transition:"opacity 0.3s, transform 0.3s" }}>View Artist →</span>
    </div>
  );
}
