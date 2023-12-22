import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { ThemeColors } from "./theme/ThemeColors";
import { Text } from "./theme/Text";
import TextIcon from "./TextIcon";
import Avatar from "./Avatar";
import ArrowTradeDownIcon from "../assets/icons/ArrowTradeDownIcon";
import ArrowTradeUpIcon from "../assets/icons/ArrowTradeUpIcon";

interface IItemList {
    
}

export const StyledTouchableOpacity = styled.TouchableOpacity`
padding-horizontal: 20px;
padding-vertical: 18px;
width: 100%;
align-items: center;
background-color: ${ThemeColors.gray};
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`


export const StyledView = styled.View`
  flex-direction: column;
  align-items: ${(props) => (props.theme.align === 'right' ? 'flex-end' : 'flex-start')};
  flex: ${(props) => (props.theme.flex) || 1};
`;

const ItemList: React.FC<IItemList> = () => {

    return <StyledTouchableOpacity>
        <StyledView theme={{flex: 0.8 }}>
            <Avatar />
        </StyledView>
        <StyledView theme={{flex: 2 }}>
            <Text theme={{variant:'h2'}} style={{marginBottom:5}}>SPFT</Text>
            <Text theme={{variant:'caption'}}>Spotify</Text>
        </StyledView>
        <StyledView theme={{align:'right', flex: 2}}>
            <Text theme={{variant:'h2'}} style={{marginBottom:5}}>$102.45</Text>
            <TextIcon iconLeft={<ArrowTradeUpIcon color={ThemeColors.green}/>} text='+$0.42 (0.48%)' variant='numgreen' />
        </StyledView>
    </StyledTouchableOpacity>
}

export default ItemList