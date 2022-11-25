import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppContainer from "./src/app/Components/Shared/App/AppContainer";
import LoginScreen from "./src/app/Screens/Auth/LoginScreen";
import { Variables } from "./src/app/style";

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <LoginScreen />
        <StatusBar style="dark" />
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Variables.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
