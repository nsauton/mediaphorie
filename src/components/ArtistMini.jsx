import { useState } from "react";
import { useRouter } from "next/router";
import { T } from "../lib/tokens";

export default function ArtistMini({ a }) {
  const router = useRouter();
  const [hov, setHov] = useState(false);
  return (
    <div onClick={() => router.push("/artists/" + a.slug)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ textAlign:"center", cursor:"pointer" }}>
      <div style={{ width:96, height:96, borderRadius:"50%", background:a.bg, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cormorant Garamond',serif", fontSize:"1.7rem", color:"rgba(255,255,255,0.6)", margin:"0 auto 1rem", transform: hov ? "scale(1.07)" : "scale(1)", transition:"transform 0.3s", boxShadow: hov ? "0 8px 30px rgba(42,37,32,0.2)" : "none", border:`3px solid ${T.cream}` }}>{a.initials}</div>
      <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.05rem", color:T.charcoal, marginBottom:"0.2rem" }}>{a.name} {a.surname}</p>
      <p style={{ fontSize:"0.72rem", color:T.light }}>{a.role}</p>
    </div>
  );
}
