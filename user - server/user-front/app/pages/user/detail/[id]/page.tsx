'use client'

import { PG } from "@/app/components/common/enums/PG";
import { CustomTypography } from "@/app/components/common/style/cell";
import { IUser } from "@/app/components/user/model/user";

import { deleteById, findUserById, modify } from "@/app/components/user/service/user-service";
import { getDeleteById, getModify, getUserById } from "@/app/components/user/service/user-slice";
import { Button, Input, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function UserDetail({params}:any){
    const dispatch = useDispatch()
    const user:IUser = useSelector(getUserById)
    const deleteMessage = useSelector(getDeleteById)
    const modiMessage = useSelector(getModify)
    const router = useRouter()
    
    const [modiUser, setModiUser] = useState({} as IUser);
    

    const handleModify = () => {
        dispatch(modify(modiUser))
    }

    const handleDelete = () => {
        dispatch(deleteById(params.id))
    }

  useEffect(()=>{
    dispatch(findUserById(params.id))
  }, [])

  useEffect(()=>{
    if(deleteMessage==='SUCCESS'){
      alert(deleteMessage)
      router.replace(`${PG.USER}/list`)
    }
}, [deleteMessage])

useEffect(()=>{
  if(modiMessage==='SUCCESS'){
    alert(modiMessage)
    router.push(`${PG.USER}/list`)
  }
}, [modiMessage])

    return(<>
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <div className="flex flex-col justify-start items-center w-[200px]">
          <div className="justify-center items-center">
            <span>ID</span>
            <TextField
              defaultValue={user.id}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModiUser({ ...modiUser, id: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>아이디</span>
            <TextField
              defaultValue={user.username}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModiUser({ ...modiUser, username: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>비밀번호</span>
            <TextField
              defaultValue={user.password}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModiUser({ ...modiUser, password: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>name</span>
            <TextField
              defaultValue={user.name}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModiUser({ ...modiUser, name: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>phone</span>
            <TextField
              defaultValue={user.phone}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModiUser({ ...modiUser, phone: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>address</span>
            <TextField
              defaultValue={user.address}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModiUser({ ...modiUser, address: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>job</span>
            <TextField
              defaultValue={user.job}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModiUser({ ...modiUser, job: e.target.value })
              }
            />
          </div>

          <div className="flex gap-2 justify-center items-center">
            <Button onClick={handleModify}>수정하기</Button>
            <Button onClick={handleDelete}>삭제하기</Button>
          </div>
        </div>
      </div>
    </>
    </>)
}