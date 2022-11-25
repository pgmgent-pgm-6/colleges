import { StyleSheet, View } from "react-native";
import Button from "../../Components/Design/Button/Button";
import TextField from "../../Components/Design/Form/TextField";
import Logo from "../../Components/Design/Logo/Logo";
import Title from "../../Components/Design/Text/Title";
import { Variables } from "../../style";

const LoginScreen = () => {
  return (
    <View>
      <Logo />
      <Title>Login met je account</Title>
      <TextField name="email" value="" onTextChange={() => {}} />
      <Button style={styles.button}>Login</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: Variables.sizes.medium,
  },
});

export default LoginScreen;
