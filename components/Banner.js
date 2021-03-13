export default function Banner() {
  return (
    <section>
      <h3>Ingin mendukung program kami?</h3>
      <div className="button-wrapper">
        <a href="/donasi" className="btn donasi">
          Donasi Sekarang
        </a>
        <a href="/proposal" className="btn proposal" target="_blank">
          <span className="material-icons">picture_as_pdf</span>Proposal Acara
        </a>
      </div>
      <style jsx>{`
        h3 {
          font-size: 6.4rem;
          color: white;
          font-family: "Baloo 2", sans-serif;
          width: 50%;
          line-height: 1;
        }

        .button-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 50%;
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
      `}</style>
    </section>
  );
}
