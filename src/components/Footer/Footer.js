import React from 'react'
import FooterLogo from '../../img/FooterLogo.svg'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer__logo" src={FooterLogo} alt="Footer Logo"/>
            <div className="footer__text">© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer
