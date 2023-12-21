// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Providers from './src/Providers';
import { StyledContainer, StyledText } from './src/components/theme/StyledComponent';
import ArrowTradeDownIcon from './src/assets/icons/ArrowTradeDownIcon';

export default function App() {
  return (
    <Providers>
      <ArrowTradeDownIcon />
      <StyledText>Open up App.js to start working on your app!</StyledText>
      <StatusBar style="auto" />
    </Providers>
  );
}
