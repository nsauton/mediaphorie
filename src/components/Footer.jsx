import { useRouter } from "next/router";
import { T } from "../lib/tokens";
import { ARTISTS } from "../lib/data";

export default function Footer() {
  const router = useRouter();

  return (
    <footer style={{ background:"#1c1814", padding:"4.5rem 3.5rem 2.5rem" }}>
      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:"3.5rem", paddingBottom:"2.5rem", borderBottom:"1px solid rgba(255,255,255,0.07)", marginBottom:"1.8rem" }}>
        <div>
          <button onClick={() => router.push("/")} style={{ background:"none", border:"none", cursor:"pointer", padding:0, display:"block", marginBottom:"0.7rem" }}>
            <img src="/images/logo.png" alt="Mediaphorie" style={{ height:68, width:"auto", display:"block" }} />
          </button>
          <p style={{ fontSize:"0.8rem", color:T.light, lineHeight:1.8, maxWidth:220 }}>Your online store for all your ballet music needs — CDs, MP3s, and piano scores.</p>
        </div>
        {[["Shop",["All Products","Ballet Class CDs","MP3 Downloads","Piano Scores","Children's Music","Classical Music"]],["Artists",["Ellina Akimova","Marina Surgan","Ayumi Hirusaki","Richard Davis","Bertrand Barena","Christopher Hobson","Tristan Lofficial","Elisabeth Maurin","F.E. de Mikhnevitch","All Artists →"]],["Info",["About Us","Contact"]]].map(([title, items]) => (
          <div key={title}>
            <p style={{ fontSize:"0.68rem", letterSpacing:"0.16em", textTransform:"uppercase", color:T.gold, marginBottom:"1rem" }}>{title}</p>
            <ul style={{ listStyle:"none" }}>
              {items.map(item => (
                <li key={item} style={{ marginBottom:"0.5rem" }}>
                  <button onClick={() => {
                    const shopMap = {"All Products":"all","Ballet Class CDs":"cd","MP3 Downloads":"mp3","Piano Scores":"score","Children's Music":"children","Classical Music":"classical"};
                    const artistMap = {"Ellina Akimova":"ellina-akimova","Marina Surgan":"marina-surgan","Ayumi Hirusaki":"ayumi-hirusaki","Richard Davis":"richard-davis","Bertrand Barena":"bertrand-barena","Christopher Hobson":"christopher-hobson","Tristan Lofficial":"tristan-lofficial","Elisabeth Maurin":"elisabeth-maurin","F.E. de Mikhnevitch":"fe-de-mikhnevitch"};
                    const pageMap = {"About Us":"about","Contact":"contact"};
                    if (shopMap[item]) { router.push("/shop?filter=" + shopMap[item]); }
                    else if (artistMap[item]) { router.push("/artists/" + artistMap[item]); }
                    else if (item === "All Artists →") { router.push("/artists"); }
                    else if (pageMap[item]) { router.push("/" + pageMap[item]); }
                    else { router.push("/shop"); }
                  }} style={{ fontSize:"0.8rem", color:T.light, background:"none", border:"none", cursor:"pointer", padding:0, textAlign:"left", transition:"color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = T.ivory}
                    onMouseLeave={e => e.target.style.color = T.light}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", fontSize:"0.72rem", color:"rgba(158,149,138,0.4)", flexWrap:"wrap", gap:"1rem" }}>
        <p>© Mediaphorie — Music for Ballet Class</p>
        <div style={{ display:"flex", gap:"0.6rem" }}>
          {["EN","FR","JP"].map(l => (
            <span key={l} style={{ fontSize:"0.7rem", color:T.light, padding:"0.2rem 0.6rem", border:"1px solid rgba(255,255,255,0.1)", borderRadius:2, cursor:"pointer" }}>{l}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
