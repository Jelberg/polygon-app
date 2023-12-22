import React from "react";
import styled from "styled-components/native";

interface IAvatar {
    imgUri?: string;
}

export const StyledImage = styled.Image`
width: 40px;
height: 40px;
border-radius: 50px;
background-color: 'gray' 
`

export const StyledView = styled.View`
width: 40px;
height: 40px;
border-radius: 50px;
background-color: gray ;
`

const Avatar: React.FC<IAvatar> = ({
    imgUri
}) => {

    return imgUri ? <StyledImage source={{uri: imgUri}}></StyledImage>: <StyledView></StyledView>
}

export default Avatar