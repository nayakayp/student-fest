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
              <p>info@studentfest.id</p>
            </li>
          </ul>
        </div>
        <div className="footer-group" style={{ display: "none" }}>
          <p className="title">Artikel Pilihan</p>
          <ul>
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
            </li>
            <li>
              <a href="#">
                Pemuda ini dapat mengalahkan 10 pemuda lainnya. Nomor 5 sungguh
                mencengangkan
              </a>
            </li>
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
                  src="http://cors-anywhere.herokuapp.com/https://instagram.fsub3-2.fna.fbcdn.net/v/t51.2885-15/e35/187812280_2810663649199108_2004352244517645588_n.jpg?tp=1&_nc_ht=instagram.fsub3-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=TT90oJvn4PUAX9GD0SI&edm=AP_V10EBAAAA&ccb=7-4&oh=e7669f72f2800fd259ceaa99eb53de37&oe=60B645E4&_nc_sid=4f375e"
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
                  src="https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c128.0.768.768a/s640x640/120198840_724174718305191_6739531145418595319_n.jpg?tp=1&_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=rihiCGfB_OAAX9NUDh-&edm=APU89FABAAAA&ccb=7-4&oh=09564e2ca38284ba5497792a693c17ff&oe=60B54EC8&_nc_sid=86f79a"
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
          flex-wrap: wrap;
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
