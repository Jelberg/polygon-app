import React, { useCallback, useState } from "react"
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

const Watchlist: React.FC = () => {
  const navigation = useNavigation()

  const goTo = () => {
    console.log("Estoy aquiiiii")
    navigation.navigate("watchlist" as never)
  }

    return <>
    <StyledContainer>
    <Text theme={{variant:'h1'}}>Watchlist</Text>
    <Button onPress={goTo} iconRigth={<ArrowRigthIcon />} title='All' style={{backgroundColor: 'transparent'}}/>   
    </StyledContainer>    
    <List max_data={4}/>

    </>
}

export default Watchlist