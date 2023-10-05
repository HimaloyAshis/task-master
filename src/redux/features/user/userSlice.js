import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: 'Himaloy Ashis',
    email: 'himaloyashis98@gmail.com',
}


const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{}

})


export default userSlice.reducer;