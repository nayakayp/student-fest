import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    const close = document.querySelector(".close");
    const hamburger = document.querySelector(".hamburger");
    const links = document.querySelector(".links");
    const nav = document.querySelector("nav");
    // const profil = document.querySelector("#profil");
    // const offset = profil.offsetTop;
    const offset = 375;

    if (window.location.pathname !== "/") {
      console.log(window.location.pathname);
      nav.style.backgroundColor = "#f2bc00";
    }

    hamburger.addEventListener("click", () => {
      links.style.display = "";
    });
    close.addEventListener("click", () => {
      links.style.display = "none";
    });
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= offset) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });
  });

  return (
    <nav>
      <Link href="/">
        <a>
          <Image
            src="/images/logo.png"
            height={65}
            width={100}
            alt="Student Festival"
          />
        </a>
      </Link>
      <div className="menu">
        <Link href="/#daftar">
          <a className="btn">Daftar</a>
        </Link>
        <span className="material-icons hamburger">menu</span>
        <div className="links" style={{ display: "none" }}>
          <span className="material-icons close">close</span>
          <ul>
            <li style={{ display: "none" }}>
              <Link href="/artikel">
                <a>Artikel</a>
              </Link>
            </li>
            <li>
              <Link href="#daftar">
                <a>Form Daftar </a>
              </Link>
            </li>
            <li>
              <Link href="/#faq">
                <a>F.A.Q </a>
              </Link>
            </li>
            <li>
              <Link href="/donasi">
                <a>Donasi</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .sticky {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 200;
          background: #f2bc00;
        }
        .close {
          font-size: 5rem;
          cursor: pointer;
          color: white;
          float: right;
        }
        .links {
          padding: 2rem;
          background: #0190de;
          min-height: 100vh;
          z-index: 100;
          position: fixed;
          top: 0;
          right: 0;
          width: 30vw;
        }
        .links ul {
          margin-top: 5rem;
        }
        .links li {
          margin-bottom: 1rem;
        }
        .links a {
          font-family: "Baloo 2", sans-serif;
          font-weight: 800;
          font-size: 3.6rem;
        }
        .btn {
          color: white;
          background: #42a644;
          padding: 1rem 2rem;
          border-radius: 5px;
          font-weight: 800;
        }
        .hamburger {
          color: white;
          font-size: 5rem;
          cursor: pointer;
          margin-left: 3rem;
        }
        nav {
          min-height: 10vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 12.2rem;
        }
        .menu {
          display: flex;
          align-items: center;
        }
        li {
          margin-left: 3rem;
        }
        a {
          color: white;
          font-size: 1.8rem;
          text-transform: uppercase;
        }
        @media only screen and (max-width: 600px) {
          nav {
            padding: 2rem;
          }
          .links {
            width: 75vw;
          }
        }
      `}</style>
    </nav>
  );
}
