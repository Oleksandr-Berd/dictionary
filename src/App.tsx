import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'utilities/GlobalStyles';
import darkTheme from 'utilities/darkTheme';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import Header from 'components/Header/Header';
import AppBar from 'components/AppBar/AppBar';



const App: React.FC = () => {
  const [font, setFont] = useState("sansSerif")

  const handleSelect = (eventKey: string) => {
    setFont(eventKey)
  }

  let fontLabel

 
    switch (font) {
      case "sansSerif":
        fontLabel = 'Sans Serif'
        break;

      case "serif":
        fontLabel = 'Serif'
        break;
      case "mono":
        fontLabel = 'Mono'
        break;
      default:
        fontLabel = "Sans Serif";
    }
  

  


  console.log(fontLabel);


  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles font={fontLabel} />
        <SharedLayout>
          <Header>
            <AppBar handleSelect={handleSelect} fontLabel={fontLabel} />
          </Header>
          This is my App!
        </SharedLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
