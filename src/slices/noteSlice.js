import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_DB_URL;
const noteAdapter = createEntityAdapter();

const initialState = noteAdapter.getInitialState({
    ids: [0],
    entities: [{ id: 0, text: 'init state notes' }]
});

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: noteAdapter.addOne,
        removeNote: noteAdapter.removeOne,
    }
});

export const { addNote, removeNote } = noteSlice.actions;
export const selectors  = noteAdapter.getSelectors((state) => state.notes);
export default noteSlice.reducer;
