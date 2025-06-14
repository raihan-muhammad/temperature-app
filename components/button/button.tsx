import { Text, TouchableOpacity } from "react-native";
import { s } from "./button.styled";

interface ButtonProps {
  unit: string;
  onPress: () => void;
}
const Button = ({ unit, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.buttonText}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
};

export default Button;
