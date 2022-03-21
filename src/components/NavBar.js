import React from "react"
import {Link} from 'react-router-dom';
import '../scss/navBar.scss';


function NavBar() {
return (
    <header>
        <nav className="nav-bar">
            <ul className="nav-list">
            <li>
                <Link to={"/"} className="nav-link">Domů</Link>
            </li>
            <li>
                <Link to={"/properties "} className="nav-link">Poptávky</Link>
            </li>
            </ul>
        </nav>
    </header>
)



}

export default NavBar;