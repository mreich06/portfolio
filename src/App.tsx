import React from 'react';
import './App.css';
import styled from 'styled-components';

const StyledContainer = styled.div`
  text-align: center;
`;
function App() {
  return (
    <StyledContainer>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </StyledContainer>
  );
}

export default App;
