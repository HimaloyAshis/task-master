import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: '',
    email: '',
    isLoading:true,
    isError:true,
    error:''
}

const createUser = createAsyncThunk('createSlice/createUser', async()=>{})


const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{}

})


export default userSlice.reducer;