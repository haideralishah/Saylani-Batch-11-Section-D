import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

export default function HelloWorld() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const minusCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    // alert("hello world");
  }, [counter]);

  return (
    <View>
      <Text style={{ fontSize: 90, marginTop: 50 }}>{counter}</Text>

      <Button
        onPress={minusCounter}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <TouchableOpacity onPress={addCounter}>
        <Text style={{ fontSize: 90 }}>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={minusCounter}>
        <Text style={{ fontSize: 90 }}>Minus</Text>
      </TouchableOpacity>
    </View>
  );
}
