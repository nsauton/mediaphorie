import FontLink from "../components/FontLink";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: "'Jost',sans-serif", minHeight: "100vh" }}>
      <FontLink />
      <Nav />
      <main style={{ paddingTop: 0 }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
