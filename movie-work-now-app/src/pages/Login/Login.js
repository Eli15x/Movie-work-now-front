import { validLogin } from '../../api/user'
import React , { useEffect, useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";

export default () => {

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");
  const [userId, setUserId]  = useState("");

const fetchData = async event => {
  event.preventDefault();
  setIsLoading(true);
  
  try{
    if (password !== "" && email !== "") {
      const response = await validLogin(email, password)
      setUserId(response);
    }
  } 
  catch(err){
    console.log(err.message);
  } 
  finally {
    setIsLoading(false);
  }
}

useEffect(() => {
  if(userId !== ""){
    console.log(userId)
    //redirecionar
  }

});

  return (
    <div className="login">
    <div className="login-form">
      <form onSubmit={fetchData}>
        <div>
          <input
            onChange={e => setEmail(e.target.value)}
            id="email"
            name="email"
            placeholder="email"
          />
        </div>
        <div>
          <input
            onChange={e => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button
          onSubmit={fetchData}
          id="authenticate-user-login"
          className="authenticate-user-login"
        >
          Login
        </button>
        <span> Ainda não é membro?</span>
        <a href="#" class="txt2 bo1"> cadastre agora </a>
      </form>
    </div>
  </div>
);

}