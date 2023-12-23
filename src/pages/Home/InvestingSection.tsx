import React from "react"
import styled from "styled-components/native"
import TextIcon from "../../components/TextIcon"
import { Text } from "../../components/theme/Text"
import SecretIcon from "../../assets/icons/SecretIcon"
import ArrowTradeUpIcon from "../../assets/icons/ArrowTradeUpIcon"
import QuestionIcon from "../../assets/icons/QuestionIcon"
import { ThemeColors } from "../../components/theme/ThemeColors"

export const StyledView = styled.View`
    padding-horizontal: 20px;
    padding-vertical: 30px;
    margin-top: 30px;
    flex-direction: column;
    align-items: flex-start;
    border-bottom-width: 0.5px;
    border-color: ${ThemeColors.gray}
`

const InvestingSection: React.FC = () => {
 return <StyledView>
 <Text theme={{variant:'title'}}>TOTAL INVESTING</Text>
 <TextIcon iconRigth={<SecretIcon color={ThemeColors.ligthGray}/>} text='$12,535.00' variant='largeTitle' />
 <TextIcon iconLeft={<ArrowTradeUpIcon color={ThemeColors.green}/>} iconRigth={<QuestionIcon color={ThemeColors.ligthGray}/>} text='+$0.42 (0.48%)' variant='numgreen' />
 </StyledView>
}

export default InvestingSection