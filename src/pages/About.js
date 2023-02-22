import React, {Fragment} from 'react'
import Banner from '../components/Banner/Banner'
import BannerAbout from '../img/BannerAbout.jpg'
import Dropdown from '../components/Dropdown/Dropdown'
import dataAbout from '../data/data-about.json'

const About = () => {
    return (
        <Fragment>
            <Banner background={BannerAbout}/>
            {dataAbout.map(data => (<Dropdown {...data}/>))}
        </Fragment>
    )
}

export default About
