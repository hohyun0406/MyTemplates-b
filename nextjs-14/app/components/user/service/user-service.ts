import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteByIdAPI, findAllUsersAPI, findUserByIdAPI, modifyAPI } from "./user-api";

export const findAllUsers:any = createAsyncThunk(
    "users/findAllUsers",
    async (page: number) => {
        console.log("findAllUsers page : " + page);
        const data : any = await findAllUsersAPI(page);

        const {message, result}:any = data
        console.log('------------API를 사용한 경우--------')
        console.log('message : ' + message)
        console.log(JSON.stringify(result))
        return data

    }
)

export const findUserById:any = createAsyncThunk(
    "users/findUserById",
    async (id : number) => await findUserByIdAPI(id)
)


export const modify:any = createAsyncThunk(
    "users/modify",
    async (data:any) => await modifyAPI(data)
)

export const deleteById:any = createAsyncThunk(
    "users/delete",
    async (id : any) => await deleteByIdAPI(id)
)