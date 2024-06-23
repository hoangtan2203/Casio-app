import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./../reducer/calculatorSlice"


export const store = configureStore({
    reducer:{
        cal:calculatorSlice
    }
})

