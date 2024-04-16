import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteByIdAPI, findAllUsersAPI, findUserByIdAPI, loginAPI, modifyAPI } from "./user-api";
import { IUser } from "../model/user";

export const findAllUsers:any = createAsyncThunk(
    "users/findAllUsers",
    async (page: number) => {
        const data : any = await findAllUsersAPI(page);

        const {message, result}:any = data
        console.log(JSON.stringify(result))
        return data
    }
)

export const findUserById:any = createAsyncThunk(
    "users/detail",
    async (id : number) => await findUserByIdAPI(id)
)


export const modify:any = createAsyncThunk(
    "users/modify",
    async (user:IUser) => await modifyAPI(user)
)

export const deleteById:any = createAsyncThunk(
    "users/delete",
    async (id : number) => await deleteByIdAPI(id)
)

export const login:any = createAsyncThunk(
    "users/login",
    async (user:IUser) => await loginAPI(user)
)