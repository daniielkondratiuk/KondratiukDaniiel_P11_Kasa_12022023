import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../../img/Logo.svg'
import './Navbar.css'
import {WELCOME, ABOUT} from '../../constants/routes'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={Logo} alt="logo"/>
            <ul className="navbar__links">
                <li className="navbar__link" style={{marginRight: '20px'}}>
                    <NavLink to={WELCOME}>Accueil</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink to={ABOUT}>A Propos</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
