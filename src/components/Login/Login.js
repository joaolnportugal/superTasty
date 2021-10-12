import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="loginLogo" src="https://dl.dropboxusercontent.com/s/4snbyg1ko6jm5hr/super%20tasty%20yellow%20logo.jpg?dl=0" />
      </Link>
    </div>
  );
}

export default Login;
