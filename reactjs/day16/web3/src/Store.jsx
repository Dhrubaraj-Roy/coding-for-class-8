import { configureStore } from "@reduxjs/toolkit";
import slicer1Reducer from "./slicer1";


const stores = configureStore({
    reducer:{
        slicer1: slicer1Reducer,
    }
})
export default stores;