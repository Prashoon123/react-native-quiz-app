import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { H4 } from "./Text";

const Option = ({ option, optionStyles, answered, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.option, optionStyles]}
      disabled={answered ? true : false}
    >
      <H4 style={{ fontWeight: "500" }}>{option}</H4>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  option: {
    width: 250,
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  optionCorrect: {
    backgroundColor: "#6db46d",
  },
  optionIncorrect: {
    backgroundColor: "#ff9191",
  },
});
