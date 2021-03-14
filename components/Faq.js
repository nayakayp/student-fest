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
        console.log(panel);
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.padding = "0 2rem";
        } else {
          panel.style.maxHeight = panel.scrollHeight + 20 + "px";
          panel.style.padding = "1rem 2rem";
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
        <button className="accordion">
          Siapa yang mengadakan Student Fest?
        </button>
        <div className="panel">
          <p>
            Jadi kegiatan ini kolaborasi beberapa teman pelajar dari SMP-SMA di
            Pamekasan yang berinisiatif buat meningkatkan skill sesama pelajar.
            Maka dari itu agendanya dinamakan Student Fest
          </p>
        </div>

        <button className="accordion">Siapa saja peserta Student Fest?</button>
        <div className="panel">
          <p>
            Student Fest terbuka unutk pelajar SMP-SMA sederajat yang ada di
            Pamekasan
          </p>
        </div>

        <button className="accordion">
          Apakah acaranya diadakan online/offline?
        </button>
        <div className="panel">
          <p>
            Acaranya kami adakan offline dengan tetap memperhatikan protokol
            kesehatan untuk mencegah Covid-19
          </p>
        </div>

        <button className="accordion">
          Apa saja materi yang diberikan pada saat acara? Apakah beda dengan
          Student Fest Batch #1?
        </button>
        <div className="panel">
          <p>
            Yups, berbeda dong. Yang sekarang lebih intens dan berkelanjutan
            gitu. Untuk materi batch sebelumnya ada public speaking,
            entrepreneur, dan cognitive flexibility. Nah kalau yang sekarang
            kita sesuaikan lagi dengan kebutuhan pelajar. Jadi nanti ada materi
            public speaking, design power point, dan entrepreneur.
          </p>
        </div>

        <button className="accordion">
          Fasilitas apa saja yang akan didapatkan dengan mengikuti Student Fest
          Batch #2 ini?
        </button>
        <div className="panel">
          <p>
            Banyak banget! Kamu bakal belajar materi bersama mentor yang sudah
            berpengalaman di bidangnya. Jadi bukan seperti seminar pada umumny,
            tapi bakal didampingi + langsung praktek.
          </p>
        </div>

        <button className="accordion">
          Apakah Student Fest Batch #2 ini gratis?
        </button>
        <div className="panel">
          <p>
            Gratis dong! Jadi eman banget kalau kamu nggak ikutan. Segera daftar
            ya dengan mengisi formulir pendaftaran yang ada di website ini
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
          padding: 0 2rem;
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
