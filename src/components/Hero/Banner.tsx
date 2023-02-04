import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
const Container = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
`;
const SwipeContainer = styled.div`
  width: 80vw;
  height: 100%;
  position: relative;
`;
const SwipeWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
`;
const SwipeSheet = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.5s ease;
`;
const SwipeSlide = styled.div`
  height: 100%;
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-size: 5rem;
    text-align: center;
    color: white;
    max-width: 70%;
  }
  @media screen and (max-width: 768px) {
    h1{
        font-size: 3rem;
    }
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;
const NavigationButton = styled.div<{
  top: number | string;
  left: number | string;
}>`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 9999;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
const BuyNowButton = styled.button`
  padding: 12px 32px;
  background-color: var(--matte-primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  @media screen and (max-width: 768px) {
   font-size: 1.8rem;
  }
  @media screen and (max-width: 500px) {
   font-size: 1.3rem;
  }
`;
const bannerArray = [
  {
    title: "Get start your favirot shopping",
    component: () => <BuyNowButton>Buy Now</BuyNowButton>,
  },
  {
    title: "All your favorite brands under one platform",
    component: () => <BuyNowButton>Buy Now</BuyNowButton>,
  },
  {
    title: "Dont think. Just do it.",
    component: () => <BuyNowButton>Shia LaBeouf</BuyNowButton>,
  },
];
const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (sheetRef.current) {
      const sheetElement = sheetRef.current;
      const { width } = sheetElement.getBoundingClientRect();
      sheetElement.style.transform = `translateX(-${width * activeIndex}px)`;
    }
  }, [sheetRef.current, activeIndex]);
  const handleNext = () => {
    if (bannerArray.length - 1 > activeIndex) {
      setActiveIndex((prev) => prev + 1);
    } else {
      setActiveIndex(0);
    }
  };
  const handleBefore = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else {
      setActiveIndex(bannerArray.length - 1);
    }
  };
  return (
    <Container>
      <SwipeContainer>
        <NavigationButton top={"50%"} left={"0%"} onClick={handleBefore}>
          <MdNavigateBefore size={30} />
        </NavigationButton>
        <NavigationButton top={"50%"} left={"100%"} onClick={handleNext}>
          <MdNavigateNext size={30} />
        </NavigationButton>
        <SwipeWrapper>
          <SwipeSheet ref={sheetRef}>
            {bannerArray.map((item, indx) => (
              <SwipeSlide key={indx}>
                <h1>{item.title}</h1>
                {item.component && <item.component />}
              </SwipeSlide>
            ))}
          </SwipeSheet>
        </SwipeWrapper>
      </SwipeContainer>
    </Container>
  );
};

export default Banner;
