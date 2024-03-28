'use client'

import { Button } from "@mui/material";
import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);


    const handlePlus = () => {
        setCount(count +1)
    };

    const handleMinus = () => {
        setCount(count -1);
    }


    return <>
    <h1>Counter : {count}</h1><br />
    <Button onClick={handlePlus}>+</Button><br />
    <Button onClick={handleMinus}>-</Button>
    </>
}