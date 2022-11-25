import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Example from "./components/Example";
import Oefening1 from "./components/Oefening1";
import Oefening2 from "./components/Oefening2";
import Oefening4 from "./components/Oefening4";
import Oefening5 from "./components/Oefening5";

const App = () => {
  return (
    <View style={styles.container}>
      <Oefening5 />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
