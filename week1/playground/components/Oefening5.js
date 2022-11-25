import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Oefening5 = () => {
  const [text, setText] = useState("");
  const list = text.split(";");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="HALLO"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <FlatList data={list} renderItem={({ item }) => <Text>{item}</Text>} />
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

export default Oefening5;
