import { View, Text, TouchableOpacity } from "react-native";

export default function Signup({ navigation }) {
  const gotoLogin = () => {
    navigation.navigate("signin");
  };

  return (
    <View>
      <Text style={{ fontSize: 90 }}>This is a signup page</Text>
      <TouchableOpacity onPress={gotoLogin}>
        <Text>Go to login</Text>
      </TouchableOpacity>
    </View>
  );
}
