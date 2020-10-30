import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View, Button, Text } from "react-native";
import background from "../assets/amongUsBackground.jpg";

const SupportView = ({ navigation }) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          If you find bug, or you have andy ideas on new quests write on
        </Text>
        <Text style={[styles.text, styles.textBold]}>
          empito.kontakt@gmail.com
        </Text>
      </View>
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
  wrapper: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 40,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    borderRadius: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  textBold: {
    marginTop: 20,
    fontWeight: "bold",
  },
});

export default SupportView;
