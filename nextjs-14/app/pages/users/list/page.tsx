'use client'

import UserColumns from "@/app/components/users/columns"
import { fetchAllUsers } from "@/redux/features/users/user.service"
import { getAllUsers } from "@/redux/features/users/user.slice"
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
        dispatch(fetchAllUsers(1))
    }, [])


    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "firstName", headerName: "First name", width: 130 },
      { field: "lastName", headerName: "Last name", width: 130 },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
      },
      {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params: { row: { firstName: any; lastName: any } }) =>
          `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      },
    ];

    const rows = [ 
      { id: 1, username: "Snow", name: "Jon", phone: 35 },
      { id: 2, username: "Lannister", name: "Cersei", phone: 42 },
      { id: 3, username: "Lannister", name: "Jaime", phone: 45 },
      { id: 4, username: "Stark", name: "Arya", phone: 16 },
      { id: 5, username: "Targaryen", name: "Daenerys", phone: null },
      { id: 6, username: "Melisandre", name: null, phone: 150 },
      { id: 7, username: "Clifford", name: "Ferrara", phone: 44 },
      { id: 8, username: "Frances", name: "Rossini", phone: 36 },
      { id: 9, username: "Roxie", name: "Harvey", phone: 65 },
    ];



    return ( <>
        <h2>USER TABLE</h2>
          <div style={{ height: 400, width: "100%" }}>
      <DataGrid // 🔥 4
        rows={allUsers}
        columns={UserColumns()}
        pageSizeOptions={[5, 10, 20]} // 4-1
        checkboxSelection
      />
    </div>
        </>)
}

export default UsersPage