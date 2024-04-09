'use client'

import { Typography } from "@mui/material"
import { NextPage } from "next"


export default function BoardDetailPage (props:any) {
    
    // useEffect(()=>{
    //     dispatch(findBoardById(props.params.id))
    // }, [])


    return(<>
    
    {props.params.id}번 게시판 상세
    {/* <span>ID </span> <Typography textAlign="center" sx={{fontSize="1.5rem"}}> </Typography> */}
    
    
    </>)

}
