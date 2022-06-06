import './App.css';
import React from "react";
import Login from "./pages/Login"
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
          <Route path="/"/>
        </Routes>
    </Router>
  );
}

export default App;
