import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Theme from "../theme/theme";

const StyledButton = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, { borderColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
    borderWidth: 5,
    borderColor: Theme.crewmate,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 140,
    maxHeight: "25%",
    borderRadius: 25,
    margin: 15,
  },
  wrapperRed: {
    borderColor: Theme.impostor,
  },
  buttonText: {
    color: Theme.crewmate,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 42,
    fontWeight: "bold",
  },
  buttonTextRed: {
    color: Theme.impostor,
  },
});

export default StyledButton;
