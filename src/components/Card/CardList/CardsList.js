import React from 'react'
import {Link} from 'react-router-dom'
import './CardList.css'


const CardList = ({cards}) => {
    return (
        <div className="cards__list">
            {cards.map(card => (
                <Link
                    className="cards__item"
                    key={card.id}
                    to={`/card/${card.id}`}
                    style={{backgroundImage: `url(${card.cover})`}}
                >
                    <div className="cards__item-opacity-filter"></div>
                    <h3 className="cards__item-title">{card.title}</h3>
                </Link>
            ))}
        </div>
    )
}

export default CardList
