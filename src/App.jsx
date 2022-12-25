import "./App.css";
import Header from "./components/header/header";
import Loading from "./components/loading/loading";
import styled from "styled-components";
import react, { useState, useEffect } from "react";

const StyledBackground = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <>
      <StyledBackground>
        <Loading />
      </StyledBackground>
    </>
  ) : (
    <Header />
  );
};

export default App;
