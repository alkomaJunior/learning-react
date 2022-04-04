// Importing libraries
import React from "react";
import { Link } from "react-router-dom";


// Component implementation
function Error404() {
    return (
       <div className="text-center p-7">
           <h1 className="text-dark">OOPS... PAGE NOT FOUND</h1>
           <Link to="/"><button className="btn btn-outline-primary">Back to previous page...</button></Link>
       </div>
    );
}

export default Error404;