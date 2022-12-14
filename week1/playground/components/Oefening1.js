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

const Oefening1 = () => {
  const [search, setSearch] = useState("");
  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="HALLO"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <FlatList
        data={filteredList}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
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

export default Oefening1;
