import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { T } from "../lib/tokens";

export default function Nav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); setOpen(false); }, [router.pathname]);

  const links = [["shop","Shop"],["artists","Artists"],["about","About"],["contact","Contact"]];

  return (
    <>
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, height:68, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 3rem", background:"rgba(248,245,240,0.95)", backdropFilter:"blur(16px)", borderBottom:`1px solid rgba(184,151,90,0.15)`, boxShadow: scrolled ? "0 4px 40px rgba(42,37,32,0.08)" : "none", transition:"box-shadow 0.3s" }}>
        <Link href="/" style={{ background:"none", border:"none", cursor:"pointer", padding:0, display:"flex", alignItems:"center", textDecoration:"none" }}>
          <img src="/images/logo.png" alt="Mediaphorie" style={{ height:72, width:"auto", display:"block" }} />
        </Link>
        <div style={{ display:"flex", alignItems:"center", gap:"2.2rem" }} className="nav-desktop">
          {links.map(([k, l]) => (
            <button key={k} onClick={() => router.push(k === "home" ? "/" : "/" + k)} style={{ fontFamily:"'Jost',sans-serif", fontSize:"0.74rem", letterSpacing:"0.12em", textTransform:"uppercase", color: router.pathname === (k === "home" ? "/" : "/" + k) ? T.charcoal : T.mid, background:"none", border:"none", cursor:"pointer", transition:"color 0.2s", borderBottom: router.pathname === (k === "home" ? "/" : "/" + k) ? `1px solid ${T.gold}` : "1px solid transparent", paddingBottom:2 }}>
              {l}
            </button>
          ))}
          <Link href="/shop" style={{ background:T.charcoal, color:T.ivory, padding:"0.5rem 1.3rem", fontSize:"0.74rem", letterSpacing:"0.1em", textTransform:"uppercase", border:"none", borderRadius:2, cursor:"pointer", fontFamily:"'Jost',sans-serif", transition:"background 0.2s", textDecoration:"none", display:"inline-block" }}
            onMouseEnter={e => e.currentTarget.style.background = T.gold}
            onMouseLeave={e => e.currentTarget.style.background = T.charcoal}>
            Shop Now
          </Link>
        </div>
        <button onClick={() => setOpen(o => !o)} style={{ display:"none", flexDirection:"column", gap:5, background:"none", border:"none", cursor:"pointer", padding:4 }} className="nav-hamburger">
          <span style={{ display:"block", width:22, height:1.5, background:T.charcoal }} />
          <span style={{ display:"block", width:22, height:1.5, background:T.charcoal }} />
          <span style={{ display:"block", width:22, height:1.5, background:T.charcoal }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{ position:"fixed", inset:0, zIndex:199, background:T.ivory, padding:"5.5rem 2.5rem 3rem", display:"flex", flexDirection:"column", gap:"0.5rem" }}>
          {[["home","Home"],...links].map(([k, l]) => (
            <button key={k} onClick={() => { router.push(k === "home" ? "/" : "/" + k); setOpen(false); }} style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:300, color:T.charcoal, background:"none", border:"none", borderBottom:`1px solid ${T.cream}`, textAlign:"left", padding:"0.6rem 0", cursor:"pointer" }}>
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @media(max-width:768px){.nav-desktop{display:none!important}.nav-hamburger{display:flex!important}}
        .card-grid { display: grid; }
        .card-grid > div { display: flex; flex-direction: column; }
        .card-grid > div > * { display: flex; flex-direction: column; flex: 1 1 auto; min-height: 0; width: 100%; }
      `}</style>
    </>
  );
}
