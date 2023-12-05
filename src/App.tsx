import { RouterProvider } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { router } from './router';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/loading-screen';
import { auth } from './firebase';

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
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
