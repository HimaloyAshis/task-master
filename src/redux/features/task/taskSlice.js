import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks : []
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers:  {
        addTask : (state, {payload}) =>{

            if(state.tasks.length === 0){
                
                state.tasks.push({id: 1 ,...payload})
            }else{
                
            }
        }
    }
})

export const {addTask } = tasksSlice.actions

export default tasksSlice.reducer;