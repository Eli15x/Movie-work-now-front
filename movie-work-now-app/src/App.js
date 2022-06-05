import logo from './logo.svg';
import './App.css';
import React from "react";
import Login from "./pages/login"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
    <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/login" component={Login}>
            </Route>
            <Route path="/topics">
            </Route>
            <Route path="/">
            </Route>
          </Routes>
        </div>
      </Router></>
  );
}

export default App;
