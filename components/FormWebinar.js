import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function Form() {
  const daftarAcara = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxVXdTKvri1bC51VDl9gm9kXNr-ywecDa0SUM__ks9UqjfXvplOfReqIYvsasbEWVAQEA/exec";
    const form = new FormData();
    const inputs = e.target.children[1].children;
    const successMsg = document.querySelector(".success");
    const failedMsg = document.querySelector(".failed");
    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.textContent = "Mengirimkan Formulir...";

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value !== undefined && inputs[i].value !== "") {
        form.append(inputs[i].name, inputs[i].value);
      }
      if (i == 3) {
        inputs[3].children[0].firstElementChild.checked == true
          ? form.append("kelamin", "Laki-laki")
          : form.append("kelamin", "Perempuan");
      }
    }
    fetch(scriptURL, { method: "POST", body: form })
      .then((response) => {
        console.log("Success!", response);
        successMsg.style.display = "block";
        failedMsg.style.display = "none";
        document.querySelector("form").reset();
        submitBtn.textContent = "Submit Formulir";
      })
      .catch((error) => {
        console.error("Error!", error.message);
        failedMsg.style.display = "block";
        successMsg.style.display = "none";
      });
  };
  return (
    <section id="daftar">
      <h3 className={utilStyles.headingLg}>Ikuti Acara Ini</h3>
      <h2 className={utilStyles.headingXl}>Daftarkan Dirimu</h2>
      <div className={`line ${utilStyles.line}`}></div>
      <p
        className="btn failed"
        style={{ display: "none", "text-align": "center", "font-size": "24px" }}
      >
        <strong>Maaf!</strong> sayangnya pendaftaran sudah ditutup karena
        peserta sudah melebihi batas. <br></br> Bagi kamu yang belum dapat
        kesempatan, bisa pantengin Instagram kami{" "}
        <a
          href="https://instagram.com/studentfestid"
          target="_blank"
          style={{ color: "white" }}
        >
          @studentfestid
        </a>{" "}
        dan nantikan Student Fest next batch!
      </p>
      <div className="form-wrapper">
        <form name="submit-to-google-sheet" onSubmit={daftarAcara}>
          <div className="label-wrapper">
            <p className="inputLabel">Nama Lengkap</p>
            <p className="inputLabel">Instansi/Sekolah</p>
            <p className="inputLabel">Usia</p>
            <p className="inputLabel">Jenis Kelamin</p>
            <p className="inputLabel">Whatsapp</p>
            <p className="inputLabel">Instagram (opsional)</p>
          </div>
          <div className="input-wrapper">
            <input
              autoComplete="off"
              id="nama"
              name="nama"
              type="text"
              required
            />
            <input
              autoComplete="off"
              id="asal"
              type="text"
              name="asal"
              required
            />
            <input
              autoComplete="off"
              id="usia"
              type="number"
              name="usia"
              required
            />
            <div className="radio-wrapper">
              <label htmlFor="laki">
                <input
                  type="radio"
                  name="kelamin"
                  id="laki"
                  value="laki"
                  required
                />
                Laki-laki
              </label>
              <label htmlFor="perempuan">
                <input
                  type="radio"
                  name="kelamin"
                  id="perempuan"
                  value="perempuan"
                />
                Perempuan
              </label>
            </div>
            <input
              autoComplete="off"
              type="tel"
              name="whatsapp"
              id="whatsapp"
              required
            />
            <input
              autoComplete="off"
              type="text"
              name="instagram"
              id="instagram"
              required
            />
            <div className="form-group">
              <input type="checkbox" name="agree" id="agree" required />
              <label htmlFor="agree">
                Saya menyetujui untuk mengikuti acara ini dengan
                sungguh-sungguh.
              </label>
            </div>
            <button type="submit">Submit Formulir</button>
            <div className="message">
              <p className="btn success" style={{ display: "none" }}>
                <strong>Selamat!</strong> pendaftaranmu telah kami terima. Kami
                akan segera menghubungimu. Terima kasih sudah mendaftar Webinar
                Microblog!
              </p>
              <p className="btn failed" style={{ display: "none" }}>
                <strong>Maaf!</strong> pendaftaranmu gagal. Coba lagi setelah
                memuat ulang halaman ini
              </p>
            </div>
          </div>
        </form>
        <div className="timeline">
          <Image src="/images/webinar-1.jpeg" width={1080} height={1080} />
        </div>
      </div>
      <style jsx>
        {`
          p.btn {
            margin: 1rem auto;
            font-size: 1.6rem;
            padding: 1rem 2rem;
            border-radius: 5px;
          }
          .btn.success {
            border: 2px solid #198754;
            color: #198754;
            background: #68e1a9;
          }
          .btn.failed {
            border: 2px solid #dc3545;
            color: #dc3545;
            background: #e48891;
          }
          h3,
          h2 {
            color: #333;
          }
          .line {
            background: #333;
          }
          section {
            max-width: 1440px;
            padding: 0 12.2rem 8rem;
            margin: 0 auto;
          }
          .form-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
          }
          form {
            display: flex;
            justify-content: space-around;
            flex: 1 1 40rem;
          }
          .inputLabel {
            font-size: 2.4rem;
            padding-bottom: 4.2rem;
            color: #333;
            font-weight: 400;
          }
          button[type="submit"] {
            border-radius: 5px;
            padding: 1.5rem 2rem;
            color: white;
            background: #f1bb00;
            font-size: 2rem;
            border: 1px solid #333;
            cursor: pointer;
          }
          .input-wrapper {
            display: flex;
            flex-direction: column;
            width: 431px;
          }
          .input-wrapper input,
          select,
          textarea {
            background: white;
            border-radius: 5px;
            padding: 1.5rem 2rem;
            border: 1px solid #333;
            margin-bottom: 2rem;
            font-weight: 700;
            font-family: "Arimo", sans-serif;
          }
          .radio-wrapper {
            padding: 1rem 0 2rem;
          }
          .radio-wrapper label {
            font-size: 2.4rem;
            margin-right: 2rem;
          }
          .radio-wrapper input {
            background: red;
            margin-right: 1rem;
          }
          .timeline {
            display: flex;
            flex-direction: column;
            flex: 1 1 20rem;
            margin-left: 12rem;
          }
          .timeline button {
            padding: 1.5rem 2rem;
            border-radius: 5px;
            border: 2px solid #333;
            font-size: 1.8rem;
            font-weight: 800;
            color: white;
            margin-bottom: 1rem;
          }
          .timeline .pendaftaran {
            background: #42a644;
          }
          .timeline .pembekalan {
            background: #5456a9;
          }
          .timeline .acara {
            background: #0190de;
          }
          .form-group {
            display: flex;
            font-size: 1.6rem;
            font-weight: 500;
            margin-bottom: 2rem;
            line-height: 1.2;
          }
          .form-group input {
            margin-right: 1rem;
          }
          @media only screen and (max-width: 600px) {
            section {
              padding: 2rem;
            }
            .inputLabel {
              font-size: 1.6rem;
              padding-top: 0.7rem;
            }
            .input-wrapper {
              width: 100%;
            }
            .timeline {
              margin-top: 4rem;
              margin-left: 0;
            }
            .timeline button {
              font-size: 1.4rem;
            }
            .radio-wrapper label {
              font-size: 1.6rem;
            }
          }
        `}
      </style>
    </section>
  );
}
