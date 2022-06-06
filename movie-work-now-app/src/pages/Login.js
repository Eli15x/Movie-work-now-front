import '../App.css';
import { validLogin } from '../api/user'
import React , { useEffect, useState } from "react";

export default () => {

  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");
  const [validUser, setValidUser]  = useState(false);

  function validateLogin() {
   if (password !== "" && email !== "") {
      const result = validLogin(email, password)
      if (result === "ok")
        setValidUser(true)
    }

  };

  return (
    <div className="login">
      <form onSubmit={validateLogin}>
        <div>
          <span>email</span>
          <input
            onChange={e => setEmail(e.target.value)}
            id="email"
            name="email"
            placeholder=""
          />
        </div>
        <div>
          <span>password</span>
          <input
            onChange={e => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder=""
          />
        </div>
        <button
          onSubmit={validateLogin}
          id="authenticate-user-login"
          className="authenticate-user-login"
        >
          Login
        </button>
      </form>
    </div>
);

}