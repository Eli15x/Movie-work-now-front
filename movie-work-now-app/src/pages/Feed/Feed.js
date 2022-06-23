import '../../App.css';
import { validLogin } from '../../api/user'
import React , { useEffect, useState } from "react";
import {getUserIdCookie } from '../../utils/cookies';
import { useNavigate } from "react-router-dom";
export default () => {

  const navigate = useNavigate();
  const [userId, setUserId]  = useState("");

  useEffect(() => {
    if(userId == ""){
        const userIdCookie = getUserIdCookie();
      if(userIdCookie !== ""){
        setUserId(userIdCookie)
      }else{
        alert("você não está logado, porfavor logue-se")
        navigate("/login");
      }
    }
  
  });

  return (
    <div className="login">
      OK
    </div>
);

}                                                                                                                                     