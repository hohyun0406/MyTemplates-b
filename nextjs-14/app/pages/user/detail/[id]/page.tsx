'use client'

import { CustomTypography } from "@/app/components/common/style/cell";
import { IUser } from "@/app/components/user/model/user";

import { deleteById, findUserById, modify } from "@/app/components/user/service/user-service";
import { getUserById } from "@/app/components/user/service/user-slice";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function UserDetail({params}:any){
    const dispatch = useDispatch()
    const user:IUser = useSelector(getUserById)
//get modify, delete 추가 (Slice단 해야 함)
//Input 박스 추가
    useEffect(()=>{
        dispatch(findUserById(params.id))
    }, [])

    const handleModify = () => {
        dispatch(modify())
    }

    const handleDelete = () => {
        dispatch(deleteById())
    }

    return(<>
    <div>
    <h2>{params.id}상세 페이지</h2>
    <span>id : </span>{CustomTypography(user.id, "1rem")}
    <span>username : </span>{CustomTypography(user.username, "1rem")}
    <span>password : </span>{CustomTypography(user.password, "1rem")}
    <span>name : </span>{CustomTypography(user.name, "1rem")}
    <span>phone : </span>{CustomTypography(user.phone, "1rem")}
    <span>address : </span>{CustomTypography(user.address, "1rem")}
    <span>job : </span>{CustomTypography(user.job, "1rem")}
    <span>regDate : </span>{CustomTypography(user.regDate, "1rem")}
    <span>modDate : </span>{CustomTypography(user.modDate, "1rem")}
    <Button onClick={handleModify}>수정</Button><Button onClick={handleDelete}>삭제</Button>
    </div>
    </>)
}