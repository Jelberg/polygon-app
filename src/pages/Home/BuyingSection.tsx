import React from "react"
import styled from "styled-components/native"
import TextIcon from "../../components/TextIcon"
import { Text } from "../../components/theme/Text"
import SecretIcon from "../../assets/icons/SecretIcon"
import ArrowTradeUpIcon from "../../assets/icons/ArrowTradeUpIcon"
import QuestionIcon from "../../assets/icons/QuestionIcon"
import { ThemeColors } from "../../components/theme/ThemeColors"
import Button from "../../components/Button"
import PlusIcon from "../../assets/icons/PlusIcon"

export const StyledContainer = styled.View`
    flex-direction: row;
    padding-horizontal: 20px;
    padding-vertical: 20px;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const StyledView = styled.View`
    flex-direction: column;
    align-items: flex-start;
`

const BuyingSection: React.FC = () => {
 return <StyledContainer>
    <StyledView>
    <TextIcon iconRigth={<QuestionIcon color={ThemeColors.ligthGray}/>} text='BUYING POWER' variant='caption' />
    <Text theme={{variant:'h2'}}>$840.50</Text> 
    </StyledView>
    <StyledView>
    <Button onPress={()=> true} iconLeft={<PlusIcon />} title='Deposit' />
    </StyledView>
 </StyledContainer>
}

export default BuyingSection