import Veggies from "../components/Veggies";
import Popular from "../components/Popular";
import styledComponents from "styled-components";
import React from 'react'

function Home() {
  return (
    <div>
        <Veggies/>
        <Popular/>
    </div>
  )
}

export default Home