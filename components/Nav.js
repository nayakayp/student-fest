import Image from "next/image";
import React, { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    const close = document.querySelector(".close");
    const hamburger = document.querySelector(".hamburger");
    const links = document.querySelector(".links");
    const nav = document.querySelector("nav");
    const profil = document.querySelector("#profil");
    const offset = profil.offsetTop;

    hamburger.addEventListener("click", () => {
      links.style.display = "";
    });
    close.addEventListener("click", () => {
      links.style.display = "none";
    });
    window.addEventListener("scroll", () => {
      console.log(offset, window.pageYOffset);
      if (window.pageYOffset >= offset) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });
  });

  return (
    <nav>
      <Image
        src="/images/logo.png"
        height={65}
        width={100}
        alt="Student Festival"
      />
      <div className="menu">
        <a href="#daftar" className="btn">
          Daftar
        </a>
        <span className="material-icons hamburger">menu</span>
        <div className="links" style={{ display: "none" }}>
          <span className="material-icons close">close</span>
          <ul>
            <li>
              <a href="#">Artikel</a>
            </li>
            <li>
              <a href="#daftar">Form Daftar </a>
            </li>
            <li>
              <a href="#faq">F.A.Q </a>
            </li>
            <li>
              <a href="#donasi">Donasi</a>
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
