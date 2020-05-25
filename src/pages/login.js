import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
} from "react-native";
import { Logo, Form } from "../components";
import { Actions } from "react-native-router-flux";
export default class login extends Component {
  signUp = () => {
    Actions.register();
    // alert("Hi");
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.color}>Login</Text> */}
        <Logo />
        <Form type="Login In" />
        <View style={styles.signUpTextCont}>
          <Text style={styles.signUpTextLine}>
            Don't Have Account?
            <Text style={styles.signUpText}>
              {/* <TouchableOpacity onPress={this.signUp}> */}
              <Text onPress={this.signUp} style={styles.signUpText}>
                Sign Up
              </Text>
              {/* </TouchableOpacity> */}
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
