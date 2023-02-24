import React from 'react'
import {Link} from 'react-router-dom'
import {WELCOME} from '../../constants/routes'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__code">404</div>
            <div className="not-found__description">Oups! La page que <span className="not-found__mobile-brake"></span> vous demandez n'existe pas.</div>
            <Link className="not-found__link" to={WELCOME}>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NotFound
