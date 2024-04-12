'use client'

import { CustomTypography } from "@/app/components/common/style/cell";
import { IUser } from "@/app/components/user/model/user";

import { findUserById } from "@/app/components/user/service/user-service";
import { getUserById } from "@/app/components/user/service/user-slice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function UserDetail({params}:any){
    const dispatch = useDispatch()
    const user:IUser = useSelector(getUserById)

    useEffect(()=>{
        dispatch(findUserById(params.id))
    }, [])

    return(<>
    <div>
    <h2>{params.id}상세 페이지</h2>
    <span>아이디 : </span>{CustomTypography(user.id, "1rem")}
    <span>아이디 : </span>{CustomTypography(user.id, "1rem")}
    <span>아이디 : </span>{CustomTypography(user.id, "1rem")}
    <span>아이디 : </span>{CustomTypography(user.id, "1rem")}
    <span>아이디 : </span>{CustomTypography(user.id, "1rem")}
    <span>아이디 : </span>{CustomTypography(user.id, "1rem")}
    </div>
    </>)
}