'use client'

import UserColumns from "@/app/components/user/module/user-columns"
import { findAllUsers } from "@/app/components/user/service/user-service"
import { getAllUsers } from "@/app/components/user/service/user-slice"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


interface IUser {
    id: number,
    username : string,
    password : string,
    name : string,
    phone : string,
    address : string,
    job : string,
    height : number,
    weight : number
}

const UsersPage: NextPage = () => {
    const [pageSize, setPageSize] = useState(5); // 4-1
    const dispatch = useDispatch()
    const allUsers: [] = useSelector(getAllUsers)
    
    if(allUsers !== undefined){
        console.log('allUsers is not undefined!!(>u<)b')
        console.log('length is '+allUsers.length)
        for(let i=0;i<allUsers.length;i++){
            console.log(JSON.stringify(allUsers[i]))
        }
    } else {
        console.log('allUsers is undefined..T.T you need to check getAllUsers method or back-code')
    }

    useEffect(()=>{
        dispatch(findAllUsers(1))
    }, [])

    return ( <>
        <h2>USER TABLE</h2>
          <div style={{ height: 400, width: "100%" }}>
      {allUsers && <DataGrid // 🔥 4
        rows={allUsers}
        columns={UserColumns()}
        pageSizeOptions={[5, 10, 20]} // 4-1
        checkboxSelection
      />}
    </div>
        </>)
}

export default UsersPage