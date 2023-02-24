import React from 'react'
import './Banner.css'

const Banner = ({background, text = '', customClass}) => {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className={`banner banner__${customClass}`} style={backgroundStyle}>
            <div className="banner__opacity-filter"></div>
            {text && <span className="banner__title">{text}</span>}
        </div>
    )
}

export default Banner
