import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const noteAdapter = createEntityAdapter();

const noteSlice = createSlice({
    name: 'notes',
    initialState: noteAdapter.getInitialState({
        ids: [0],
        entities: [{id: 0, text: 'init state notes'}]
    }),
    reducers: {
        addNote: noteAdapter.addOne,
        removeNote: noteAdapter.removeOne,
    }
});

export const { addNote, removeNote } = noteSlice.actions;
export const selectors  = noteAdapter.getSelectors((state) => state.notes);
export default noteSlice.reducer;
