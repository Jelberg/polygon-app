import React from 'react';
import { StatusBar } from 'react-native';
import Providers from './src/Providers';
import Navigation from './src/navigation/Navigation';
import { ThemeColors } from './src/components/theme/ThemeColors';
import { StyledContainer } from './src/components/theme/StyledComponent';


export default function App() {
  return (
    <Providers>
      <StatusBar backgroundColor={ThemeColors.darkGray} barStyle="ligth-content" />
      <Navigation />
    </Providers>
  );
}
