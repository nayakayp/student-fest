import utilStyles from "../styles/utils.module.css";
import { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  });
  return (
    <section id="faq">
      <h3 className={utilStyles.headingLg}>Daftar</h3>
      <h2 className={utilStyles.headingXl}>Pertanyaan Umum</h2>
      <div className={`line ${utilStyles.line}`}></div>

      <div className="faq">
        <button className="accordion">Section 1</button>
        <div className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <button className="accordion">Section 2</button>
        <div className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <button className="accordion">Section 3</button>
        <div className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <style jsx>{`
        h3,
        h2 {
          color: #333;
        }
        .faq {
          max-width: 800px;
          margin: 0 auto;
        }
        .line {
          background: #333;
        }
        .accordion,
        .panel {
          margin-bottom: 1rem;
        }
        .accordion {
          border-radius: 5px;
          background-color: white;
          color: #444;
          cursor: pointer;
          padding: 18px;
          width: 100%;
          border: 1px solid #333;
          text-align: left;
          outline: none;
          font-size: 1.8rem;
          transition: 0.4s;
        }

        .active,
        .accordion:hover {
          background-color: white;
        }

        .panel {
          border-radius: 5px;
          padding: 2rem;
          font-size: 1.6rem;
          background-color: white;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.2s ease-out;
        }
        @media only screen and (max-width: 600px) {
          section {
            padding: 0 2rem;
          }
        }
      `}</style>
    </section>
  );
}
