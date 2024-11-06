import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Button, TextInput, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState('');
  const [todo, setTodo] = useState<string>("");
  const [todosList, setTodosList] = useState<string[]>([]);


  const addCounter = () => {
    setCounter(counter + 1);
  };

  const minusCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    // alert("hello world");
  }, [counter]);

  const addTodo = () => {
    setTodosList([...todosList, todo]);
    setTodo("");
  }
  useEffect(() => {
    console.log(todosList)
  }, [todosList])

  return (
    <ScrollView>
      {/* <Text style={{ fontSize: 90, marginTop: 50 }}>{counter}</Text>

      <TextInput
        style={{ borderColor: "#000000", borderWidth: 1, height: 50, fontSize: 32 }}
        value={userName}
        onChangeText={(text) => { setUserName(text) }}
      /> */}

      {/* <Button
        onPress={minusCounter}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}

      {/* <TouchableOpacity onPress={addCounter}>
        <Text style={{ fontSize: 90 }}>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={minusCounter}>
        <Text style={{ fontSize: 90 }}>Minus</Text>
      </TouchableOpacity> */}

      <TextInput
        style={{ borderColor: "#000000", borderWidth: 1, height: 50, fontSize: 32 }}
        value={todo}
        onChangeText={(text) => { setTodo(text) }}
      />
      <TouchableOpacity onPress={addTodo}>
        <Text style={{ fontSize: 90 }}>Add</Text>
      </TouchableOpacity>
      {/* {
        todosList.length > 0 && todosList.map((todoData, index) => (
          <View key={index}>
            <Text style={{fontSize:50}}>{todoData}</Text>
          </View>
        ))
      } */}

     

    </ScrollView>
  );
}
