import { createSlice } from '@reduxjs/toolkit';

interface Value {
    value: {
        id: string,
        title: string,
        body: string,
        done: boolean,
    }[];
}

export const slice = createSlice({
    name: 'pages',
    initialState: {
        value: []
    },
    reducers: {
        retrieve: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { retrieve } = slice.actions;

export const getPages = (state: { pages: Value }) => state.pages.value;

export default slice.reducer;