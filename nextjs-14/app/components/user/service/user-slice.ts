import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./user-init"
import { findAllUsers, findUserById } from "./user-service"


const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected : 'rejected'
}

// const handlePending = (state:any) =>{}

// const handleFulfilled = (state : any, {payload}:any) => {
//     state.array = payload
// }

// const handleRejected = (state : any) => {}


export const userSlice = createSlice({
    name : "users",
    initialState,
    reducers: {},
    extraReducers : builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllUsers.fulfilled, (state : any, {payload}:any) => {state.array = payload})
        .addCase(findUserById.fulfilled, (state : any, {payload}:any) => {state.json = payload})
    }
})

export const getAllUsers = (state : any) => {
    console.log('---------before useSelector--------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array
}

//result 지워버리면 length 오류는 없어짐.


export const getUserById = (state : any) => { return state.user.json}


export const {} = userSlice.actions

export default userSlice.reducer