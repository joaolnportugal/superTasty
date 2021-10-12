import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from "../../stateProvider";

const Login = (props) => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [forgotPassword, setForgotPassword] = useState(true);
  const [{ user }, dispatch] = useStateValue();

  const handleShowOrHidePwd = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //sucessefully created a new user with email and pwd
        if (userCredential) {
          dispatch({
            type: "SET_USER",
            user: userCredential.user,
          });
          props.handleShowLoginParent();
          alert("Logged in!");
        }
      })
      .catch((error) => alert(error.message));
  };

  const handleShowForgetPassword = () => {
    setForgotPassword(!forgotPassword);
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
          {/* <h5>E-mail</h5>
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
          <button type="submit" onClick={handleSubmitLogin} className="signinButton">
            Sign In
          </button> */}
        </form>
        <p>
          By signing-in you agree to Super Tasty's conditions of Use & Sale.
        </p>
        {/* <button onClick={register} className="loginRegistertButton">
          Create your Super Tasty Account
        </button> */}
      </div>
    </div>
  );
};

export default Login;
