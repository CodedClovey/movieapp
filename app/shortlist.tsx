import Box from "@/components/Box";
import { useAppSelector } from "@/hooks";
import { ScrollView, Text, View } from "react-native";

export default function Index() {

  const saves = useAppSelector(state => state.sys.saves)

  return (
    <View
      style={{
        flexGrow: 1,
        padding:10
      }}
    >
      <ScrollView>
      {saves.map((item,index)=>{
        return <Box item={item} index={index}></Box>
      })
      }
      </ScrollView>
    </View>
  );
}
