import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { ThemeColors } from "./theme/ThemeColors";
import { Text } from "./theme/Text";
import { StyleProp, ViewStyle } from "react-native";

interface IButton {
    iconRigth?: ReactElement;
    iconLeft?: ReactElement;
    title: string,
    onPress: () => void,
    style?: StyleProp<ViewStyle>,
}

export const StyledTouchableOpacity = styled.TouchableOpacity`
padding-horizontal: 10px;
padding-vertical: 10px;
border-radius: 30px;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: ${ThemeColors.gray}
`


const Button: React.FC<IButton> = ({iconRigth, iconLeft, title='Button Example', onPress, style, ...props}) => {


    const handleOnPress = () => {
        onPress()
    }

    return (<StyledTouchableOpacity onPress={ handleOnPress } style={style}>
        {iconLeft}
            <Text theme={{variant:'caption2'}} style={{marginHorizontal:3, ...props}}>{title}</Text>
            {iconRigth}
         </StyledTouchableOpacity>)
}

export default Button