import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import plant from "../img/we.jpg";
import process from "../img/we.jpg";

function Triple() {
  return (
    <div className="triple">
      <div className="triple-box">
        <p className="triple-text">BLOG</p>
        <Link to="/blog">
          <img className="we" src={process} alt="we" />
        </Link>
      </div>
      <div className="triple-box">
        <p className="triple-text">AKEDEMİ</p>
        <Link to="/acedemy"></Link>
        <img className="we" src={plant} alt="we" />
      </div>
      <div className="triple-box">
        <p className="triple-text">KURUMSAL SATIŞ</p>
        <Link to="/sale">
          <img className="we" src={plant} alt="we" />
        </Link>
      </div>
      <div className="triple-box">
        <p className="triple-text">TAKİP EDİN</p>
        <Link to="/followus">
          <img className="we" src={plant} alt="we" />
        </Link>
      </div>
    </div>
  );
}
export default Triple;
