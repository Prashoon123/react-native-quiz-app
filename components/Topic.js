import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { H3 } from "./Text";

const Topic = ({ name, navigation, link }) => {
  const deviceHeight = Dimensions.get("window").height;

  const distance = deviceHeight > 700 ? 40 : 20;
  const height = deviceHeight > 700 ? 80 : 70;

  const handleNavigation = () => {
    navigation.navigate(`${link}`);
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.topic, { height: height }]}
        onPress={handleNavigation}
      >
        <H3 color="black">{name}</H3>
      </TouchableOpacity>
      <View style={{ height: distance }} />
    </>
  );
};

export default Topic;

const styles = StyleSheet.create({
  topic: {
    width: 250,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
