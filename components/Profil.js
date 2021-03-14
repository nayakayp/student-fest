import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function Profil() {
  return (
    <section id="profil">
      <h3 className={utilStyles.headingLg}>Kenalan Dengan</h3>
      <h2 className={utilStyles.headingXl}>Student Festival</h2>
      <div className={`line ${utilStyles.line}`}></div>
      <div className="title-description">
        Event yang diselenggarakan untuk kamu, para pelajar SMP/SMA di Pamekasan
        yang ingin menumbuh kembangkan skill bersama mentor yang berpengalaman
        di bidangnya.
      </div>
      <div className="video-placeholder" style={{ display: "none" }}>
        <iframe
          src="https://www.youtube.com/embed/gSSZHUgrbe0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      </div>
      <div className="events">
        <div className="event-list">
          <Image src="/images/ppt.svg" width={40} height={39.96}></Image>
          <div className={`title ${utilStyles.textPurple}`}>
            Power Point Mastery
          </div>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            minus expedita tempora ex id molestias voluptates quisquam!
            Similique, dolorum magni.
          </p>
        </div>

        <div className="event-list">
          <Image
            src="/images/public speaking.svg"
            width={40}
            height={40.27}
          ></Image>
          <div className={`title ${utilStyles.textBlue}`}>Public Speaking</div>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            minus expedita tempora ex id molestias voluptates quisquam!
            Similique, dolorum magni.
          </p>
        </div>

        <div className="event-list">
          <Image
            src="/images/entrepreneurship.svg"
            width={40}
            height={36.57}
          ></Image>
          <div className={`title ${utilStyles.textGreen}`}>
            Entrepreneurship
          </div>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            minus expedita tempora ex id molestias voluptates quisquam!
            Similique, dolorum magni.
          </p>
        </div>
      </div>
      <style jsx>{`
        section {
          max-width: 1440px;
          padding: 0 12.2rem;
          margin: 0 auto;
        }
        h2,
        h3 {
          color: #333;
        }
        .line {
          background: #333;
        }
        p {
          font-size: 1.6rem;
          text-align: center;
        }
        .title {
          font-family: "Baloo 2", sans-serif;
          font-size: 2.4rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .title-description {
          font-size: 2rem;
          padding: 0 25rem;
          text-align: center;
          margin: -3rem auto 4rem;
        }
        .events {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          padding: 4rem 0 12rem;
        }
        .event-list {
          padding: 0 2rem;
          flex: 1 1 30rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .video-placeholder,
        iframe {
          width: 100%;
          height: 450px;
          margin: 0 auto;
        }
        @media only screen and (max-width: 600px) {
          section {
            max-width: 600px;
            padding: 2rem;
          }
          .hero-illustration {
            display: none;
          }
          .btn {
            font-size: 1.8rem;
          }
          .title-description {
            padding: 0;
          }
          .event-list {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
