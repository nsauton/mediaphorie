import { useRouter } from "next/router";
import { T } from "../lib/tokens";
import { PRODUCTS } from "../lib/data";
import { FadeUp } from "../hooks/useFadeUp";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  const router = useRouter();
  const filter = router.query.filter || "all";
  const setFilter = (f) => router.push(
    { pathname: '/shop', query: f === 'all' ? {} : { filter: f } },
    undefined,
    { shallow: true }
  );

  const filters = [["all","All Products"],["cd","CDs"],["mp3","MP3"],["score","Scores"],["children","Children's"],["classical","Classical"]];
  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => {
    if (filter === "cd") return p.type.includes("CD") && !p.type.includes("Children");
    if (filter === "mp3") return p.formats.includes("MP3");
    if (filter === "score") return p.type.includes("Score");
    if (filter === "children") return p.type.includes("Children");
    if (filter === "classical") return p.type.includes("Classical");
    return true;
  });
  return (
    <div>
      <section style={{ paddingTop:"calc(68px + 4rem)", paddingBottom:"4rem", background:T.charcoal, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 70% 40%, rgba(184,151,90,0.1) 0%, transparent 65%)" }} />
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 3.5rem", position:"relative", zIndex:1 }}>
          <p style={{ fontSize:"0.72rem", color:T.light, marginBottom:"1.5rem" }}>
            <button onClick={() => router.push("/")} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.4)", cursor:"pointer", fontSize:"inherit", fontFamily:"'Jost',sans-serif" }}>Home</button>
            <span style={{ opacity:0.3, margin:"0 0.4rem" }}>›</span><span style={{ color:"rgba(255,255,255,0.65)" }}>Shop</span>
          </p>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(3rem,6vw,5.5rem)", fontWeight:300, color:T.ivory, lineHeight:1.05, marginBottom:"1rem" }}>The <em style={{ fontStyle:"italic", color:T.goldLight }}>Collection</em></h1>
          <p style={{ fontSize:"0.95rem", color:"rgba(248,245,240,0.5)", maxWidth:480, lineHeight:1.8 }}>CDs, MP3 downloads, and piano scores from world-class ballet pianists and composers.</p>
        </div>
      </section>
      {/* Filter bar */}
      <div style={{ background:T.white, borderBottom:`1px solid ${T.creamDark}`, padding:"0 3.5rem", position:"sticky", top:68, zIndex:50 }}>
        <div style={{ display:"flex", gap:"0.4rem", overflowX:"auto", padding:"0.9rem 0", scrollbarWidth:"none" }}>
          {filters.map(([k, l]) => (
            <button key={k} onClick={() => setFilter(k)} style={{ fontFamily:"'Jost',sans-serif", fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color: filter===k ? T.ivory : T.mid, background: filter===k ? T.charcoal : "none", border:`1px solid ${filter===k ? T.charcoal : T.creamDark}`, padding:"0.45rem 1.1rem", borderRadius:2, cursor:"pointer", whiteSpace:"nowrap", transition:"all 0.2s" }}>{l}</button>
          ))}
        </div>
      </div>
      <section style={{ padding:"4rem 3.5rem 6rem", background:T.ivory }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div className="card-grid" style={{ gridTemplateColumns:"repeat(4,1fr)", gap:"1.5rem" }}>
            {filtered.map((p, i) => (
              <FadeUp key={p.slug} delay={i * 0.05}>
                <ProductCard p={p} />
              </FadeUp>
            ))}
          </div>
          {filtered.length === 0 && <p style={{ textAlign:"center", color:T.light, padding:"3rem", fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem" }}>No products in this category yet.</p>}
        </div>
      </section>
    </div>
  );
}
