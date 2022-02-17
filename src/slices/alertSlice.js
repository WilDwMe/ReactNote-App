import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false,
    text: ''
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        show: (state, { payload }) => ({ ...payload, visible: true, text: payload.text, type: payload.type}),
        hide: ({ payload }) => ({ visible: false })
    }
});

export const { show, hide } = alertSlice.actions;
export default alertSlice.reducer;