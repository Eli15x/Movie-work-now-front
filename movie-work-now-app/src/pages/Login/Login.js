import { validLogin } from '../../api/user'
import React , { useEffect, useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import { setUserIdCookie, getUserIdCookie, setUserJwtCookie } from '../../utils/cookies';
import { createJWT } from '../../utils/jwt';

export default () => {

  const navigate = useNavigate();
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
      let jwt = createJWT(response)
      setUserId(response.UserId);
      setUserIdCookie(response.UserId);
      setUserJwtCookie(jwt);
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
  if((userId !== "") && (getUserIdCookie() !== "")){
    navigate("/feed");
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