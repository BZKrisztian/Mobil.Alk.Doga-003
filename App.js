/*
* File: App.js
* Author: Batki Zoltan Krisztian
* Copyright: 2025, Batki Zoltan Krisztian
* Group: Szoft II-1-N
* Date: 2025-02-13
* Github: https://github.com/BZKrisztian
* Licenc: --
*/
import React from "react";
import { View } from "react-native";
import Cylinder from "./components/cylinder";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Cylinder/>
    </View>
  );
}

