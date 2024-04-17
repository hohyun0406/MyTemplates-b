'use client'

import { IBoard } from "@/app/components/board/model/board"
import { findAllBoards } from "@/app/components/board/service/board-service"
import { getAllBoards } from "@/app/components/board/service/board-slice"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function BoardCards () {

    const dispatch = useDispatch()
    const boardList = useSelector(getAllBoards)
    useEffect(()=>{
        dispatch(findAllBoards(1))
    },[boardList])
    
    return(<>
    
    <h1>게시판 목록 들어옴</h1>
    {boardList.map((board : IBoard )=>())}

    </>)
}