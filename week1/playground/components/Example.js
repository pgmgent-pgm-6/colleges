import { useState } from "react";
import { Button, Text, View } from "react-native";

const Example = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Counter {counter}</Text>
      <Button title="Hallo" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

export default Example;
