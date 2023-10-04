import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: 'Ashu',
    email: 'himaloyashis98@gmail.com',
    userTask:[]

}


const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{}

})


export default userSlice.reducer;