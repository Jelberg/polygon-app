import React, {ReactNode} from 'react';
import {ThemeProvider} from './context/ThemeContext';
import { NavigationContainer } from "@react-navigation/native";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

interface IProviders {
  children: ReactNode;
}

const queryClient = new QueryClient()
const Providers: React.FC<IProviders> = ({children}) => {
  

  return (
    <NavigationContainer>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      {children}
    </ThemeProvider>
    </QueryClientProvider>
    </NavigationContainer>
  );
};

export default Providers;
