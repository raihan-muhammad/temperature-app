import HotBg from "@/assets/images/hot.png";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import s from "./app.style";
// import ColdBg from '@/assets/images/cold.png';
export default function Index() {
  return (
    <ImageBackground style={s.backgroundImage} source={HotBg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <Text>Temperature</Text>
            <Text>Input</Text>
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
