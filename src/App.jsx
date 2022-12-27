import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about.tsx";
import Gallery from "./components/gallery";
import Notfound from "./components/404.tsx";
import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const FadeInLogoAnimaion = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  animation: ${FadeInLogoAnimaion} 3s;
`;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <script
            src="https://kit.fontawesome.com/b17d4fa9e7.js"
            crossorigin="anonymous"
          ></script>
        </Helmet>
        <StyledBackground>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </StyledBackground>
      </BrowserRouter>
    </>
  );
};

export default App;
