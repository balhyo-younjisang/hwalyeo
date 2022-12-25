import styled, { keyframes } from "styled-components";
import logo from "../../imgs/hwalyeo_logo.svg";

const FadeInLogoAnimaion = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  animation: ${FadeInLogoAnimaion} 3s;
`;

const Loading = (props) => {
  return (
    <ImageContainer>
      <img src={logo} alt="Logo" />
    </ImageContainer>
  );
};

export default Loading;
