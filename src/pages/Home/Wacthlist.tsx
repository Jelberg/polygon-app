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
    flex-wrap: wrap;
    padding-horizontal: 20px;
    padding-vertical: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: ${ThemeColors.gray}
`

const Watchlist: React.FC = () => {
 return <>
  <StyledContainer>
  <Text theme={{variant:'h1'}}>Watchlist</Text>
  <Button iconRigth={<ArrowRigthIcon />} title='All' style={{backgroundColor: 'transparent'}}/>   
  </StyledContainer>
   
   <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
 </>
}

export default Watchlist