import React from 'react'
import Home from './Home'
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import styledComponents from 'styled-components';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
function Pages() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cuisine/:type' element={<Cuisine/>}></Route>
        <Route path='/searched/:search' element={<Searched/>}></Route>
        <Route path='/recipe/:id' element={<Recipe/>}></Route>
      </Routes>

  )
}


export default Pages