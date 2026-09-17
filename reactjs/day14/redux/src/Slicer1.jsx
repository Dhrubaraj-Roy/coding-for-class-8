import { createSlice } from "@reduxjs/toolkit";

const reactslicer = createSlice({
    name: "slice1",
    initialState: {count:0},
    reducers: {
        Increament: (state)=> {state.count = state.count+1},
        Decrement: (state)=> {state.count = state.count-1},
        Reset: (state)=> {state.count = 0},
        CustomInc: (state, action)=>{state.count += action.payload}

    }
})

export const {Increament, Decrement, Reset, CustomInc} = reactslicer.actions;  
export default reactslicer.reducer;