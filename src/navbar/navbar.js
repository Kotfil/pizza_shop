import React from 'react';
import styled from "styled-components";
import {pizzaRed} from "../styles/colors";
import {Title} from "../styles/title";

const NavbarStyled = styled.div`
  background: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`

export function Navbar() {

    return(
        <NavbarStyled>
            <Logo>
                SliceLine 🍕
            </Logo>
        </NavbarStyled>
    )
}