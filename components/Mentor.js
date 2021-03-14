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
          <div className="mentor left">
            <div className="mentor-image">
              <Image src="/images/mentor titin.jpeg" width={300} height={400} />
            </div>
            <div className="name">
              <h4>Agustini Fajariyanti</h4>
              <h5>Cebbhing Pamekasan</h5>
            </div>
          </div>
          <div className="mentor center">
            <div className="mentor-image">
              <Image src="/images/mentor razni.jpeg" width={300} height={400} />
            </div>
            <div className="name">
              <h4>Razni Yukti Andiyani</h4>
              <h5>UI/UX Designer</h5>
            </div>
          </div>
          <div className="mentor right">
            <div className="mentor-image">
              <Image
                className="mentor-image"
                src="/images/mentor rifqi.jpeg"
                width={300}
                height={400}
              />
            </div>
            <div className="name">
              <h4>Mohammad Rifqi</h4>
              <h5>CEO Straight Away</h5>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mentor {
            position: relative;
            // flex: 1 1 30rem;
            margin: 0 auto;
          }
          .left,
          .right {
            margin-top: 9.5rem;
          }
          .name {
            position: absolute;
            left: 30px;
            bottom: 20px;
          }
          h4 {
            font-size: 2.4rem;
            font-weight: 800;
          }
          h5 {
            font-size: 1.8rem;
            font-weight: 400;
          }
          h4,
          h5 {
            color: #333;
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
            max-width: 1440px;
            padding: 0 12.2rem 8rem;
            margin: 0 auto;
          }
          .mentor-wrapper {
            display: flex;
            // justify-content: space-evenly;
            align-items: flex-start;
            flex-wrap: wrap;
          }
          @media only screen and (max-width: 600px) {
            .left,
            .right {
              margin-top: 0;
            }
            section {
              max-width: 600px;
              padding: 0 2rem 4rem;
              background-image: url("/images/mentor background-mobile.png");
              background-position: inherit;
              background-size: contain;
              // height: 1200px;
            }
            .mentor-image {
              max-width: 200px;
            }
            .center {
              margin-top: 2rem;
              margin-bottom: 2rem;
            }
            h4 {
              font-size: 1.6rem;
            }
            h5 {
              font-size: 1.4rem;
            }
            .name {
              left: 20px;
              bottom: 20px;
            }
          }
        `}
      </style>
    </section>
  );
}
