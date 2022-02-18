import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_DB_URL;

export const fetchNotes = createAsyncThunk(
    'notes/fetchNotes',
    async () => {
        const response = await axios.get(`${url}/notes.json`);
        console.log(response.name);

        const fetchedData = []

        for (let key in response.data) {
            fetchedData.push({...response.data[key], id: key})
        }
        return fetchedData;
    }
)

export const sendNote = createAsyncThunk(
    'notes/AddNote',
    async ({id, text}) => {
        const { data } = await axios.post(`${url}/notes.json`, {id, text});
        console.log(data.name);
            return data.name;
    }
)

export const removeNote = createAsyncThunk(
    'notes/removeNote',
    async (id) => {
        console.log(id);
        await axios.delete(`${url}/notes/${id}.json`);
        return id;
    }
)

const noteAdapter = createEntityAdapter();
const initialState = noteAdapter.getInitialState({ loading: 'idle', error: null });

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.loading = 'loading';
                state.error = null;
            })

            .addCase(fetchNotes.fulfilled, (state, {payload}) => {
                console.log(payload)
                noteAdapter.addMany(state, payload);
                state.loadnig = 'idle';
                state.error = null;
            })

            .addCase(sendNote.fulfilled, (state, action) => {
                noteAdapter.addOne(state, action);
                state.loadnig = 'idle';
                state.error = null;
            })

            .addCase(removeNote.fulfilled, (state, action) => {
                noteAdapter.removeOne(state, action.payload);
                // state.loadnig = 'idle';
                // state.error = null;
            })

            .addCase(fetchNotes.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error;
            })
    }
});

export default noteSlice.reducer;
export const selectors = noteAdapter.getSelectors((state) => state.notes);

