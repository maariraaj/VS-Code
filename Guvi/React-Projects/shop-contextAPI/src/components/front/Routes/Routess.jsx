import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Products from '../Products/Products';

function Routess(){
    return (
        <div>
            <Routes>
                <Route path='/' exact>
                    <Products />
                </Route>
            </Routes>
        </div>
      )
}


export default Routes