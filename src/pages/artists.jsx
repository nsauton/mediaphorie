import { useRouter } from "next/router";
import { T } from "../lib/tokens";
import { ARTISTS } from "../lib/data";
import { FadeUp } from "../hooks/useFadeUp";
import Marquee from "../components/Marquee";
import ArtistCard from "../components/ArtistCard";

export default function ArtistsPage() {
  const router = useRouter();
  return (
    <div>
      <section style={{ paddingTop:"calc(68px + 5rem)", paddingBottom:"5rem", background:T.charcoal, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 80% 50%, rgba(184,151,90,0.1) 0%, transparent 60%)" }} />
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 3.5rem", position:"relative", zIndex:1 }}>
          <p style={{ fontSize:"0.72rem", color:T.light, marginBottom:"1.5rem" }}>
            <button onClick={() => router.push("/")} style={{ background:"none", border:"none", color:T.light, cursor:"pointer", fontSize:"inherit" }}>Home</button>
            <span style={{ opacity:0.4, margin:"0 0.4rem" }}>›</span>Artists
          </p>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(3rem,6vw,6rem)", fontWeight:300, color:T.ivory, lineHeight:1, marginBottom:"1rem" }}>
            The voices <em style={{ fontStyle:"italic", color:T.goldLight }}>behind</em><br />the music
          </h1>
          <p style={{ fontSize:"1rem", color:"rgba(248,245,240,0.5)", lineHeight:1.8, maxWidth:500 }}>Pianists, composers, and performers from across the globe, united by a passion for dance.</p>
        </div>
      </section>
      <Marquee items={ARTISTS.map(a => `${a.name} ${a.surname}`)} />
      <section style={{ padding:"5rem 3.5rem", background:T.ivory }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div className="card-grid" style={{ gridTemplateColumns:"repeat(3,1fr)", gap:"2px", background:T.creamDark, borderRadius:4, overflow:"hidden", border:`2px solid ${T.creamDark}` }}>
            {ARTISTS.map((a, i) => (
              <FadeUp key={a.slug} delay={i * 0.06}>
                <ArtistCard a={a} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
