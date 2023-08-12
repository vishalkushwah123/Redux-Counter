import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 1
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state)=>{
            state.count += 1
        },
        decreament: (state)=>{
            state.count -= 1
        },

    }
})

export const {increament, decreament} = counterSlice.actions 
export default counterSlice.reducer