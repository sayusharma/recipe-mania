import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styledComponents from 'styled-components';

function Cuisine() {
  let params = useParams();
  const[cuisine,setCuisine] = useState([]);
  const getCuisine = async (name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=572e2ae5875f4afdb3b1646abd5a4576&number=9&cuisine=${name.type}`);
    const recipes = await data.json();
    console.log(recipes);
    setCuisine(recipes.results);
  };
  useEffect(()=>{
    getCuisine(params);
  },[params.type]);
  return (
   <Grid>
     {cuisine.map((item)=>{
       return(
         <Card key={item.div}>
           <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
           </Link>
         </Card>
       );
     })};
   </Grid>
  );
}

const Grid = styledComponents.div`
  display:grid;
  margin-top:2rem;
  justify-content:center;
  grid-template-columns: 20rem 20rem 20rem;
  grid-gap:3rem;
`;
const Card = styledComponents.div`
  
  border-radius:2rem;
  img{
    width:100%;
    border-radius:2rem;
  }
  h4{
    text-align:center;
    padding:0.5rem;
  }
`;

export default Cuisine