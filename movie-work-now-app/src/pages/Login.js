import '../App.css';
import { validLoginFetch } from '../api/user'
import React , { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default () => {

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");
  const [userId, setUserId]  = useState("");

const fetchData = async () => {
  setIsLoading(true);
  try{
    if (password !== "" && email !== "") {
      const response = await validLoginFetch(email, password)
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
      <form onSubmit={fetchData}>
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
          onSubmit={fetchData}
          id="authenticate-user-login"
          className="authenticate-user-login"
        >
          Login
        </button>
      </form>
    </div>
);

}