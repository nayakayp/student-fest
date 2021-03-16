import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-group">
          <p className="title">Hubungi Kami</p>
          <ul>
            <li>
              <span className="material-icons">location_on</span>
              <p> Jl. Veteran No. 140 Kel.Barurambat Timur Pamekasan, Madura</p>
            </li>
            <li>
              <span className="material-icons">smartphone</span>
              <a
                href="https://api.whatsapp.com/send?phone=6281939383452"
                target="_blank"
              >
                {" "}
                0819 3938 3452 (Whatsapp)
              </a>
            </li>
            <li>
              <span className="material-icons">email</span>
              <p> studentfestival.id@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="footer-group">
          <p className="title">Artikel Pilihan</p>
          <ul>
            <li>
              <a href="#">-</a>
            </li>
            {/* <li>
              <a href="#">
                Pemuda ini dapat mengalahkan 10 pemuda lainnya. Nomor 5 sungguh
                mencengangkan
              </a>
            </li>
            <li>
              <a href="#">
                Pemuda ini dapat mengalahkan 10 pemuda lainnya. Nomor 5 sungguh
                mencengangkan
              </a>
            </li>
            <li>
              <a href="#">
                Pemuda ini dapat mengalahkan 10 pemuda lainnya. Nomor 5 sungguh
                mencengangkan
              </a>
            </li> */}
          </ul>
        </div>
        <div className="footer-group">
          <p className="title">Microblog</p>
          <div className="instagram-placeholder">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/p/CMUd9hSgPLl/"
              >
                <img
                  src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/158876554_134683885162103_8849231670892201208_n.jpg?tp=1&amp;_nc_ht=scontent-sin6-1.cdninstagram.com&amp;_nc_cat=111&amp;_nc_ohc=CoGRDwY-gYQAX9ItjdW&amp;oh=71e20d033edadee7d894c8cc894d403d&amp;oe=607457AD"
                  width="200"
                  height="200"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/p/CMSBAaFgLFq/"
              >
                <img
                  src="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/158916619_874637739785016_9121060854991628963_n.jpg?tp=1&amp;_nc_ht=scontent-sin6-1.cdninstagram.com&amp;_nc_cat=100&amp;_nc_ohc=sbs11_XweFkAX-EjJR2&amp;oh=eae6999362feecdeb7e6639d530c84c1&amp;oe=6076B2FD"
                  width="200"
                  height="200"
                />
              </a>
            </li>
          </div>
          <a href="https://instagram.com/studentfestid" target="_blank">
            @studentfestid
          </a>
        </div>
      </div>
      <div className="copyright">
        Copyright 2021 StudentFest | Allright Reserved
      </div>
      <style jsx>{`
        ul {
          font-size: 1.6rem;
          color: white;
          margin-top: 2rem;
        }
        li {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        footer {
          background: #333333;
          margin-top: 12rem;
        }
        .instagram-placeholder {
          margin-top: 2rem;
          display: flex;
        }
        .instagram-placeholder li {
          margin-right: 1rem;
        }
        .footer-wrapper {
          max-width: 1440px;
          padding: 6rem 0;
          margin: 0 12.2rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .footer-group a {
          color: white;
          font-size: 1.6rem;
        }
        .footer-group .title {
          color: white;
          font-weight: 800;
          font-size: 2.4rem;
          text-transform: uppercase;
        }
        .footer-group {
          flex: 1 1 35rem;
        }
        .material-icons {
          color: white;
          margin-left: 0;
          margin-right: 1rem;
        }
        .copyright {
          background: #6c6c6c;
          padding: 1rem 2rem;
          font-size: 1.6rem;
          color: white;
          text-align: center;
        }
        @media only screen and (max-width: 600px) {
          .footer-wrapper {
            margin: 0 2rem;
          }
          .footer-group {
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </footer>
  );
}
