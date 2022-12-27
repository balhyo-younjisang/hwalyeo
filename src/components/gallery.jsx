import React, { useState } from "react";
import styled from "styled-components";
import { First, Second } from "../image";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  overflow: visible;

  @media (max-width: 500px) {
    grid-template-columns: 400px;
  }
`;

const ItemsContainer = styled.div`
  width: 400px;
  height: 400px;
  margin: 30px;

  @media (max-width: 700px) {
    margin: 10px;
    margin-right: 0px;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const Gallery = () => {
  let [src, setSrc] = useState([First, Second]);
  return (
    <Container>
      {src.map((source) => {
        return (
          <ItemsContainer>
            <Image src={source} alt="hwalyeo" />
          </ItemsContainer>
        );
      })}
    </Container>
  );
};

export default Gallery;
