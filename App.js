import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import MainView from "./Views/MainView";
import ChooseView from "./Views/ChooseView";
import QuoteView from "./Views/QuoteView";
import SupportView from "./Views/SupportView";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          style={styles.screen}
          name="Home"
          component={MainView}
          backgroundColor="black"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          style={styles.screen}
          name="Choose"
          component={ChooseView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          style={styles.screen}
          name="Quest"
          component={QuoteView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          style={styles.screen}
          name="Support"
          component={SupportView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
