import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavBar = ({title, icon}) => {
    return (
        <div className="navbar bg-primary">
           <h1>{title}</h1> <i className="fas fa-cannabis"></i>
            <img />
            <ul>
                <li>
                    <NavLink to="https://pt-med-cabinet-7.github.io/Marketing/about.html">Home</NavLink>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/Front-End">Sign-Up</Link>
                </li>

                <li>
                    <Link to="/strains">Strains</Link>
                </li>

                

            </ul>
            
        </div>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

NavBar.defaultProps = {
    title: 'WeedGotcha',
    icon: 'fas fa-cannabis'
}

export default NavBar; 
