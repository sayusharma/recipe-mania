import React from 'react';
import Search from '../components/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styledComponents from 'styled-components';
import { useParams } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function Searched() {
    const[searched,setSearched] = useState([]);
    let params = useParams();
    useEffect(()=>{
        getSearched(params);
    },[params.search]);
    const getSearched = async(name)=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${name.search}&apiKey=572e2ae5875f4afdb3b1646abd5a4576`);
        const data = await api.json();
        console.log(data);
        setSearched(data.results); 
    }
    
  return (
    <Grid>
        {searched?.map((item)=>{
            return(
                <Card key={item.id}>
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
export default Searched