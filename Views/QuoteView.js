import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Button, ImageBackground, View } from "react-native";
import background from "../assets/amongUsBackground.jpg";
import Quote from "../components/Quote";

const QuoteView = ({ navigation, route }) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <Quote type={route.params.type} impostor={route.params.impostor} />
      <View style={{ marginBottom: 20 }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  supportButton: {
    marginBottom: 20,
  },
});

export default QuoteView;
