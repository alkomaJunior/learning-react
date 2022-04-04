// Importing libraries
import React from "react";

// Importing component
import Sidebar from "../../components/layouts/Sidebar";


// Component implementation
function About() {
    return (
        <div>
            <Sidebar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                <h1 className="text-center p-7">ABOUT</h1>
            </main>
        </div>
    );
}

export default About;