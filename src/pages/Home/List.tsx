import React, { useCallback, useState } from "react"
import styled from "styled-components/native"
import { useQuery } from "@tanstack/react-query"
import { FlatList, RefreshControl } from 'react-native';

import ItemList from "../../components/ItemList"
import { Text } from "../../components/theme/Text"
import { ThemeColors } from "../../components/theme/ThemeColors"
import Button from "../../components/Button"
import { getInfoListApi } from "../../service/api"

export interface IWatchlist {
  max_data?: number
}

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
    padding-horizontal: 20px;
    text-align: center;
    padding-vertical: 10px;
    background-color: ${ThemeColors.gray}
`

const List: React.FC<IWatchlist> = ({
  max_data
}) => {

  const [refreshing, setRefreshing] = useState(false);

  // 
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    //Timeout for simulate refresh event.
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

      
    const query = useQuery({
        queryKey: ['repoData'],
        queryFn: () => getInfoListApi()
      })
    
      if (query.isPending) return <StyledContainerMessage><Text>Loading...</Text></StyledContainerMessage>
    
      if (query.error ) return <StyledContainerMessage>
        <Text>Error to show this section, please refresh</Text>
        <Button onPress={() => query.refetch()} title='Refresh' style={{backgroundColor: ThemeColors.primary, marginTop:5}} />
        </StyledContainerMessage>
      
      console.log(query.data)

      if (max_data === null) {
        max_data = query.data.length
      } 

    return <>
    <FlatList 
      data={query.data.slice(0, max_data)}
      renderItem={ItemList}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
   
    </>
}

export default List