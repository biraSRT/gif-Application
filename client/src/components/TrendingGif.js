import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";

const TrendingGif = () => {
  const { gif } = useContext(AppContext);
  console.log(gif);

  return ((gif) ? <Container>
     {gif.map((giff) => {
         return (
             <Wrapper>
                 <iframe src={giff.embed_url} width="300rem" height="300rem" frameBorder="0" ></iframe>
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
  height: 20rem;
  width: 20rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  background: gray;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  color: white;
  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;

  &:hover {
      transform: scale(1.1);
    }  

  iframe {
    object-fit: fill;
  }
`;



export default TrendingGif;
