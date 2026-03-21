import { T } from "../lib/tokens";

export default function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ background:T.gold, padding:"0.85rem 0", overflow:"hidden" }}>
      <div style={{ display:"flex", gap:"3rem", animation:"marquee 28s linear infinite", whiteSpace:"nowrap", width:"max-content" }}>
        {doubled.map((t, i) => (
          <span key={i} style={{ fontSize:"0.7rem", letterSpacing:"0.18em", textTransform:"uppercase", color:T.white, flexShrink:0 }}>
            <span style={{ opacity:0.5, marginRight:"1rem" }}>✦</span>{t}
          </span>
        ))}
      </div>
    </div>
  );
}
