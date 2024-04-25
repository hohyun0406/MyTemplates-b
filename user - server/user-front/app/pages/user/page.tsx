'use client'

import { getAllUsers } from "@/app/components/user/service/user-slice"
import { NextPage } from "next"
import { useEffect } from "react"
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

    // useEffect(()=>{
    //     dispatch(fetchAllUsers(0))
    // }, [])


    return ( <>
        <h2>USER TABLE</h2>
          <table>
            <thead>
              <tr>
                <th>아아디</th>
                <th>비밀번호</th>
                <th>이름</th>
                <th>전화번호</th>
                <th>주소</th>
                <th>직업</th>
                <th>신장</th>
                <th>체중</th>
              </tr>
            </thead>
            <tbody>{allUsers?.map(
              (props: IUser) => 
       (<>
          <tr key={props.id}>
            <td>{props.username}</td>
            <td>{props.password}</td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.address}</td>
            <td>{props.job}</td>
            <td>{props.height}</td>
            <td>{props.weight}</td>
          </tr>
        </>
      ))}</tbody>
          </table>
        </>)


}

export default UsersPage