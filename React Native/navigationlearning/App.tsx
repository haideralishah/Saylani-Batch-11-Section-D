import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./components/signup";
import Signin from "./components/signin";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Home from "./components/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "./components/chat";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    changeAuth();
  }, []);
  const changeAuth = () => {
    setTimeout(() => {
      setAuth(true);
    }, 5000);
  };
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <NavigationContainer>
      {!auth ? (
        <Stack.Navigator
          initialRouteName="signup"
          screenOptions={() => ({
            headerShown: false,
          })}
        >
          <Stack.Screen
            name="signin"
            component={Signin}
            options={{ cardStyleInterpolator: forFade }}
          />
          <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={() => ({
            headerShown: false,
          })}
        >
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="chat" component={Chat} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
