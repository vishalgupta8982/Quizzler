import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Quiz from "../screens/Quiz";
import Result from "../screens/Result";
import React from "react";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}
export default MyStack;
