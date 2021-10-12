import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./stateProvider";


function App() {
  // const [{}, dispatch] = useStateValue();
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("the user is >>>", authUser);
  //     if (authUser) {
  //       //the user is logged
  //       dispatch({ type: "SET_USER", user: authUser });
  //     } else {
  //       //the user logged out
  //       dispatch({ type: "SET_USER", user: null });
  //     }
  //   });
  // }, []);

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
