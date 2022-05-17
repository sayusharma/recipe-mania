
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChopsticks} from 'react-icons/gi';
import styledComponents from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react'

function Category() {
  return (
    <div>
        <List>
            <Alink to={'/cuisine/Italian'}>
                <ListItem>
                    <FaPizzaSlice></FaPizzaSlice> 
                    <h4>Italian</h4>
                </ListItem>
            </Alink>
            <Alink to={'/cuisine/American'}>
                <ListItem>
                    <FaHamburger></FaHamburger> 
                    <h4>American</h4>
                </ListItem>
            </Alink>
            <Alink to={'/cuisine/Thai'}>
                <ListItem>
                    <GiNoodles></GiNoodles> 
                    <h4>Thai</h4>
                </ListItem>
            </Alink>
            <Alink to={'/cuisine/Japanese'}>
                <ListItem>
                    <GiChopsticks></GiChopsticks> 
                    <h4>Japanese</h4>
                </ListItem>
            </Alink>
        </List>
    </div>
   
  )
}
const List = styledComponents.div`
    display:flex;
    justify-content:center;
`;
const ListItem = styledComponents.div`
    border-radius:2rem;
    width:60px;
    padding:0.6rem 0;
    height:60px;
    vertical-align:center;
    text-align:center;
    margin:0rem 0.4rem;
    background: #cecece;
`;
const Alink = styledComponents(NavLink)`
    &.active{
        div{
            background: #ffcbcb !important;
        }
    }
`;

export default Category