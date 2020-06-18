import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export const NavBar = ({title, icon}) => {
    return (
        <div className="navbar bg-primary">
            <h1>{title}</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            
        </div>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title: 'Med Cabinet'
}

export default NavBar; 
