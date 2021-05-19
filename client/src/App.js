import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import TodoForm from "./components/todoForm/todoForm"
import { Fragment, useState, useEffect } from "react"
import Welcome from "./features/welcomePage/Welcome";
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(Boolean);


  useEffect(() => {
    const isAuth = async () => {
      try {
        const response = await fetch(
          "/api/auth/is-verify",
          {
            method: "GET",
            headers: { token: localStorage.token },
          }
        );
        const data = await response.json();
        data === true ? setAuth(true) : setAuth(false);
      } catch (error) {
        console.error(error.message);
      }

    };
    isAuth();
  });




  return (
    <Fragment>
      <Router>
        <div className="App">
          <Route exact path="/" render={props => (auth ? <Fragment><TodoForm /></Fragment> : <Welcome />)} />
          <Route path="/login" render={props => (auth ? <Fragment><TodoForm /></Fragment> : <Login setAuth={setAuth} />)} />
          <Route path="/signup" render={props => (auth ? <Fragment><TodoForm /></Fragment> : <Signup setAuth={setAuth} />)} />
          <Route path="/todos" render={props => (auth ? <Fragment><TodoForm setAuth={setAuth} /></Fragment> : <Welcome />)} />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
