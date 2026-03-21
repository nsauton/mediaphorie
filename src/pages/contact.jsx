import { useState } from "react";
import { T } from "../lib/tokens";
import { FadeUp } from "../hooks/useFadeUp";
import Marquee from "../components/Marquee";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section style={{ paddingTop:"calc(68px + 5rem)", paddingBottom:"5rem", background:T.charcoal, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 30% 60%, rgba(184,151,90,0.1) 0%, transparent 65%)" }} />
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 3.5rem", position:"relative", zIndex:1 }}>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(3rem,6vw,6rem)", fontWeight:300, color:T.ivory, lineHeight:1, marginBottom:"1rem" }}>Get in <em style={{ fontStyle:"italic", color:T.goldLight }}>touch</em></h1>
          <p style={{ fontSize:"0.95rem", color:"rgba(248,245,240,0.5)", lineHeight:1.8, maxWidth:480 }}>We'd love to hear from you — questions about products, collaborations, or simply sharing how our music has enriched your studio.</p>
        </div>
      </section>
      <Marquee items={["Order Enquiries","Artist Collaborations","Press","Sheet Music Licensing","International Distribution","Newsletter"]} />
      <section style={{ padding:"6rem 3.5rem", background:T.ivory }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:"6rem", alignItems:"start" }}>
          <FadeUp>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:300, color:T.charcoal, marginBottom:"0.4rem" }}>Send us a message</h2>
            <p style={{ fontSize:"0.85rem", color:T.light, marginBottom:"2.2rem" }}>We aim to respond within 2 business days.</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"1rem" }}>
              {["First Name","Last Name"].map(ph => <input key={ph} placeholder={ph} style={{ fontFamily:"'Jost',sans-serif", fontSize:"0.88rem", fontWeight:300, color:T.charcoal, background:T.white, border:`1px solid ${T.creamDark}`, borderRadius:2, padding:"0.8rem 1rem", outline:"none", width:"100%" }} />)}
            </div>
            <input placeholder="Email Address" style={{ fontFamily:"'Jost',sans-serif", fontSize:"0.88rem", fontWeight:300, color:T.charcoal, background:T.white, border:`1px solid ${T.creamDark}`, borderRadius:2, padding:"0.8rem 1rem", outline:"none", width:"100%", marginBottom:"1rem", display:"block" }} />
            <select style={{ fontFamily:"'Jost',sans-serif", fontSize:"0.88rem", fontWeight:300, color:T.charcoal, background:T.white, border:`1px solid ${T.creamDark}`, borderRadius:2, padding:"0.8rem 1rem", outline:"none", width:"100%", marginBottom:"1rem", display:"block", appearance:"none" }}>
              <option>Select a subject…</option>
              <option>Order enquiry</option>
              <option>Product question</option>
              <option>Artist collaboration</option>
              <option>Press or media</option>
              <option>Sheet music licensing</option>
            </select>
            <textarea placeholder="Tell us how we can help…" rows={5} style={{ fontFamily:"'Jost',sans-serif", fontSize:"0.88rem", fontWeight:300, color:T.charcoal, background:T.white, border:`1px solid ${T.creamDark}`, borderRadius:2, padding:"0.8rem 1rem", outline:"none", width:"100%", resize:"vertical", lineHeight:1.6, display:"block", marginBottom:"1rem" }} />
            <button onClick={() => { setSent(true); setTimeout(() => setSent(false), 4000); }} style={{ width:"100%", background: sent ? "#3a7050" : T.gold, color:T.white, padding:"0.9rem 2rem", fontSize:"0.76rem", letterSpacing:"0.1em", textTransform:"uppercase", border:"none", borderRadius:2, cursor:"pointer", fontFamily:"'Jost',sans-serif", transition:"background 0.3s" }}>
              {sent ? "✓ Message Sent!" : "Send Message"}
            </button>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ background:T.charcoal, borderRadius:4, padding:"2.5rem", marginBottom:"1.2rem" }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", color:T.ivory, marginBottom:"1.5rem" }}>Contact Information</h3>
              {[["🌐","Website","mediaphorie.com"],["🛒","Euro Store","phorie.com"],["🇯🇵","Japan Store","mediaphoriejapon.com"],["🌍","Languages","English · Français · 日本語"]].map(([icon, label, val]) => (
                <div key={label} style={{ display:"flex", gap:"0.8rem", marginBottom:"1.1rem" }}>
                  <div>
                    <p style={{ fontSize:"0.62rem", letterSpacing:"0.14em", textTransform:"uppercase", color:T.gold, marginBottom:"0.15rem" }}>{label}</p>
                    <p style={{ fontSize:"0.85rem", color:T.light }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background:T.cream, borderRadius:4, padding:"2rem 2.5rem" }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", color:T.charcoal, marginBottom:"1rem" }}>Follow Mediaphorie</h3>
              {[["𝕏","@music4ballet on X / Twitter"],["✎","Mediaphorie Blog"],["f","Mediaphorie on Facebook"]].map(([icon, label]) => (
                <div key={label} style={{ display:"flex", alignItems:"center", gap:"0.8rem", padding:"0.5rem", marginBottom:"0.4rem", borderRadius:2, cursor:"pointer", transition:"background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = T.white}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <div style={{ width:32, height:32, borderRadius:"50%", background:T.white, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.8rem", flexShrink:0 }}>{icon}</div>
                  <span style={{ fontSize:"0.85rem", color:T.mid }}>{label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
