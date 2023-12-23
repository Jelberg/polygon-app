import React from "react"
import styled from "styled-components/native"
import { useQuery } from "@tanstack/react-query"
import { FlatList } from 'react-native';

import ItemList from "../../components/ItemList"
import { Text } from "../../components/theme/Text"
import { ThemeColors } from "../../components/theme/ThemeColors"
import Button from "../../components/Button"
import ArrowRigthIcon from "../../assets/icons/ArrowRigthIcon"
import { getInfoListApi } from "../../service/api"

interface IWatchlist {
  max_data?: number
}

export const StyledContainer = styled.View`
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-horizontal: 20px;
    padding-vertical: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: ${ThemeColors.gray}
`

const Watchlist: React.FC<IWatchlist> = ({
  max_data=4
}) => {

    
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => getInfoListApi()
      })
    
      if (isPending) return <StyledContainer><Text>Loading...</Text></StyledContainer>
    
      if (error) return <StyledContainer><Text>error.message</Text></StyledContainer>

    const num = max_data < data.length ? max_data : data.length
    
    return <>
    <StyledContainer>
    <Text theme={{variant:'h1'}}>Watchlist</Text>
    <Button iconRigth={<ArrowRigthIcon />} title='All' style={{backgroundColor: 'transparent'}}/>   
    </StyledContainer>
    
    <FlatList 
      data={data.slice(0, num)}
      renderItem={ItemList}
    />
   
    </>
}

export default Watchlist