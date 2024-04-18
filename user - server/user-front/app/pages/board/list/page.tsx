'use client'

import CardButton from "@/app/atoms/button/CardButton"
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
    },[])
    
    return(<>
    <div>
    <div className="flex flex-row gap-3 w-screen items-center">
          {boardList.map((board: any) => (
            <CardButton
              id={board.id}
              boardTitle={board.boardTitle}
              boardDescription={board.boardDescription}
            />
          ))}
        </div>
    </div>
    

    </>)
}