import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./user-init"
import { findAllUsers } from "./user-service"


const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected : 'rejected'
}

const handlePending = (state:any) =>{

}

const handleFulfilled = (state : any, {payload}:any) => {
    console.log('------------conclusion---------')
    state.array = payload
    console.log(state.array)
}

const handleRejected = (state : any) => {

}


export const userSlice = createSlice({
    name : "users",
    initialState,
    reducers: {},
    extraReducers : builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllUsers.fulfilled, handleFulfilled)
    }
})

export const getAllUsers = (state : any) => {
    console.log('---------before useSelector--------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array
}

//result 지워버리면 length 오류는 없어짐.

export const {} = userSlice.actions

export default userSlice.reducer