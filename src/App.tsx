import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'utilities/GlobalStyles';
import darkTheme from 'utilities/darkTheme';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import Header from 'components/Header/Header';
import AppBar from 'components/AppBar/AppBar';
import lightTheme from 'utilities/lightTheme';



const App: React.FC = () => {
  const [font, setFont] = useState("sansSerif");
  const [checked, setChecked] = useState(true);

  const handleSelect = (eventKey: string) => {
    setFont(eventKey)
  }

  const handleToggle = () => {
    setChecked(!checked)
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

  return (
    <div className="App">
      <ThemeProvider theme={checked ? darkTheme : lightTheme}>
        <GlobalStyles font={fontLabel} />
        <SharedLayout>
          <Header>
            <AppBar handleSelect={handleSelect} fontLabel={fontLabel} checked={checked} handleToggle={handleToggle } />
          </Header>
          This is my App!
        </SharedLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
