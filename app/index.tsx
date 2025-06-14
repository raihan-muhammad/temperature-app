import Button from "@/components/button/button";
import DisplayTemperature from "@/components/display-temperature/display-temperature";
import Input from "@/components/input/input";
import {
  convertTemperatureTwo,
  getOppositeUnit,
  isIceTemperature,
} from "@/utils/temperature";
import { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import s from "./app.style";
const HotBg = require("@/assets/images/hot.png");
const ColdBg = require("@/assets/images/cold.png");
export default function Index() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBg, setCurrentBg] = useState(ColdBg);
  const oppositeUnit = getOppositeUnit(currentUnit);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, currentUnit);

    setCurrentBg(isCold ? ColdBg : HotBg);
  }, [inputValue, currentUnit]);

  return (
    <ImageBackground style={s.backgroundImage} source={currentBg}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={convertTemperatureTwo(
                inputValue,
                oppositeUnit
              ).toFixed(1)}
            />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue="3"
            />
            <Button
              onPress={() => {
                setCurrentUnit(oppositeUnit);
              }}
              unit={currentUnit}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
