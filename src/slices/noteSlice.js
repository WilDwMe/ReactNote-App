import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_DB_URL;

export const fetchNotes = createAsyncThunk(
    'notes/fetchNotes',
    async () => {
        const response = await axios.get(`${url}/notes.json?`);
        const fetchedData = []

        for (let key in response.data) {
            fetchedData.push({ note: { ...response.data[key] }, id: key})
        }
        return fetchedData;
    }
)

export const sendNote = createAsyncThunk(
    'notes/AddNote',
    async ({id, text}) => {
        const res = await axios.post(`${url}/notes.json`, { id, text })
            .then(() => axios.get(`${url}/notes.json`)
                .then((res) => res));
        const fetchedData = []

        for (let key in res.data) {
            fetchedData.push({ note: { ...res.data[key] }, id: key})
        }
        return fetchedData;
        
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
                noteAdapter.addMany(state, payload);
                state.loading = 'idle';
                state.error = null;
            })

            .addCase(sendNote.fulfilled, (state, {payload}) => {
                noteAdapter.addMany(state, payload);
                state.loading = 'idle';
                state.error = null;
            })

            .addCase(removeNote.fulfilled, (state, action) => {
                noteAdapter.removeOne(state, action.payload);
                state.loading = 'idle';
                state.error = null;
            })

            .addCase(fetchNotes.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error;
            })
    }
});

export default noteSlice.reducer;
export const selectors = noteAdapter.getSelectors((state) => state.notes);
// export const status = noteAdapter.getSelectors((state) => state);

