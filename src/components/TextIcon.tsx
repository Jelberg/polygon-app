import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Text } from "./theme/Text";


interface ITextIcon {
    iconRigth?: ReactElement;
    iconLeft?: ReactElement;
    text: string,
    variant?: string
}


export const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


const TextIcon: React.FC<ITextIcon> = ({iconLeft, iconRigth, text='Lorem ipsum', variant}) => {

    return <StyledView>
        {iconLeft && <View style={{marginRight:8}}>{iconLeft}</View> }
        <Text theme={{variant:variant}} >{text}</Text>
        {iconRigth && <View style={{marginLeft:8}}>{iconRigth}</View>}
    </StyledView>
}

export default TextIcon