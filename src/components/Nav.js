import React from 'react';
import "./Nav.scss"
import {NavLink} from "react-router-dom";
import {FaHandHoldingHeart} from "react-icons/fa";


function Nav() {
    return (
        <>
            <div className="nav__left">
                <FaHandHoldingHeart
                    style={{color: "#730ec3", fontSize: "5em"}}
                />
                <div className="nav__logo"> Donatello</div>
            </div>

            <div className="nav__right">
                <ul>
                    <NavLink
                        to='/discover'
                        className="nav__link--item"
                        activeClassName="selected"
                    >
                        <li className="nav__link--text">Discover</li>
                    </NavLink>

                    <NavLink
                        to='/start-project'
                        className="nav__link--item"
                        activeClassName="selected"
                    >
                        <li className="nav__link--text">Start a project</li>
                    </NavLink>

                    <NavLink
                        to='/login'
                        className="nav__link--item"
                        activeClassName="selected"
                    >
                        <li className="nav__link--text">Login</li>
                    </NavLink>

                </ul>
            </div>
        </>

    );

}

export default Nav;
