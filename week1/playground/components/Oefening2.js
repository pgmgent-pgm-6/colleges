import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const list = ["Jef", "Killian", "Brent", "Stef", "Dion", "Gilles"];

const Oefening2 = () => {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(1000);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex(index + 1 >= list.length ? 0 : index + 1);
    }, time);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <View style={styles.container}>
      <Button
        title="-"
        disabled={time === 0}
        onPress={() => setTime(Math.max(0, time - 1000))}
      />
      <Text>{list[index]}</Text>
      <Button title="+" onPress={() => setTime(time + 1000)} />
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

export default Oefening2;
