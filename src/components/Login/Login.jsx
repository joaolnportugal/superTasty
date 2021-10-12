import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from "../../stateProvider";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [showPassword, setShowPassword] = useState("password");
    const [forgotPassword, setForgotPassword] = useState(true);
    const [{ user }, dispatch] = useStateValue();
    const history = useHistory();

    const auth = getAuth();

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

                    alert("Logged in!");
                    history.push('/');
                }
            })
            .catch((error) => alert(error.message));
    };

    const handleShowForgetPassword = () => {
        setForgotPassword(!forgotPassword);
    };
    const handleCreateAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
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
                <form>
                    <label form="E-mail">E-mail</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <label form="Password">Password</label>
                    <input
                        type={showPassword}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <div className="loginButton">
                        <button type="submit" onClick={handleSubmitLogin}>
                            Login
                        </button>
                    </div>
                </form>
                <div className="register">
                    <button type="submit" onClick={handleCreateAccount}>
                        Create an account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
