import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from '../components/web/home';

const Unauthrouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default Unauthrouter;