import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    //firebase login magic going on
  };
  const register = (e) => {
    e.preventDefault();
    //firebase register witchcraft
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="loginLogo"
          src="https://dl.dropboxusercontent.com/s/4snbyg1ko6jm5hr/super%20tasty%20yellow%20logo.jpg?dl=0"
        />
      </Link>
      <div className="loginContainer">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="signinButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Super Tasty's conditions of Use & Sale.
        </p>
        <button onClick={register} className="loginRegistertButton">
          Create your Super Tasty Account
        </button>
      </div>
    </div>
  );
}

export default Login;
