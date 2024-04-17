'use client'

import { IBoard } from "@/app/components/board/model/board"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import {getBoardById} from '@/app/components/board/service/board-slice'
import {findBoardById} from '@/app/components/board/service/board-service'
import { CustomTypography } from "@/app/components/common/style/cell"

export default function BoardDetailPage ({params}:any) {
    const dispatch = useDispatch()
    const board:IBoard = useSelector(getBoardById)

    useEffect(()=>{
        dispatch(findBoardById(params.id))
    },[])



    return(<>
     <div>
            <h3>{params.id}의 상세 페이지</h3>
            <span>boardName</span>{CustomTypography(board.boardTitle,"1.5rem")}
            <span>boardType</span>{CustomTypography(board.discription,"1.5rem")}
        </div>
    </>)
}
