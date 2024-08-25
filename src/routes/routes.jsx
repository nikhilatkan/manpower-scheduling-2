import React from 'react'
import Home from '../pages/Home/Home';
import { Route } from 'react-router-dom';


function Routes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Routes;
