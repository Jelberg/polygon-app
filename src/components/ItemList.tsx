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
padding-vertical: 12px;
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

const ItemList = (data) => {
    console.log('ItemList');
    console.log(data);
    console.log(data.item);
    console.log(data.item.company[0]['company']);
    console.log(data.item.summary);

    return <StyledTouchableOpacity>
        <StyledView theme={{flex: 0.8 }}>
            {data.item.company[0]['logo'] === "" ? <Avatar /> : <Avatar imgUri={data.item.company[0]['logo']}/>}
        </StyledView>
        <StyledView theme={{flex: 2 }}>
            <Text theme={{variant:'h2'}} style={{marginBottom:5}}>{data.item.company[0]['ticket']}</Text>
            <Text theme={{variant:'caption'}}>{data.item.company[0]['company']}</Text>
        </StyledView>
        <StyledView theme={{align:'right', flex: 2}}>
            <Text theme={{variant:'h2'}} style={{marginBottom:5}}>$102.45</Text>
            {
            data.item.signal === '+'?
            <TextIcon iconLeft={<ArrowTradeUpIcon color={ThemeColors.green}/>} text={data.item.summary} variant='numgreen' />:
            <TextIcon iconLeft={<ArrowTradeDownIcon color={ThemeColors.red}/>} text={data.item.summary} variant='numred' />
            }
            
        </StyledView>
    </StyledTouchableOpacity>
}

export default ItemList