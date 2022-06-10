import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import TrendingGif from "./TrendingGif";

const Main = () => {
  const { gif } = useContext(AppContext);
  console.log(gif);

  return (
    <Container>
      <Top>
        <Lo>Gif</Lo>
        <Go>Search</Go>
      </Top>

      <TrendingGif/>

    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  height: 120px;
  background-color: #121212;
  display: flex;
  P {
    font-size: 2.5rem;
  }
`;

const Lo = styled.p`
  color: white;
`;

const Go = styled.p`
  color: green;
`;

const SpotifyLogo = styled.div`
  display: flex;
`;

export default Main;
