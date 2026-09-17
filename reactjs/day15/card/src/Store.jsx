import {configureStore} from "@reduxjs/toolkit";
import CartRecuder from "./Slice2"
import { useDeferredValue } from "react";

const stores = configureStore ({
    reducer: {
        slice2:CartRecuder
    }
})

export default stores