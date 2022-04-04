// Importing libraries
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../components/layouts/Sidebar";

// Importing functions to be dispatched
import { fetchBooks } from "../../store/slices/bookSlice";

// Component implementation
function Home() {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.book.books);

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    console.log(books);

    return (
        <div>
            <Sidebar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                <h1 className="text-center p-7">HOME</h1>
            </main>
        </div>
    );
}

export default Home;