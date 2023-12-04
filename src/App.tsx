import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Wrapper = styled.div`
  height: 100vh;
`;

// basic color #A08CDD
const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
body {
  background: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

function App() {
  
  return (
    <Wrapper>
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
