import logo from "../img/seranatura-logo.jpg";

function Footer() {
  return (
    <div>
      <div className="footer">
        <Logo />
        <FooterHead title="Corparate">
          <FooterLink href="#aboutus">About Us</FooterLink>
          <FooterLink href="#vision">Vision and Mission</FooterLink>
          <FooterLink href="#goals">Our Goals</FooterLink>
          <FooterLink href="#policies">Our Policies</FooterLink>
        </FooterHead>
        <FooterHead title="EXPERTISE">
          <FooterLink href="#plant">PLANT</FooterLink>
          <FooterLink href="#process">PROCESS</FooterLink>
          <FooterLink href="#project">PROJECT</FooterLink>
        </FooterHead>
        <FooterHead title="INNOVATION">
          <FooterLink href="#arge">AR-GE</FooterLink>
          <FooterLink href="#partners">OUR PARTNERS</FooterLink>
        </FooterHead>
      </div>
    </div>
  );
}

function Logo(href) {
  const year = new Date().getFullYear();

  return (
    <div className="footer-logo">
      <img className="footer-img" src={logo} href={href} alt="logo" />
      <p className="copyright">
        Copyright &copy; <span className="year">{year}</span> by Seranatura Inc.
        All rights reserved.
      </p>
    </div>
  );
}

function FooterHead({ children, title }) {
  return (
    <a className="footer-head">
      {title} <div className="footer-column">{children}</div>
    </a>
  );
}

function FooterLink({ children, href }) {
  return (
    <a className="footer-link" href={href}>
      {children}
    </a>
  );
}

export default Footer;
