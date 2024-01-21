import { createSlice } from "@reduxjs/toolkit";

//хранилище значений ширины каждого столбца, изменение ширины не реализовал
const collumnsSlice = createSlice({
    name: "collumns",
    initialState: {
        fio_collumn_width: 30,
        age_collumn_width: 10,
        sex_collumn_width: 15,
        number_collumn_width: 15,
        address_collumn_width: 30
    },
    reducers: {
        setFioWidth: (state, action)=>{
            state.fio_collumn_width = action.payload
        },
        setAgeWidth: (state, action)=>{
            state.age_collumn_width_collumn_width = action.payload
        },
        setSexWidth: (state, action)=>{
            state.sex_collumn_width_collumn_width = action.payload
        },
        setNumberWidth: (state, action)=>{
            state.number_collumn_width_collumn_width = action.payload
        },
        setAddressWidth: (state, action)=>{
            state.address_collumn_width_collumn_width = action.payload
        }
    },
})

export const {setFioWidth, setAgeWidth, setSexWidth, setNumberWidth, setAddressWidth} = collumnsSlice.actions;

export default collumnsSlice.reducer;