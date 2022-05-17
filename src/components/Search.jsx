import React from 'react';
import styledComponents from 'styled-components';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
  const[input,setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e)=>{
      e.preventDefault();
      navigate('/searched/' + input)
  }
  return (
    <FormS onSubmit={submitHandler}>
        <FaSearch/>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
    </FormS>
  )

}
const FormS = styledComponents.form`
    display:flex;
    margin:1rem 0;
    justify-content:center;
    position: relative;
    width:100%;
    input{
        border:none;
        background:linear-gradient(35deg,#ebebeb, #dedede);
        border:none;
        padding:1rem 3rem;
        color: #000000;
        outline:none;
        border-radius:1rem;
        width:400px;
        font-size:1rem;
        font-weight:600;

    }
    svg{
        position:absolute;
        top:50%;
        left:35%;
        transform: translate(75%,-50%);
        color: #000000;
    }
`;

export default Search