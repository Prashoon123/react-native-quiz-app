import React from "react";
import { StyleSheet, Text } from "react-native";

const H1 = ({ children, style, color }) => {
  return (
    <Text style={[styles.h1, { color: color, ...style }]}>{children}</Text>
  );
};

const H2 = ({ children, style, color }) => {
  return (
    <Text style={[styles.h2, { color: color, ...style }]}>{children}</Text>
  );
};

const H3 = ({ children, style, color }) => {
  return (
    <Text style={[styles.h3, { color: color, ...style }]}>{children}</Text>
  );
};

const H4 = ({ children, style, color }) => {
  return (
    <Text style={[styles.h4, { color: color, ...style }]}>{children}</Text>
  );
};

export { H1, H2, H3, H4 };

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 25,
    fontWeight: "900",
  },
  h3: {
    fontSize: 20,
    fontWeight: "800",
  },
  h4: {
    fontSize: 15,
    fontWeight: "700",
  },
});
