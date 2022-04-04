// Importing libraries
import React from "react";

// Defining navigation data
export const NavigationData = {
    booksListShow: {
        active: "active bg-gradient-primary",
        nav: "Books Manager",
        nav1: "Books",
        title: "Books List"
    },
    booksCreateUpdate: {
        active: "active bg-gradient-primary",
        nav: "Books Manager",
        nav1: "Books",
        nav2: "Create a book",
        nav3: "Update a book",
        title1: "Create a book",
        title2: "Update a book"
    },
    about: {
        active: "active bg-gradient-primary",
        nav: "Books Manager",
        nav1: "About",
        title: "About"
    }
}

// Initialization of the context
export const NavigationContext = React.createContext(NavigationData.booksHome);