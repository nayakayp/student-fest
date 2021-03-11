import Image from "next/image";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="hero">
      <Nav />
      <div className="hero-wrapper">
        <div>
          <h1>Student Festival</h1>
          <a href="#profil" className="btn">
            Kenalan Yuk
            <span className="material-icons">arrow_downward</span>
          </a>
        </div>
        <Image src="/images/hero illustration.png" width={519} height={592} />
      </div>
      <style jsx>{`
        h1 {
          font-size: 13.8rem;
          line-height: 0.75;
          color: white;
          font-family: "Baloo 2", sans-serif;
          -webkit-text-stroke: 4px black;
          margin-bottom: 4rem;
        }
        .btn {
          background: none;
          border: 3px solid #000;
          padding: 1.5rem 2rem;
          border-radius: 5px;
          color: black;
          font-weight: 800;
          font-size: 2rem;
          background: white;
          text-transform: uppercase;
        }
        .hero {
          max-width: 1440px;
          background-color: #f2bc00;
          background-image: url("/images/hero background.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          margin: 0 auto;
        }
        .hero-wrapper {
          padding: 0 12.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 90vh;
        }
      `}</style>
    </section>
  );
}
