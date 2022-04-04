// Importing libraries
import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

// Importing services
import BookService from "../../services/BookService";

// Defining global constant
    // Defining an instance of our BookService class
const bkService = new  BookService();
    // Defining an adapter for accessing premade function of reducers
const bkAdapter = createEntityAdapter();
    // Defining our default state
const initialState = bkAdapter.getInitialState({
    status: 'not loading',
    books: [],
});

// Implementation of the Thunk functions
export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
    const response = await bkService.getAllBooks();
    return response.data;
})

// Implementation of the slice
const bookSlice = createSlice({
    // The slice name
    name: 'book',

    // The default state
   initialState,

    // Equivalent to mutation for synchronous operations
    reducers: {},

    // Equivalent to mutation for asynchronous operations
    extraReducers: builder => {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                return {
                    ...state,
                    status: 'not loading',
                    books: action.payload
                };
            })
    }
});

export const {} = bookSlice.actions;
export default bookSlice.reducer;