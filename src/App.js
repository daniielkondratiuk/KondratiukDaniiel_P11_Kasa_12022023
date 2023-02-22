import './App.css'
import data from './data/data.json'
import * as ROUTES from './constants/routes'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import About from './pages/About'
import Welcome from './pages/Welcome'
import Navbar from './components/Navbar/Navbar'
import CardItem from './components/Card/CardItem/CardItem'
import Footer from './components/Footer/Footer'
import Page404 from './pages/Page404'

function App() {
    return (
        <div className="app">
            <div className="container main">
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route exact path={ROUTES.WELCOME} element={<Welcome data={data}/>}/>
                        <Route exact path={ROUTES.CARD_ITEM} element={<CardItem data={data}/>}/>
                        <Route exact path={ROUTES.ABOUT} element={<About/>}/>
                        <Route path={ROUTES.OTHER} element={<Page404/>}/>
                    </Routes>
                </Router>
            </div>
            <Footer/>
        </div>
    )
}

export default App
