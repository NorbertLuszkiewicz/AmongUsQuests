import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import data from "../data/data";

const Quote = ({ type, impostor }) => {
  let filterQuotes = data.filter((item) => {
    return (
      (type === "RANDOM" && item.impostor === impostor) ||
      (item.type === type && item.impostor === impostor)
    );
  });

  let randomNumber = Math.floor(Math.random() * filterQuotes.length);
  let Quote = filterQuotes[randomNumber];

  return (
    <>
      <Text style={styles.title}>{Quote.title} </Text>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{Quote.description}</Text>
      </View>
      <Image />
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    borderRadius: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
});

export default Quote;
