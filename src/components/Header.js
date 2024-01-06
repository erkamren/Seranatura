import { useEffect } from "react";
import logo from "../img/seranatura-logo.jpg";

function Header() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 500
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <header className="header">
      <NavBar>
        <Nav title="UÇUCU YAĞLAR" href="/" />
        <Nav title="SABİT YAĞLAR" href="/product" />
        <Nav title="MASAJ&BAKIM YAĞLARI" href="/product" />
        <Logo />
        <Nav title="BEAUTY COLLECTİON" href="#" />
        <Nav title="AMBİANCE COLLECTİON" href="#" />
        <Nav title="HOME COLLECTİON" href="#" />
      </NavBar>
    </header>
  );
}
function NavBar({ children }) {
  return <nav className="nav-bar container">{children}</nav>;
}

function Logo(href) {
  return <img className="logo" src={logo} href={href} alt="logo" />;
}

function Nav({ children, title, href }) {
  return (
    <a className="nav" href={href}>
      {title} <div className="drop">{children}</div>
    </a>
  );
}

export default Header;
