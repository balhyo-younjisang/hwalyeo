import React from "react";
import styled from "styled-components";
import MainImage from "../imgs/hwalyeo_logo.svg";

const StyledImageContainer = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  padding-top: 6em;
  display: grid;
  justify-items: center;
  position: relative;
`;

const StyledImage = styled.img`
  padding-top: 3em;
  position: absolute;
  obeject-fit: cover;
  image-rendering: -webkit-optimize-contrast;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const Home = () => {
  return (
    <StyledImageContainer>
      <StyledImage src={MainImage} alt="main" />
    </StyledImageContainer>
  );
};

export default Home;
