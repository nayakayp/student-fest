import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function Mentor() {
  return (
    <section className="mentor">
      <h3 className={utilStyles.headingLg}>Kenalan Dengan</h3>
      <h2 className={utilStyles.headingXl}>Mentor Kamu</h2>
      <div className={`line ${utilStyles.line}`}></div>
      <style jsx>
        {`
          h3,
          h2 {
            color: white;
          }
          .line {
            background: white;
          }
          .mentor {
            background-color: #f1bb00;
            background-image: url("/images/mentor background.png");
            bacground-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 915px;
            margin: 0 auto;
          }
        `}
      </style>
    </section>
  );
}
