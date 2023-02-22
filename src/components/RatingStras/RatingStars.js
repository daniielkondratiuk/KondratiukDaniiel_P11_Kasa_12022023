import React from 'react'
import StarsRed from '../../img/StarRed.svg'
import StarsGray from '../../img/StarGray.svg'
import './RatingStars.css'

const RatingStars = ({rating}) => {
    let stars = []
    for (let i = 0; i < 5; i++) {
        let html = i < rating
            ? <img key={i} className="rating__star" src={StarsRed} alt="rating star"/>
            : <img key={i} className="rating__star" src={StarsGray} alt="rating star"/>
        stars.push(html)
    }
    return (
        <div className="rating__stars">
            {stars}
        </div>
    )
}

export default RatingStars
