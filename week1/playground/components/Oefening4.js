import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const list = ["Jef", "Killian", "Brent", "Stef", "Dion", "Gilles"];

const Oefening4 = () => {
  const [text, setText] = useState("");

  const handleChangeText = (text) => {
    if (text.length <= 160) {
      setText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="HALLO"
        value={text}
        multiline={true}
        maxLength={160}
        onChangeText={handleChangeText}
      />
      <Text>{text.length}/160</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 200,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Oefening4;
