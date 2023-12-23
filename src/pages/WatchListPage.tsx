import React, { useCallback, useState } from "react"
import { ThemeColors } from "../components/theme/ThemeColors"
import List from "./Home/List"
import styled from "styled-components/native"

export const StyledContainer = styled.View`
    flex: 1 ;
    padding-vertical: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: ${ThemeColors.gray}
`

const WatchlistPage: React.FC = () => {
   return <StyledContainer>
      <List /></StyledContainer>
 }

export default WatchlistPage