import React from "react";
import { TextInput, Text } from "react-native";
import styles from "../styles";

const InputBox = ({ label, value, setValue }) => {
  const handleInputChange = (text) => {
    if (text === "" || !isNaN(text)){
        setValue(text)
    }
  };

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={label}
        keyboardType="numeric"
        inputMode="decimal"
        value={value}
        onChangeText={handleInputChange}
      />
    </>
  );
};

export default InputBox;
