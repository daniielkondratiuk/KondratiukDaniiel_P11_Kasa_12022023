import React from 'react'
import './Banner.css'

const Banner = ({background, text}) => {
    return (
        <div className="banner" style={{background: `url(${background})`}}>
            <div className="banner__opacity-filter"></div>
            {text && <span className="banner__title">{text}</span>}
        </div>
    )
}

export default Banner
