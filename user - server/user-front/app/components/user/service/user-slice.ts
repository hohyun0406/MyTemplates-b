import { createSlice } from "@reduxjs/toolkit"
import { deleteById, existsId, findAllUsers, findUserById, login, modify } from "./user-service"
import { IUser } from "../model/user"


const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected : 'rejected'
}
interface IAuth{
    message? : string
    token? : string
}

interface UserState  {
    json? : IUser,
    array? : Array<IUser>,
    auth?: IAuth,
    msg? : string
}

export const initialState:UserState = {
    json : {} as IUser,
    array : [],
    auth : {} as IAuth,
    msg : ''

}

export const userSlice = createSlice({
    name : "users",
    initialState,
    reducers: {},
    extraReducers : builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllUsers.fulfilled, (state : any, {payload}:any) => {state.array = payload})
        .addCase(findUserById.fulfilled, (state : any, {payload}:any) => {state.json = payload})
        .addCase(deleteById.fulfilled, (state : any, {payload}:any) => {state.auth = payload})
        .addCase(modify.fulfilled, (state : any, {payload}:any) => {state.auth = payload})
        .addCase(login.fulfilled, (state : any, {payload}:any) => {state.auth = payload})
        .addCase(existsId.fulfilled, (state : any, {payload}:any) => {state.msg = payload})
    }
})

export const getAllUsers = (state : any) => {
    console.log('---------before useSelector--------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array
}

export const getUserById = (state : any) => {return state.user.json}
export const getDeleteById = (state : any) => {return state.user.auth}
export const getModify = (state : any) => {return state.user.auth}
export const getAuth = (state : any) => {return state.user.auth}
export const checkExistId = (state : any) => {return state.user.msg}

export const {} = userSlice.actions

export default userSlice.reducer