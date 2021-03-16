import Layout, { siteTitle } from "../components/layout";
import Nav from "../components/Nav";

export default function Artikel() {
  return (
    <Layout home>
      <Nav></Nav>
      <section>
        <h1>Coming Soon</h1>
        <style jsx>{`
          section {
            min-height: 90vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          h1 {
            font-family: "Baloo 2", sans-serif;
            font-size: 6.4rem;
            font-weight: 800;
          }
          nav {
            background: yellow;
          }
        `}</style>
      </section>
    </Layout>
  );
}
