import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from "../feartures/todo/todoSlice";

export const store = configureStore({
    reducer: todoSlice.reducer
})