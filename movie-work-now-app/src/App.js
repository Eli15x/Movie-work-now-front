import './App.css';
import React from "react";
import Login from "./pages/Login/Login"
import Feed from "./pages/Feed/Feed"
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
          <Route path="/feed" element={<Feed/>} />
          <Route path="/#"  element={Feed}/>
        </Routes>
    </Router>
  );
}

export default App;
