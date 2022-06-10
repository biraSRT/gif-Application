import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";

const TrendingGif = () => {
  const { gif } = useContext(AppContext);
  console.log(gif);

  return ((gif !== null) ? <Container>
     {gif.map((giff) => {
         return (
             <Wrapper>
                 <iframe src={giff.embed_url} frameBorder="0" ></iframe>
             </Wrapper>
            
         )
     })}
  </Container> :
  <div>Loading...</div>
    
  );
};

const Container = styled.div`
    display: flex;
    background-color: inherit;
    flex-wrap: wrap;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    background-color: inherit;
    flex-direction: column;
    height: 10rem;
    width: 10rem;
`;



export default TrendingGif;
