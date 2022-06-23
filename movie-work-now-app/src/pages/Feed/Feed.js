import './feed.css';
import icon from '../../img/icon-movie.png'
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
    <div className="bar-feed">
      <div className="bar-icon"></div>
      <div classname="bat-icon-movie"> <img className="icon-movie" src={icon}></img></div>
    </div>
);

}                                                                                                                                     