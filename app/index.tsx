import DisplayTemperature from "@/components/display-temperature/display-temperature";
import Input from "@/components/input/input";
import { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import s from "./app.style";
const HotBg = require("@/assets/images/hot.png");
const ColdBg = require("@/assets/images/cold.png");
export default function Index() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");

  return (
    <ImageBackground style={s.backgroundImage} source={HotBg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature unit={currentUnit} temperature={inputValue} />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue="3"
            />
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
