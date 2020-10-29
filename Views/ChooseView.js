import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import ChooseButton from "../components/ChooseButton";
import background from "../assets/amongUsBackground.jpg";

const ChooseView = ({ navigation, route }) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <Text style={styles.title}>{route.params.type} QUOESTS</Text>
      <View style={styles.buttonContainer}>
        <ChooseButton
          text="RANDOM"
          style={{
            background: "rgba(4, 39, 67, 0.65)",
            borderColor: route.params.color,
            color: route.params.color,
          }}
          onPress={() =>
            navigation.navigate("Quest", {
              type: "RANDOM",
              impostor: route.params.type,
            })
          }
        />
        <ChooseButton
          text="VOTING"
          style={{
            background: "rgba(61, 10, 0, 0.65)",
            borderColor: route.params.color,
            color: route.params.color,
          }}
          onPress={() =>
            navigation.navigate("Quest", {
              type: "VOTING",
              impostor: route.params.type,
            })
          }
        />

        <ChooseButton
          text="POSITION"
          style={{
            background: "rgba(24, 48, 3, 0.65)",
            borderColor: route.params.color,
            color: route.params.color,
          }}
          onPress={() =>
            navigation.navigate("Quest", {
              type: "POSITION",
              impostor: route.params.type,
            })
          }
        />
        <ChooseButton
          text="OTHER"
          style={{
            background: "rgba(45, 1, 32, 0.65)",
            borderColor: route.params.color,
            color: route.params.color,
          }}
          onPress={() =>
            navigation.navigate("Quest", {
              type: "OTHER",
              impostor: route.params.type,
            })
          }
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 0,
  },
  title: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  background: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ChooseView;
