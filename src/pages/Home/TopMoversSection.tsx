import React from "react"
import styled from "styled-components/native"
import ItemList from "../../components/ItemList"
import { Text } from "../../components/theme/Text"
import { ThemeColors } from "../../components/theme/ThemeColors"
import Button from "../../components/Button"
import ArrowRigthIcon from "../../assets/icons/ArrowRigthIcon"

export const StyledContainer = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: 20px;
    padding-vertical: 8px;
`


const TopMoversSection: React.FC = () => {
 return <>
  <StyledContainer>
    <Text theme={{variant:'h2'}}>Top Movers</Text>
    <Button onPress={()=>(true)}  iconRigth={<ArrowRigthIcon />} title='All' style={{backgroundColor: 'transparent'}}/>
  </StyledContainer>
  <StyledContainer>
    <Button onPress={()=>(true)}  title='Tranding' />
    <Button onPress={()=>(true)} title='Top Gainers' style={{backgroundColor: 'transparent'}}/>
    <Button onPress={()=>(true)}  title='Top Losers' style={{backgroundColor: 'transparent'}}/>
  </StyledContainer>
 </> 
}

export default TopMoversSection