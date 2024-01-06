import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import whatsapp from "../img/whatsApp.png";

function Contact() {
  return (
    <div className="cta" id="contact">
      <p>Bizimle iletişime Geçmek için</p>
      <Link to="/whatsapp">
        <img className="cta-img" src={whatsapp} alt="whatsapp" />
      </Link>
    </div>
  );
}
export default Contact;
