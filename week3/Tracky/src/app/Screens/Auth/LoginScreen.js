import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { login } from "../../../core/modules/auth/api";
import isVoid from "../../../core/utils/isVoid";
import Button from "../../Components/Design/Button/Button";
import TextField from "../../Components/Design/Form/TextField";
import Logo from "../../Components/Design/Logo/Logo";
import Title from "../../Components/Design/Text/Title";
import { Variables } from "../../style";

const LoginScreen = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePress = async () => {
    if (!isVoid(data.email) && !isVoid(data.password)) {
      // try login
      try {
        const response = await login({ ...data });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Title style={styles.title}>Meld je aan met je account</Title>
      <TextField
        label="Email"
        name="email"
        value={data.email}
        placeholder="john@doe.com"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextField
        label="Password"
        name="password"
        value={data.password}
        secureTextEntry={true}
        onChangeText={(text) => handleChange("password", text)}
      />
      <Button style={styles.button} onPress={handlePress}>
        Aanmelden
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: Variables.sizes.horizontalPadding,
    alignItems: "center",
  },
  title: {
    marginTop: Variables.sizes.medium,
    marginBottom: Variables.sizes.xl,
  },
  button: {
    marginTop: Variables.sizes.xs,
    width: "100%",
  },
});

export default LoginScreen;
