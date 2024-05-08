import React from 'react';
import styled from "styled-components";
import {foods} from "../data/food-data";
import {Food, FoodGridStyled, FoodLabel} from "./food-grid";

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0 400px 50px 20px
`

const Menu = () => {
    return <MenuStyled>
        <h1>menu</h1>
        <FoodGridStyled>
        {foods.map(food => (
            <Food img={food.img}>
                <FoodLabel>
                {food.name}
                </FoodLabel>
            </Food>
            ))}
        </FoodGridStyled>
    </MenuStyled>};

export default Menu;