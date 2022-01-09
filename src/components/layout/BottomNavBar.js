import { Link } from "react-router-dom";
import "./BottomNavBar.css";

function BottomNavBar(props) {
  return (
    <footer>
      <ul>
        <Link to="/">
          <img src={require("./home.png")} alt="home" />
          <div>Home</div>
        </Link>
        <Link to="/">
          <img src={props.home} alt="learn" />
          <div>Learn</div>
        </Link>
        <Link to="/">
          <img src={props.home} alt="calendar" />
          <div>Calendar</div>
        </Link>
        <Link to="/">
          <img src={props.home} alt="social" />
          <div>Social</div>
        </Link>
        <Link to="/">
          <img src={props.home} alt="profile" />
          <div>Profile</div>
        </Link>
      </ul>
    </footer>
  );
}

export default BottomNavBar;
