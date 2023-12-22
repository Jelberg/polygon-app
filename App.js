import React from 'react';
import Providers from './src/Providers';
import { Text } from './src/components/theme/Text';
import Avatar from './src/components/Avatar';
import Button from './src/components/Button';
import PlusIcon from './src/assets/icons/PlusIcon';
import ArrowRigthIcon from './src/assets/icons/ArrowRigthIcon';

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
      <Text >Default Body</Text>
      <Avatar />
      <Button iconLeft={<PlusIcon />} title='Deposit' />
      <Button iconRigth={<ArrowRigthIcon />} title='All' style={{backgroundColor: 'transparent'}}/>
      
    </Providers>
  );
}
