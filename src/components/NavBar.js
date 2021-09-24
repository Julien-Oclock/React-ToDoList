import React from 'react';
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return(
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                <NavLink to="/" className="nav-btn"><FaListAlt /></NavLink>
                <NavLink to="/completed" className="nav-btn"><FaCheckSquare /></NavLink>
                <NavLink to="/addTask" className="nav-btn">< FaPlusSquare /></NavLink>
            </div>
            <button className="btn btn-outline-dark bg-light">< FaTrash /></button>
        </footer>
    );    
};

export default NavBar;