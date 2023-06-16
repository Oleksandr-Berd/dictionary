import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Dna } from "react-loader-spinner";

import { GlobalStyles } from 'utilities/GlobalStyles';
import darkTheme from 'utilities/darkTheme';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Header from 'components/Header/Header';
import AppBar from 'components/AppBar/AppBar';
import lightTheme from 'utilities/lightTheme';
import Search from 'components/Search/Search';
import { fetchWord } from 'utilities/services';
import ErrorComponent from 'components/Error/Error';
import WordComponent from 'components/Word/Word';

const App: React.FC = () => {
  const [font, setFont] = useState('sansSerif');
  const [checked, setChecked] = useState<boolean>(true);
  const [finalQuery, setFinalQuery] = useState<string>('hello');
  const [data, setData] = useState<[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSelect = (eventKey: string) => {
    setFont(eventKey);
  };

  const handleToggle = () => {
    setChecked(!checked);
  };

  let fontLabel;

  switch (font) {
    case 'sansSerif':
      fontLabel = 'Sans Serif';
      break;
    case 'serif':
      fontLabel = 'Serif';
      break;
    case 'mono':
      fontLabel = 'Mono';
      break;
    default:
      fontLabel = 'Sans Serif';
  }

  const handleFinalQuery = (query: string) => {
    setFinalQuery(query);
  };

  

  useEffect(() => {
    
    setIsLoading(true)
    const fetchAsync = async () => {
      setIsLoading(true)
      const result = await fetchWord(finalQuery);
        if (typeof result === "string") {
          setError(result)
          setData(null)
          setIsLoading(false)
        } else {
          setData(result)
          setError(null)
          setIsLoading(false)
        }
    };

    fetchAsync();
    
  }, [finalQuery])

  

console.log(isLoading);


  return (
    <div className="App">    
      <ThemeProvider theme={checked ? darkTheme : lightTheme}>
        <GlobalStyles font={fontLabel} />

        <SharedLayout>
          <Header>
            <AppBar
              handleSelect={handleSelect}
              fontLabel={fontLabel}
              checked={checked}
              handleToggle={handleToggle}
            />
          </Header>
          <Search submit={handleFinalQuery} />
          {isLoading ? <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          /> : null}
          {data ? <WordComponent data={data} /> : <ErrorComponent error={error} />}
        </SharedLayout>

      </ThemeProvider>
    </div>
  );
};

export default App;
