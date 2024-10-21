import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import colors from './colors';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addSave, setSave } from '@/state/sysSlice';

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const MPanel = ({item,index,saved}:{item:any,index:number,saved?:boolean}) => {

    const dispatch = useAppDispatch()

    const saves = useAppSelector(state => state.sys.saves)

  return (
    <View key={index}
    style={{flexGrow:1,flexDirection:'row',justifyContent:'space-between',marginVertical:5,height:120,backgroundColor:'#fcfcfc',borderRadius:10,padding:10}}>
      <Image
          style={{width: 100,borderRadius:10}}
          source={item.Poster}
          contentFit="cover"
          placeholder={{ blurhash }}
          transition={1000}
        />
        <View style={{flexGrow:1,flexShrink:1,padding:10,justifyContent:'space-between'}}>
          <View>
            <Text style={{flexShrink:1,fontSize:16}}>{item.Title}</Text>
            <Text>{item.Year}</Text>
          </View>
          {
            !saves.find((obj)=>obj==item.imdbID) &&
          <Pressable 
          style={{alignSelf:'flex-end'}}
          onPress={()=>{
            dispatch(addSave(item.imdbID))
          }}>
            <View style={{width: 50,height:20,borderRadius:5,backgroundColor:colors.grey,alignItems:'center',justifyContent:'center'}}>
              <Text>Save</Text>
            </View>
          </Pressable>
            }
            {
              saved && 
              <Pressable onPress={()=>{
                dispatch(setSave(saves.filter((obj)=>obj != item.imdbID)))
              }
              }> 
                <Text>X</Text>
              </Pressable>
            }

        </View>
      </View>
  )
}

export default MPanel