import React from "react"
import styled from "styled-components/native"

import ItemList from "../../components/ItemList"
import { Text } from "../../components/theme/Text"
import { ThemeColors } from "../../components/theme/ThemeColors"
import Button from "../../components/Button"
import ArrowRigthIcon from "../../assets/icons/ArrowRigthIcon"
import List from "./List"
import { useNavigation } from "@react-navigation/native"

export const StyledContainer = styled.View`
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-horizontal: 20px;
    padding-vertical: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: ${ThemeColors.gray}
`

export const StyledContainerMessage = styled.View`
    align-items: center;
    flex-wrap: wrap;
    padding-horizontal: 20px;
    padding-vertical: 10px;
    background-color: ${ThemeColors.gray}
`


const Watchlist = () => {
  const navigation = useNavigation()

  const goTo = () => {
    //navigation.navigate("WatchlistScreen")
  }

    return <>
    <StyledContainer>
    <Text theme={{variant:'h1'}}>Watchlist</Text>
    <Button onPress={goTo} iconRigth={<ArrowRigthIcon />} title='All' style={{backgroundColor: 'transparent'}}/>   
    </StyledContainer>    
    <List />

    </>
}

export default Watchlist