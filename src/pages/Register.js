import React from "react";
import { Link } from "react-router-dom";

import classes from "./Register.module.css";

function RegisterPage() {
  return (
    <div className={classes.container}>
      <div className={classes.backButton}></div>
      <div className={classes.welcomeText}>
        Your personalized experience is ready!
      </div>
      <div className={classes.check}></div>
      <div className={classes.circle}></div>
      <button className={classes.button}></button>
      <div className={classes.buttonText}>Create Account</div>
      <div className={classes.signinMsg}>
        Already Have an account? 
        <Link to='/'>
          <span className={classes.signin}>Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
