import Image from "next/image";

export default function Nav() {
  return (
    <nav>
      <Image
        src="/images/logo.png"
        height={65}
        width={100}
        alt="Student Festival"
      />
      <div className="nav-wrapper">
        <ul>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Registrasi</a>
          </li>
          <li>
            <a href="#">Donasi</a>
          </li>
          <li>
            <a href="#">Artikel</a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        nav {
          min-height: 10vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 12.2rem;
        }
        ul {
          display: flex;
        }
        li {
          margin-left: 3rem;
        }
        a {
          color: white;
          font-size: 1.8rem;
          text-transform: uppercase;
        }
      `}</style>
    </nav>
  );
}
