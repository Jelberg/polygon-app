// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Providers from './src/Providers';
import ArrowTradeDownIcon from './src/assets/icons/ArrowTradeDownIcon';
import { Text } from './src/components/theme/Text';

export default function App() {
  return (
    <Providers>
      <Text theme={{variant:'caption'}}>Caption</Text>
      <Text theme={{variant:'numred'}}>numred</Text>
      <Text theme={{variant:'numgreen'}}>numgreen</Text>
      <Text theme={{variant:'caption2'}}>Caption2</Text>
      <Text theme={{variant:'title'}}>TITLE</Text>
      <Text theme={{variant:'body'}}>Body</Text>
      <Text theme={{variant:'h3'}}>H3</Text>
      <Text theme={{variant:'h2'}}>H2</Text>
      <Text theme={{variant:'h1'}}>H1</Text>
      <Text theme={{variant:'largeTitle'}}>Large Title</Text>
      <Text >Large Title</Text>
      <StatusBar style="auto" />
    </Providers>
  );
}
