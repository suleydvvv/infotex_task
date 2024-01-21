import { createSlice } from "@reduxjs/toolkit";

//значения селекторов сортировки
export const values = ["Не сортировать", "По возрастанию(A-Z)", "По убыванию(Z-A)"]


//состояние сортировки
const sortingSlice = createSlice({
    name: "sorting",
    initialState: {
        active: false,
        valueFIO: values[0],
        valueAge: values[0],
    },
    reducers: {
        setActive: (state, action)=>{
            state.active = action.payload
        },
        setValueFIO: (state, action)=>{
            if(action.payload === values[0]) state.valueFIO = action.payload
            else{
                state.valueAge = values[0]
                state.valueFIO = action.payload
            }
        },
        setValueAge: (state, action)=>{
            if(action.payload === values[0]) state.valueAge = action.payload
            else{
                state.valueFIO = values[0]
                state.valueAge = action.payload
            }
        },
    },
});

export const {setActive, setValueFIO, setValueAge, setValueAddress} = sortingSlice.actions;

export default sortingSlice.reducer;