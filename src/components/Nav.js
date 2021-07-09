import React from 'react';
import "./Nav.scss"
import {NavLink} from "react-router-dom";
import {FaHandHoldingHeart} from "react-icons/fa";


function Nav() {
    return (
        <>
            <div className="navbar">

                <div className="nav__logo"> "
                    <FaHandHoldingHeart
                    style={{color: "#730ec3", fontSize: "2.5em"}}
                    className="nav__logo--icon"
                    />

                    Donatello</div>

                <ul className="nav__links">
                    <NavLink
                        to='/discover'
                        activeClassName="selected"
                    >
                        <li className="nav__item">Discover</li>
                    </NavLink>

                    <NavLink
                        to='/start-project'
                        activeClassName="selected"
                    >
                        <li className="nav__item">Start a project</li>
                    </NavLink>

                    <NavLink
                        to='/login'
                        activeClassName="selected"
                    >
                        <li className="nav__item">Login</li>
                    </NavLink>
                </ul>
            </div>


        </>

    );

}

export default Nav;
