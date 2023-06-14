import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'utilities/GlobalStyles';
import darkTheme from 'utilities/darkTheme';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import Header from 'components/Header/Header';



const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={darkTheme}>
        <SharedLayout>
          <Header/>
        </SharedLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
