import { StyleSheet } from "react-native";
import { Variables } from "../../../style";
import Text from "../Text/Text";
import AvatarBase from "./AvatarBase";

const TextAvatar = ({ children, style }) => {
  return (
    <AvatarBase style={style}>
      <Text style={styles.text}>{children}</Text>
    </AvatarBase>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: Variables.textSizes.xxl,
    fontFamily: Variables.fonts.bold,
  },
});

export default TextAvatar;
