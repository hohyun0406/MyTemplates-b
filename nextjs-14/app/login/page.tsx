"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SERVER = `http://localhost:8080`;
export default function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleChangePw = (e: any) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    alert("리퀘스트로 보낸 이름 : " + username + password);
    const url = `${SERVER}/api/login`;
    const data = { username, password };
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.post(url, data, config).then((res) => {
      const message = res.data.message;
      alert(message);
      if (message === "SUCCESS") {
        router.push("/articles/new-article");
      } else if (message === "FAIL") {
        alert("FAIL");
      } else if (message === "WRONG_PASSWORD") {
        alert("WRONG_PASSWORD");
      } else {
        alert("지정되지 않은 값");
      }
    });
  };

  return (
    <>
      <h2>로그인페이지</h2>
      <h3>username</h3>
      <input type="text" onChange={handleChange} />
      <h3>password</h3>
      <input type="text" onChange={handleChangePw} />
      <br />

      <br />
      <button onClick={handleClick}>로그인</button>
    </>
  );
}
