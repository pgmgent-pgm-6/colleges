import { StyleSheet, View } from "react-native";
import Button from "../../Components/Design/Button/Button";
import TextField from "../../Components/Design/Form/TextField";
import Logo from "../../Components/Design/Logo/Logo";
import Title from "../../Components/Design/Text/Title";
import { Variables } from "../../style";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Title style={styles.title}>Login met je account</Title>
      <TextField
        label="Email"
        name="email"
        value=""
        placeholder="john@doe.com"
        autoComplete="email"
        keyboardType="email-address"
        onTextChange={() => {}}
      />
      <TextField
        label="Password"
        name="password"
        value=""
        secureTextEntry={true}
        onTextChange={() => {}}
      />
      <Button style={styles.button}>Login</Button>
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

export default RegisterScreen;
