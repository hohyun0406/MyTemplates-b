'use client'

import UserColumns from "@/app/components/user/module/user-columns"
import { findAllUsers } from "@/app/components/user/service/user-service"
import { getAllUsers } from "@/app/components/user/service/user-slice"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const cards = [
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
  ];

export default function UserListPage(){
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
    <div className="flex flex-col items-center justify-center w-full bg-gray-300">
      <div className="flex overflow-x-scroll snap-x snap-mandatory max-w-6xl no-scrollbar">
        {cards.map((data, index) => {
          return (
            <section
              className="flex-shrink-0 w-full snap-center justify-center items-center"
              key={index}
            >
              <img
                src={data}
                alt="Images to scroll horizontal"
                className="w-full h-[500px]"
              />
            </section>
          );
        })}
      </div>
    </div>
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