import './App.css';
import React from "react";
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route path="/topics"/>
          <Route path="/#"  element={Feed}/>
        </Routes>
    </Router>
  );
}

export default App;
