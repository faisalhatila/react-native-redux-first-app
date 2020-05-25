import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

export default class form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.inputBox}
          placeholderTextColor="#000"
          // selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.inputBox}
          placeholderTextColor="#000"
          ref={(input) => (this.password = input)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    width: 300,
    height: 40,
    padding: 10,
    borderColor: "#fff",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 5,
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#1c313a",
    borderRadius: 5,
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: 300,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
});
