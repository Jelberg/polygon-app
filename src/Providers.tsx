import React, {ReactNode} from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './components/theme/globalStyle';

interface IProviders {
  children: ReactNode;
}

const Providers: React.FC<IProviders> = ({children}) => {
  const isDarkMode = true;
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
