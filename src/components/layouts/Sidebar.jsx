// Importing libraries
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";

// Importing images
import logoWhite from "../../assets/images/logo-white.png";

// Importing contexts
import { NavigationContext, NavigationData } from "../../utils/context/NavigationContext";

// Styling the logo
const Logo = styled.img`
  height: 30px;
  width: 30px;
`
// Function that sets navigation data
function checkAppropriateNavData(location, setNavData) {
    switch (location.pathname) {
        case '/about':
            setNavData(NavigationData.about);
            break;
        case '/':
            setNavData(NavigationData.booksListShow);
            break;
        default:
            return null;
    }
}

// Sidebar component implementation
function Sidebar() {

    // Defining constant for getting current route path
    const location = useLocation();
    const [navData, setNavData] = useState({});

    useEffect(() => {
        // Call of the navigation set up function
        checkAppropriateNavData(location, setNavData);
    }, [navData]);

    //console.log(navData);

    return (
        <NavigationContext.Provider value={navData}>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"/>
                    <Link className="navbar-brand m-0" to="/">
                        <Logo src={logoWhite} className="navbar-brand-img h-100" alt="main_logo"/>
                        <span className="ms-1 font-weight-bold text-white">BOOKS MANAGER</span>
                    </Link>
                </div>
                <hr className="horizontal light mt-0 mb-2"/>
                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <NavigationContext.Consumer>
                            { (value) => (
                                <li className="nav-item">
                                    <Link to="/" className={ location.pathname === '/' ? "nav-link text-white " + value.active : "nav-link text-white" }>
                                        <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="material-icons opacity-10">collections_bookmark</i>
                                        </div>
                                        <span className="nav-link-text ms-1 font-weight-bolder">Books</span>
                                    </Link>
                                </li>
                            ) }
                        </NavigationContext.Consumer>
                        <NavigationContext.Consumer>
                            { (value) => (
                                <li className="nav-item">
                                    <Link to="/about" className={ location.pathname === '/about' ? "nav-link text-white " + value.active : "nav-link text-white" }>
                                        <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="material-icons opacity-10">info</i>
                                        </div>
                                        <span className="nav-link-text ms-1 font-weight-bolder">About</span>
                                    </Link>
                                </li>
                            ) }
                        </NavigationContext.Consumer>
                    </ul>
                </div>
            </aside>
        </NavigationContext.Provider>
    );
}

// Exporting the component
export default Sidebar;