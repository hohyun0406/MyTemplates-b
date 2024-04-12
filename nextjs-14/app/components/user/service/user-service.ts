import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI, findUserByIdAPI } from "./user-api";

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