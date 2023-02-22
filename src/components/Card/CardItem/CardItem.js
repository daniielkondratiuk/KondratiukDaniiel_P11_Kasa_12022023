import React from 'react'
import {useParams, Navigate} from 'react-router-dom'
import Carousel from '../../Carusel/Carousel'
import './CardItem.css'
import Tags from '../../Tag/Tags'
import RatingStars from '../../RatingStras/RatingStars'
import Dropdown from '../../Dropdown/Dropdown'

const CardItem = ({data}) => {
    let {idx} = useParams()
    const [card] = data.filter(({id}) => id === idx)
    if (!card) {
        return <Navigate to='/not-found'/>
    }
    return (
        <div className="card__item">
            <Carousel images={card.pictures}/>
            <div className="card__head">
                <div className="card__info-left">
                    <span className="card__title">{card.title}</span>
                    <span className="card__location">{card.location}</span>
                    <Tags tags={card.tags}/>
                </div>
                <div className="card__info-right">
                    <div className="card__host">
                        <span className="card__host-name">{card.host.name}</span>
                        <img className="card__host-avatar" src={card.host.picture} alt={`avatar ${card.host.name}`}/>
                    </div>
                    <RatingStars rating={card.rating}/>
                </div>
            </div>
            <div className="card__dropdown">
                <Dropdown title={'Description'} content={card.description} opened={true}/>
                <Dropdown title={'Équipements'} content={card.equipments} opened={true}/>
            </div>
        </div>
    )
}

export default CardItem
