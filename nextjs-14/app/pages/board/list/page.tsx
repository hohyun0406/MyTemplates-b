'use client'

import BoardColumns from "@/app/components/board/module/board-columns"
import { findAllBoards } from "@/app/components/board/service/board-service"
import { getAllBoards } from "@/app/components/board/service/board-slice"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const BoardsPage: NextPage = () => {
    const dispatch = useDispatch()
    const allBoards: [] = useSelector(getAllBoards)


    useEffect(() => {
        dispatch(findAllBoards(1))
    }, [])
    
    return (<>
      <h2>보-드 TABLE</h2>
        <div style={{ height: 400, width: "100%" }}>
    {allBoards && <DataGrid // 🔥 4
      rows={allBoards}
      columns={BoardColumns()}
      pageSizeOptions={[5, 10, 20]} // 4-1
      checkboxSelection
    />}
  </div>
      </>)
}

export default BoardsPage