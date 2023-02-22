import React, {Fragment} from 'react'
import CardList from '../components/Card/CardList/CardsList'
import Banner from '../components/Banner/Banner'
import BannerBackground from '../img/Banner.svg'

const Welcome = ({data}) => {
    return (
        <Fragment>
            <Banner background={BannerBackground} text="Chez vous, partout et ailleurs"/>
            <CardList cards={data}/>
        </Fragment>
    )
}

export default Welcome
