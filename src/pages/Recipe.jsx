import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styledComponents from 'styled-components';

function Recipe() {
    const params = useParams();
    const [recipe,setRecipe] = useState([]);
    useEffect(()=>{
        getRecipe(params);
    },[params.id]);
    const getRecipe = async(item)=>{
        // const api = await fetch(`https://api.spoonacular.com/recipes/${item.id}/information?&apiKey=572e2ae5875f4afdb3b1646abd5a4576`);
        // const data = await api.json();
        // setRecipe(data);
    } ;
  return (
    <OuterContainer>
        S<br/>
        S<br/>
        S<br/>
        S<br/>
        S<br/>
    </OuterContainer>
  )
}
const OuterContainer = styledComponents.div`
    background: linear-gradient(30deg,#e2e1e1,#f8f7f7);
    border-radius:2rem;
    margin-top:2rem;
    padding:1rem;
`;

export default Recipe