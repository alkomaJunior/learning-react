// Importing libraries
import { configureStore } from "@reduxjs/toolkit";

// Importing store slices
import bookReducer from "./slices/bookSlice";

export default configureStore({
    reducer: {
        book: bookReducer
    }
});