import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  ArrowTradeDownIcon  from './src/assets/icons/ArrowTradeDownIcon'

export default function App() {
  return (
    <View style={styles.container}>
      <ArrowTradeDownIcon />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*
import {View, Text} from 'react-native';
import Providers from './src/Providers';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <View>
      <Text>Holaaa</Text>
    </View>
  );
}*/