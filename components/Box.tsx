import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import MPanel from './MPanel'

const Box = ({item,index}:{item:string,index:number}) => {

    const query = async (text:string) => await axios.get(`https://www.omdbapi.com/?apikey=33dce376&i=${text}`).then(res => {
        console.log(res.data)
        return res.data
      })
      
      const {data, isFetched, isLoading, isError} = useQuery({
        queryKey: [item],
        queryFn: async ()=>await query(item)
      })
      

    return (
        <View key={index} style={{flexGrow:1}}>
            {
                (isFetched) && data['Response'] == 'True' &&
                <MPanel saved={true} item={data} index={index}></MPanel>
            }
        </View>
    )
}

export default Box