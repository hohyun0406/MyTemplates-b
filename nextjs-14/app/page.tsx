"use client";

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import './globals.css'
import { Button, Input } from "@mui/material";
import { PG } from "./atoms/enums/PG";
import AxiosConfig from "./organisms/configs/axios-config";
import { API } from "./atoms/enums/API";

const SERVER = `http://localhost:8080`;

export default function Home() {
  const [name, setName] = useState("");

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    alert("리퀘스트로 보낸 이름 : " + name);

    axios.post(`${API.SERVER}/name`, {name: name}, AxiosConfig()).then((res) => {
      alert("리스판스가 가져온 이름 : " + JSON.stringify(res.data.name));
    });
  };

  return (
    <div className='text-center'>
    <div>welcom to react world !</div><br />
    <h3 className='text-red-500'>이름 입력</h3><br />
    <Input type="text" onChange={handleChange} /><br />
    <Button onClick={handleClick}>전 송</Button><br />
    <Link href={`${PG.USER}/login`} >로그인</Link><br />
    <Link href={`${PG.USER}/join`}>회원가입</Link><br />
    <Link href={`${PG.DEMO}/mui-demo`}>MUI 데모</Link><br />
    <Link href={`${PG.DEMO}/counter`}>카운터 데모</Link><br />
    <Link href={`${PG.DEMO}/counter/container`}>리덕스 데모</Link>
    </div>
    
  );
}
