import { createSlice } from "@reduxjs/toolkit";


//состояние модальных окон
const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modalActive: false,
        rowID: 0
    },
    reducers: {
        setModalActive: (state, action) =>{
            state.modalActive = action.payload
        },
        setRowID: (state, action) =>{
            state.rowID = action.payload
        }
    }
})

export const {setModalActive, setRowID} = modalSlice.actions;
export default modalSlice.reducer;