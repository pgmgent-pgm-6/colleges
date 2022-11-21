import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Counter {counter}</Text>
      <Button title="Hallo" onPress={() => setCounter(counter + 1)} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
