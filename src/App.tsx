import { StyleSheet, View } from "react-native";
import React from "react";
import { BACKGROUND_COLOR } from "./constant";
import { StatusBar } from "expo-status-bar";
import StackedCards from "./animations/StackedCards";

type Props = {};

const App = (props: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={BACKGROUND_COLOR} />
      <StackedCards />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});
