import { configureStore } from "@reduxjs/toolkit";
import alertReducer from '../slices/alertSlice.js';
import noteReducer from '../slices/noteSlice.js'

export default configureStore({
    reducer: {
        alert: alertReducer,
        notes: noteReducer,
    }
})