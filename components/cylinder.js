import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import InputBox from "./inputBox";
import { calcSurfaceArea } from "./calculations";
import styles from "../styles";

export default function Cylinder() {
  const [radius, setRadius] = useState("");
  const [height, setHeight] = useState("");
  const [surfaceArea, setSurfaceArea] = useState(null);

  const calcExecution = () => {
    const area = calcSurfaceArea(radius, height);
    setSurfaceArea(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kor alapu henger felszin-szamitasa(cm)</Text>

      <InputBox label="Sugar" value={radius} setValue={setRadius} />
      <InputBox label="Magassag" value={height} setValue={setHeight} />

      <Button title="Szamitas" onPress={calcExecution}/>

      {surfaceArea !== null && (
        <Text style={styles.result}>Henger felszine: {surfaceArea} cm</Text>
      )}
    </View>
  );
}
