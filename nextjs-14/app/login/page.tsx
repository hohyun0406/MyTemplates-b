"use client";

import axios from "axios";
import { useState } from "react";

const SERVER = `http://localhost:8080/`;
export default function Loginpage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e: any) => {
        setUsername(e.target.value);
    }

    const handleChangePw = (e: any) => {
        setUsername(e.target.value);
    }


    const handleClick = () => {
        alert('리퀘스트로 보낸 이름 : '+username);
        const url = `${SERVER}name`;
        const data = {username,password};
        const config = {
            headers:{
              "Cache-Control": "no-cache",
              "Content-Type": "application/json",
               Authorization: `Bearer blah ~` ,
              "Access-Control-Allow-Origin": "*",
          }};


        axios.post(url,data,config).then((res)=>(
            alert("리스판스가 가져온 이름 : " + JSON.stringify(res.data))
        ));
    }

  return (
    <>
      <h2>로그인페이지</h2>
      <h3>username</h3>
      <input type="text" onChange={handleChange}/>
      <h3>password</h3>
      <input type="text" onChange={handleChangePw}/>
      <br />

      <br />
      <button onClick={handleClick}>로그인</button>
    </>
  );
}
