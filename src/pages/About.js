import React, {Fragment} from 'react'
import Banner from '../components/Banner/Banner'
import BannerAbout from '../img/BannerAbout.jpg'
import Dropdown from '../components/Dropdown/Dropdown'
import dataAbout from '../data/data-about.json'

const About = () => {
    return (
        <Fragment>
            <Banner background={BannerAbout} customClass="about"/>
            {dataAbout.map(data => (<Dropdown key={data.title} {...data}/>))}
        </Fragment>
    )
}

export default About
