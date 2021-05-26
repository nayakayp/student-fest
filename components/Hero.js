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
        <div className="hero-illustration">
          <Image src="/images/hero illustration.png" width={453} height={407} />
        </div>
      </div>
      <div className="sponsorship-wrapper">
        <h3>Official Partnership</h3>
        <div className="sponsorship-list">
          <Image
            src="/images/sponsorship/In Association with.png"
            width={79}
            height={80}
          />
          <Image
            src="/images/sponsorship/LOGO PEMDA PAMEKASAN 1.png"
            width={79}
            height={80}
          />
          <Image src="/images/sponsorship/Sakecy.png" width={79} height={80} />
          <Image
            src="/images/sponsorship/Mask Group.png"
            width={79}
            height={80}
          />
          <Image
            src="/images/sponsorship/Vector 9.png"
            width={79}
            height={80}
          />
          <Image
            src="/images/sponsorship/Straight Away.png"
            width={79}
            height={80}
          />
          <Image
            src="/images/sponsorship/KacongCebbhing.png"
            width={79}
            height={80}
          />
        </div>
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
        h3 {
          font-size: 2rem;
          color: #333;
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
          position: relative;
        }
        .hero-wrapper {
          padding: 0 12.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 90vh;
        }
        .sponsorship-wrapper {
          position: absolute;
          margin: 2rem 5rem;
          padding: 2rem;
          left: 0;
          right: 0;
          bottom: -100px;
          border-radius: 20px;
          text-align: center;
          background: #ffffff;
        }
        .sponsorship-list {
          margin-top: 3rem;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-wrapper: wrap;
        }
        img {
          width: 1px;
        }
        @media only screen and (max-width: 600px) {
          h1 {
            font-size: 9rem;
          }
          .sponsorship-wrapper {
            margin: 2rem 1rem;
            padding: 1rem;
          }
          .hero-wrapper {
            max-width: 600px;
            padding: 2rem;
          }
          .hero-illustration {
            display: none;
          }
          .btn {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}
