import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";


//components
import Main from "./components/Main";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Routes>

          <Route path="/" element={<Main />} />

        </Routes>
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.div`

`;

export default App;
