import React, {ReactNode} from 'react';
import {ThemeProvider} from './context/ThemeContext';
import { NavigationContainer } from "@react-navigation/native";

interface IProviders {
  children: ReactNode;
}

const Providers: React.FC<IProviders> = ({children}) => {

  return (
    <NavigationContainer>
    <ThemeProvider>
      {children}
    </ThemeProvider>
    </NavigationContainer>
  );
};

export default Providers;
