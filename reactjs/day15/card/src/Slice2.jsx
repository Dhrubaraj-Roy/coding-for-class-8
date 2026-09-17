import {createSlice} from "@reduxjs/toolkit";

const FoodSlice = createSlice({
    name:"slice2",
    initialState: {count:0},
    reducers:{
        addIteam: (state) => {state.count++},
        removeIteam: (state) => {state.count--},

    }
})

export default FoodSlice.reducer
export const {addIteam, removeIteam} = FoodSlice.actions 