import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function Mentor() {
  return (
    <section>
      <h3 className={utilStyles.headingLg}>Kenalan Dengan</h3>
      <h2 className={utilStyles.headingXl}>Mentor Kamu</h2>
      <div className={`line ${utilStyles.line}`}></div>

      <div className="mentors">
        <div className="mentor-wrapper">
          <div className="mentor">
            <div className="mentor-image">
              <Image src="/images/mentor titin.jpeg" width={300} height={400} />
            </div>
            <h4>Panca Rahadi</h4>
            <h5>Broadcaster Karimata FM</h5>
          </div>
          <div className="mentor ">
            <div className="mentor-image">
              <Image src="/images/mentor razni.jpeg" width={300} height={400} />
            </div>
            <h4>Razni Yukti Andiyani</h4>
            <h5>UI/UX Designer</h5>
          </div>
          <div className="mentor">
            <div className="mentor-image">
              <Image
                className="mentor-image"
                src="/images/mentor rifqi.jpeg"
                width={300}
                height={400}
              />
            </div>
            <h4>Mas Rifqi</h4>
            <h5>Straight Away</h5>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mentor-image {
            border: 3px solid black;
            border-radius: 5px;
          }
          h3,
          h2 {
            color: white;
          }
          .line {
            background: white;
          }
          section {
            background-color: #f1bb00;
            background-image: url("/images/mentor background.png");
            bacground-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 915px;
            max-width: 1440px;
            padding: 0 12.2rem;
            margin: 0 auto;
          }
          .mentor-wrapper {
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
          }
        `}
      </style>
    </section>
  );
}
