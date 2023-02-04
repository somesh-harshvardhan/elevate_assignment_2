import { useCaraouselsProduct } from "@/src/context/CaraouselContext";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Banner from "./Banner";

const Container = styled.div`
  margin: auto auto;
  position: relative;
  box-shadow:inset 0 -300px 200px -200px rgba(0,0,0,.6);
  .entry-thumb {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
  }
  /* background-color: rgb(245,140,0,0.3); */
`;

const Hero = () => {
  const caraousels = useCaraouselsProduct();
  return (
    <Container>
      <img
        width="100%"
        height="100%"
        className="entry-thumb"
        src="https://cordmagazine.com/wp-content/uploads/2017/07/Top-10-Best-Selling-Clothing-Brands-In-The-World-sajt.jpg"
        alt=""
      ></img>
      <Header />
      <Banner/>
    </Container>
  );
};

export default Hero;
