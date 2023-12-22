import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from '../components/theme/Text';
import { StyledContainer } from '../components/theme/StyledComponent';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import PlusIcon from '../assets/icons/PlusIcon';
import ArrowRigthIcon from '../assets/icons/ArrowRigthIcon';
import ItemList from '../components/ItemList';
import TextIcon from '../components/TextIcon';
import ArrowTradeUpIcon from '../assets/icons/ArrowTradeUpIcon';
import { ThemeColors } from '../components/theme/ThemeColors';
import QuestionIcon from '../assets/icons/QuestionIcon';
import SecretIcon from '../assets/icons/SecretIcon';

const HomePage: React.FC = () => {
  return (
    <StyledContainer>
   <ScrollView>
    <Text theme={{variant:'largeTitle'}}>Elements of Polygon App</Text>
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
      <TextIcon iconLeft={<ArrowTradeUpIcon color={ThemeColors.green}/>} text='+$0.42 (0.48%)' variant='numgreen' />
      <TextIcon iconRigth={<SecretIcon />} text='$12,535.00' variant='largeTitle' />
      <ItemList />
      </ScrollView>
    </StyledContainer>
  );
}
export default HomePage
