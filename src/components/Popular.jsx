import {useEffect} from 'react';
import { useState } from 'react';
import { Splide,SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import '@splidejs/react-splide'
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';

function Popular() {
    const[popular,setPopular] = useState([]);
    useEffect(()=>{
      getPopular();
    },[]);
    const getPopular = async()=>{
        const checkStorage = localStorage.getItem("popular");
        console.log(checkStorage);
        if(checkStorage){
          setPopular(JSON.parse(checkStorage));
          console.log(JSON.parse(checkStorage));
        }else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?number=9&apiKey=572e2ae5875f4afdb3b1646abd5a4576`);
          const data = await api.json();
          localStorage.setItem("popular",JSON.stringify(data.recipes));
          console.log(data);
          setPopular(data.recipes); 
        }

    }
    
  return (
    <Wrapper>
      <h3>Popular Recipes</h3>
      <Splide options={{
        perPage:4,
        arrows:false,
        pagination:false,
        drag:'free',
        gap:'3rem'
      }}>
        {popular.map((recipe)=>{
          return(
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/'+recipe.id}>
                  <img src={recipe.image || 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA='} alt={recipe.title}/>
                  <p>{recipe.title}</p>
                  <Gradiant></Gradiant> 
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 3rem 1rem;
`;
const Card =styled.div`
  min-height:15rem;

  overflow:hidden;
  position:relative;
  border-radius:2rem;
  p{
    text-align:center;
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color: white;
    width:100%;
    font-weight:600;
    font-size:1.2rem;
    height:30%;
    display:flex;
    justify-content:center;
  }
  img{
    border-radius:2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;
const Gradiant = styled.div`
  z-index:3;
  position:absolute;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;
export default Popular