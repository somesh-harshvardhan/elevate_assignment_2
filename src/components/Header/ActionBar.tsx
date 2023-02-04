import React, { useEffect } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import CategoriesFilter from "./CategoriesFilter";
import Search from "./Search";
import SelectLanguage from "./SelectLanguage";
import {BsCartFill} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa'
const Container = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width : 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 30px;
  }
`;
const Cart = styled.div`
    color: white;
`

const ActionBar = () => {
    
  return (
    <Container>
      <GiHamburgerMenu size={40} cursor={"pointer"} />
      <CategoriesFilter />
      <Search/>
      <SelectLanguage/>
      <div style={{display : 'flex',alignItems : 'center',justifyContent : 'space-between',flex : 1}}>
      <Cart><BsCartFill color="white"/> CART</Cart>
      <Cart><FaUser color="white"/> CART</Cart>
      </div>
    </Container>
  );
};

export default ActionBar;
