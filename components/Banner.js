import Link from "next/link";

export default function Banner() {
  return (
    <section id="donasi">
      <h3>Ingin mendukung program kami?</h3>
      <div className="button-wrapper">
        <Link href="/donasi">
          <a className="btn donasi">Donasi Sekarang</a>
        </Link>
        <a
          href="https://drive.google.com/file/d/1oUzzOQGi-hCbrnwSLR0snS2p1buqfyWv/view?usp=sharing"
          className="btn proposal"
          target="_blank"
        >
          <span className="material-icons">picture_as_pdf</span>Proposal Acara
        </a>
      </div>
      <style jsx>{`
        h3 {
          font-size: 6.4rem;
          color: white;
          font-family: "Baloo 2", sans-serif;
          line-height: 1;
          flex: 1 1 30rem;
        }

        .button-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1 1 30rem;
        }
        .proposal span {
          margin-right: 1rem;
        }
        .proposal,
        .donasi {
          width: 282px;
          margin-left: auto;
          text-align: center;
        }
        .proposal {
          font-size: 2rem;
          color: white;
          margin-right: 15px;
        }
        .donasi {
          background: white;
          border: 4px solid black;
          font-size: 2rem;
          font-weight: 800;
          color: black;
          border-radius: 5px;
          padding: 1rem 2rem;
          margin-bottom: 2rem;
        }
        section {
          background-image: url("/images/background banner.png");
          background-repeat: no-repeat;
          background-position: right;
          max-width: 1440px;
          padding: 0 12.2rem;
          margin: 0 auto;
          background-color: #0190de;
          border: 4px solid black;
          min-height: 280px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }
        @media only screen and (max-width: 600px) {
          section {
            padding: 0 2rem;
            flex-direction: column;
            justify-content: center;
            background-image: none;
          }
          h3 {
            font-size: 4rem;
            text-align: center;
            flex: 0;
          }
          .button-wrapper {
            margin-top: 2rem;
            flex: 0;
          }
          .donasi {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
