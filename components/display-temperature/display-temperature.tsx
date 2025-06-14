import { Text } from "react-native";
import { s } from "./display-temperature.styled";

interface DisplayTemperatureProps {
  temperature: number;
  unit: string;
}
const DisplayTemperature = ({ temperature, unit }: DisplayTemperatureProps) => {
  return (
    <Text style={s.temperatureText}>
      {temperature} {unit}
    </Text>
  );
};

export default DisplayTemperature;
