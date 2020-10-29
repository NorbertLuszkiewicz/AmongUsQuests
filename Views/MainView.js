import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import StyledButton from "../components/StyledButton";
import background from "../assets/amongUsBackground.jpg";
import Theme from "../theme/theme";

const MainView = ({ navigation }) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <Text style={styles.title}>AMONG US QUOEST</Text>
      <View style={styles.buttonContainer}>
        <StyledButton
          text="CREWMATE"
          color={Theme.crewmate}
          onPress={() =>
            navigation.navigate("Choose", {
              type: "CREWMATE",
              color: Theme.crewmate,
            })
          }
        />
        <StyledButton
          text="IMPOSTOR"
          color={Theme.impostor}
          onPress={() =>
            navigation.navigate("Choose", {
              type: "IMPOSTOR",
              color: Theme.impostor,
            })
          }
        />
        <StyledButton
          text="TEAM"
          color={Theme.team}
          onPress={() =>
            navigation.navigate("Quest", { type: "TEAM", impostor: "TEAM" })
          }
        />
      </View>
      <View style={styles.supportButton}>
        <Button title="Support and Privacy " />
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
  supportButton: {
    marginBottom: 20,
  },
});

export default MainView;
