import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  color: white;
  text-align: center;
  font-size: 8rem;
`;

const Notfound = () => {
  return (
    <>
      <StyledText>
        404
        <br /> Not Found Error...
      </StyledText>
    </>
  );
};

export default Notfound;
