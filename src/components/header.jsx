import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  // background-color: black;
  width: 100vw;
  height: 5vh;
  display: flex;
  color: white;
  border-bottom: 1px solid white;
  justify-content: space-aroud;

  @media (max-width: 768px) {
    height: 25vh;
    justify-content: center;
    align-items: center;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
  }
`;

const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;

  @media screen and (max-width: 768px) {
    // display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const StyledMenuList = styled.li`
  padding: 8px 12px;
  &:hover {
    background: #d49466;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const StyledIcons = styled.ul`
  list-style: none;
  color: gray;
  display: flex;
  padding-left: 0px;

  @media screen and (max-width: 768px) {
    display: none;
    justify-content: center;
    width: 100%;
  }
`;

const StyledIcon = styled.li`
  padding: 8px 12px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Navbar>
        <StyledMenu>
          <StyledMenuList>
            <Link to="/">Home</Link>
          </StyledMenuList>
          <StyledMenuList>
            <Link to="/gallery">Gallery</Link>
          </StyledMenuList>
          <StyledMenuList>
            <Link to="about">About</Link>
          </StyledMenuList>
        </StyledMenu>

        <StyledIcons>
          <StyledIcon>
            <a href="https://www.instagram.com/utr_hwaryeo/">
              <i className="fab fa-instagram" />
            </a>
          </StyledIcon>
          <StyledIcon>
            <a href="https://www.youtube.com/@_ultrahwaryeo2569/">
              <i className="fab fa-youtube" />
            </a>
          </StyledIcon>
        </StyledIcons>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
