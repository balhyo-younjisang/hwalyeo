import React from "react";
import styled from "styled-components";
import AboutImage from "../imgs/hwalyeo_about.jpg";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  color: white;

  @media (max-width: 1200px) {
    display: grid;
  }
`;

const StyledImageContainer = styled.div`
  height: 100vh;
  width: 50vw;
  position: static;
  margin-left: 8em;

  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
  }
`;

const StyledImage = styled.img`
  height: 100vh;
  width: 30vw;
  obeject-fit: cover;
  border-radius: 3px;
  margin: 6px;

  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    margin: 0px;
  }
`;

const StyledTitle = styled.p`
  font-size: 5em;
  font-weight: bold;
  text-align: center;
`;

const StyledExplainContainer = styled.div`
  width: 70vw;

  @media (max-width: 1200px) {
    width: 100vw;
    background: black;
  }
`;

const StyledList = styled.ul`
  text-align: center;
  list-style: none;
`;

const StyledListItem = styled.li`
  padding: 10px 12px;
`;

const About: React.FC = () => {
  return (
    <>
      <StyledContainer>
        <StyledImageContainer>
          <StyledImage src={AboutImage} alt="About" />
        </StyledImageContainer>
        <StyledExplainContainer>
          <StyledTitle>About Us</StyledTitle>
          <StyledList>
            <StyledListItem>LoremIpsum</StyledListItem>
            <StyledListItem>LoremIpsum</StyledListItem>
            <StyledListItem>LoremIpsum</StyledListItem>
            <StyledListItem>LoremIpsum</StyledListItem>
            <StyledListItem>LoremIpsum</StyledListItem>
            <StyledListItem>LoremIpsum</StyledListItem>
          </StyledList>
        </StyledExplainContainer>
      </StyledContainer>
    </>
  );
};

export default About;
