import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useAppDispatch, useAppSelector } from "@/hooks";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from "react";
import colors from "@/components/colors";
import MPanel from "@/components/MPanel";

export default function Index() {

  const [text,setText] = useState('')

  const query = async (text:string) => await axios.get(`https://www.omdbapi.com/?apikey=33dce376&s=${text}&page=1`).then(res => {
    console.log(res.data)
    return res.data
  })
  
  const {data, isFetched, isLoading, isError} = useQuery({
    queryKey: ['movies',text],
    queryFn: async ()=>await query(text)
  })

  return (
    <View
      style={{
        flex: 1,
        padding:10
      }}
    >
      <View style={{backgroundColor:colors.grey,height:40,flexDirection:'row',justifyContent:'space-between',
        alignItems:'center',paddingHorizontal:10,borderRadius:5}}>
        <TextInput 
        style={{flexGrow:1,fontSize:16}}
        onChangeText={async (output)=>{
            setText(output)
        }}
        placeholder="Search"
        value={text}
        
        ></TextInput>
        <MaterialIcons name={'search'} size={25} color={colors.darkgrey}/>
      </View>
      
      <View>
      {(isFetched) && data['Response'] == 'True' &&

      <ScrollView>{
        data['Search'].map((item:any,index:number)=>{
        return (
          <MPanel item={item} index={index}></MPanel>
        )
        })
      }
      </ScrollView>

      }
      </View>
    </View>
  );
}
