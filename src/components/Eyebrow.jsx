import { T } from "../lib/tokens";

export default function Eyebrow({ children, light }) {
  return (
    <p style={{ fontSize:"0.71rem", letterSpacing:"0.2em", textTransform:"uppercase", color: light ? "rgba(255,255,255,0.6)" : T.gold, display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"0.8rem" }}>
      <span style={{ display:"inline-block", width:26, height:1, background: light ? "rgba(255,255,255,0.5)" : T.gold, flexShrink:0 }} />
      {children}
    </p>
  );
}
