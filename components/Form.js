import utilStyles from "../styles/utils.module.css";

export default function Form() {
  const daftarAcara = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwn6COyUj4ZU7_0yC0LXHDNAe-AlwZ_CCoew15q0Z0rveT5XdCZ2uYGX0QHcaHdKft6/exec";
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
      if (i == 4) {
        inputs[4].children[0].firstElementChild.checked == true
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

      <div className="form-wrapper">
        <form name="submit-to-google-sheet" onSubmit={daftarAcara}>
          <div className="label-wrapper">
            <p className="inputLabel">Nama Lengkap</p>
            <p className="inputLabel">Email</p>
            <p className="inputLabel">Asal Sekolah</p>
            <p className="inputLabel">Kelas</p>
            <p className="inputLabel">Jenis Kelamin</p>
            <p className="inputLabel">Whatsapp</p>
            <p className="inputLabel">Alasan Ikut SF</p>
            <p className="inputLabel">Ceritakan Tentang Dirimu</p>
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
              id="email"
              type="email"
              name="email"
              required
            />
            <input
              autoComplete="off"
              id="sekolah"
              type="text"
              name="sekolah"
              required
            />
            <select name="kelas" id="kelas" required>
              <optgroup label="SMP">
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </optgroup>
              <optgroup label="SMA">
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </optgroup>
            </select>
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
              name="alasan"
              id="alasan"
              required
            />
            <textarea
              autoComplete="off"
              id="tentang"
              type="text"
              name="tentang"
              rows="10"
              required
            />

            <div className="form-group">
              <input type="checkbox" name="agree" id="agree" required />
              <label htmlFor="agree">
                Saya merupakan siswa tingkat SMP/SMA di Pamekasan dan Saya
                menyetujui untuk mengikuti acara ini dengan sungguh-sungguh
              </label>
            </div>
            <button type="submit">Submit Formulir</button>
            <div className="message">
              <p className="btn success" style={{ display: "none" }}>
                <strong>Selamat!</strong> pendaftaranmu telah kami terima. Kami
                akan segera menghubungimu. Terima kasih sudah mendaftar di
                Student Fest #2!
              </p>
              <p className="btn failed" style={{ display: "none" }}>
                <strong>Maaf!</strong> pendaftaranmu gagal. Coba lagi setelah
                memuat ulang halaman ini
              </p>
            </div>
          </div>
        </form>

        <div className="timeline">
          <button className="pendaftaran">14 s/d 27 Maret – Pendaftaran</button>
          <button className="pembekalan">28 Maret – Pembekalan</button>
          <button className="acara">
            29 Maret s/d 25 April – Public Speaking <br />
            26 April s/d 23 Mei – PPT Mastery <br />
            24 Mei s/d 20 Juni – Entrepreneurship
          </button>
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
