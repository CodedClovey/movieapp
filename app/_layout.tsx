import { store } from "@/state/store";
import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import colors from "@/components/colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { usePathname } from 'expo-router';

export default function RootLayout() {

  const queryClient = new QueryClient()
  const pathname = usePathname();

  return (
    <>
    <SafeAreaView style={{flexGrow:1,flexShrink:1,flex:1}}>
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      
      <View style={{flex:1,maxHeight:30,justifyContent:'flex-end',alignItems:'center',backgroundColor:colors.lightgrey}}>
        <Text style={{fontSize:18,color:colors.darkgrey,fontWeight:'bold'}}>{pathname=='/shortlist'?'Bookmarks':'OMDB'}</Text>
      </View>

      <Stack screenOptions={{animation:'none',contentStyle:{backgroundColor:colors.lightgrey}}}>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="shortlist" options={{headerShown:false}}/>
      </Stack>

      <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:colors.lightgrey,padding:10,height:60,gap:5}}>
        <Link href ='/' asChild>
          <Pressable style={{flexGrow:1,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',
            backgroundColor:colors.grey,borderRadius:5}}>
            <Text style={{fontSize:16, color:colors.black}}>Movies</Text>
          </Pressable>
        </Link>
        <Link href='/shortlist' asChild>
          <Pressable style={{width:40,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',
            backgroundColor:pathname=='/shortlist'?colors.yellow:colors.grey, borderRadius:5}}>
          <MaterialIcons name={'bookmark'} size={25} color={colors.darkgrey}/>
          </Pressable>
        </Link>
      </View>

      </QueryClientProvider>
      </Provider>
    </SafeAreaView>
    </>
  );
}