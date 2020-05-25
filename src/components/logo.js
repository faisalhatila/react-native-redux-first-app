import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 70 }}
          source={require("../images/Kayser-Logo.png")}
        />
        <Text style={styles.logoText}>Welcome To My App</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoText: {
    fontSize: 20,
    color: "rgba(255,255,255,0.7)",
  },
});
