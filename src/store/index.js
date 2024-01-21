import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './reducers/usersSlice'
import collumnSlice from "./reducers/collumnSlice";
import sortingSlice from "./reducers/sortingSlice";
import modalSlice from "./reducers/modalSlice";

export const Store = configureStore({
    reducer:{
        users: usersSlice,
        sorting: sortingSlice,
        collumns: collumnSlice,
        modal: modalSlice,
    }
})