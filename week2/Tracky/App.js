import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import AppContainer from "./src/app/Components/Shared/App/AppContainer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Variables } from "./src/app/style";
import AppNavigator from "./src/app/Navigators/AppNavigator";

const AppTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Variables.colors.primary,
    background: Variables.colors.background,
    text: Variables.colors.headerText,
    card: Variables.colors.primary,
  },
};

export default function App() {
  return (
    <AppContainer>
      <NavigationContainer theme={AppTheme}>
        <AppNavigator />
        <StatusBar style="dark" />
      </NavigationContainer>
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
