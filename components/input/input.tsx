import { Dispatch, SetStateAction } from "react";
import { Text, TextInput, View } from "react-native";
import { s } from "./input.style";

interface InputProps {
  defaultValue?: string;
  onChange?: Dispatch<SetStateAction<number>>;
  unit: string;
}

const Input = ({ defaultValue, onChange, unit }: InputProps) => {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        maxLength={3}
        keyboardType="numeric"
        placeholder="Type your temperature!"
        defaultValue={defaultValue}
        onChangeText={(t) => {
          if (onChange) {
            const num = Number(t);
            if (!isNaN(num)) {
              onChange(num);
            } else {
              onChange(0);
            }
          }
        }}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
};

export default Input;
