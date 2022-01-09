import classes from "./Welcome.module.css";

import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className={classes.container}>
      <div className={classes.welcomeTitle}>Welcome</div>
      <div className={classes.welcomeText}>
        Let’s begin answering a few questions to customize your <b>slumbr</b> experience.
      </div>
      <button className={classes.button}></button>
      <div className={classes.buttonText}>Get Started</div>
      <div className={classes.signinMsg}>
          Already Have an account?
          <Link to='/'><span className={classes.signin}>Sign In</span></Link>
      </div>
    </div>
  );
}
export default WelcomePage;
