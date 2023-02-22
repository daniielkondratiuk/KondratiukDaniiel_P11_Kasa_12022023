import React, {useState} from 'react'
import './Carousel.css'
import CarouselControllerLeft from '../../img/CarouselControllerLeft.svg'
import CarouselControllerRight from '../../img/CarouselControllerRight.svg'

const Carousel = ({images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const previousImage = () => {
        const index = (currentImageIndex - 1 + images.length) % images.length
        setCurrentImageIndex(index)
    }

    const nextImage = () => {
        const index = (currentImageIndex + 1) % images.length
        setCurrentImageIndex(index)
    }

    return (
        <div className="carousel">
            <span className="carousel__controller carousel__controller-left" onClick={previousImage}>
                <img src={CarouselControllerLeft} alt="Carousel Controller Left"/>
            </span>
            <img className="carousel__img" src={images[currentImageIndex]} alt="carousel images" />
            <span className="carousel__controller carousel__controller-right" onClick={nextImage}>
                <img src={CarouselControllerRight} alt="Carousel Controller Right"/>
            </span>
        </div>
    )
}

export default Carousel
