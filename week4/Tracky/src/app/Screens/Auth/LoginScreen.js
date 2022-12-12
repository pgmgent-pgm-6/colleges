import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../core/modules/auth/api";
import isVoid from "../../../core/utils/isVoid";
import Button from "../../Components/Design/Button/Button";
import TextField from "../../Components/Design/Form/TextField";
import Logo from "../../Components/Design/Logo/Logo";
import Title from "../../Components/Design/Text/Title";
import { Variables } from "../../style";

const LoginScreen = () => {
  const { mutate, isLoading, isError, error } = useMutation(login);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePress = async () => {
    if (!isVoid(data.email) && !isVoid(data.password)) {
      mutate({ ...data });
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Title style={styles.title}>Meld je aan met je account</Title>
      <TextField
        label="Email"
        name="email"
        disabled={isLoading}
        value={data.email}
        placeholder="john@doe.com"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextField
        label="Password"
        name="password"
        disabled={isLoading}
        value={data.password}
        secureTextEntry={true}
        onChangeText={(text) => handleChange("password", text)}
      />
      <Button style={styles.button} onPress={handlePress} disabled={isLoading}>
        Aanmelden
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Variables.sizes.xxxxl * 2,
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
