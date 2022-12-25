import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: black;
  width: 100%;
  height: 10vh;
  display: flex;
  color: white;
`;

const Header = () => {
  return <StyledHeader>This is Header</StyledHeader>;
};

export default Header;
