import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../feartures/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})