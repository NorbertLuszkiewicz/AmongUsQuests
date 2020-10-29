import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Theme from "../theme/theme";

const ChooseButton = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 5,
        borderColor: Theme.crewmate,
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
        height: 180,
        maxHeight: "35%",
        borderRadius: 25,
        margin: 15,
        ...style,
      }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 5,
    borderColor: Theme.crewmate,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: 180,
    maxHeight: "35%",
    borderRadius: 25,
    margin: 15,
  },

  buttonText: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ChooseButton;
