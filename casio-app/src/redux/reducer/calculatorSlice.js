import { createSlice } from "@reduxjs/toolkit";
import {evaluate} from 'mathjs';

const calSlider = createSlice({
    name:'calculator',
    initialState:{
        data:[],
        resutl: null,
    },
    reducers:{
        sumItem:(state, action)=>{
            try {
                const calc = action.payload.reduce((a,b)=>a+b).toString();
                state.resutl = evaluate(calc)
            } catch (error) {
                console.log(error)
                state.resutl = ""
            }
        }
    }
})

const {reducer} = calSlider;
export const {sumItem} = calSlider.actions;
export default reducer;