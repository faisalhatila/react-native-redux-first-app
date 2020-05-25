import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Logo, Form } from "../components";
import { Actions } from "react-native-router-flux";
export default class signup extends Component {
  signIn = () => {
    Actions.login();
  };
  createNewUser = () => {
    alert("Boss");
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.color}>Login</Text> */}
        <Logo />
        <Form type="Signup" onAuthButtonPress={this.createNewUser} />
        <View style={styles.signUpTextCont}>
          <Text style={styles.signUpTextLine}>
            Already Have An Account?{" "}
            <Text onPress={this.signIn} style={styles.signUpText}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
  },

  color: {
    color: "#fff",
    fontSize: 20,
  },
  signUpTextCont: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  signUpTextLine: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
  },
  signUpText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
