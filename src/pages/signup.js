import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Logo, Form, InputText } from "../components";
import { Actions } from "react-native-router-flux";
import { Field, reduxForm } from "redux-form";
import { onChange, max } from "react-native-reanimated";
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
class signup extends Component {
  signIn = () => {
    Actions.login();
  };
  createNewUser = () => {
    alert("Boss");
  };
  onSubmit = (values) => {
    console.log(values);
  };
  renderTextInput = (field) => {
    const {
      meta: { touched, error },
      label,
      secureTextEntry,
      maxLength,
      keyboardType,
      placeholder,
      input: { onChange, ...restInput },
    } = field;
    return (
      <View>
        <InputText
          onChangeText={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          label={label}
          {...restInput}
        />
      </View>
    );
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.color}>Login</Text> */}
        <Logo />
        {/* <Form type="Signup" onAuthButtonPress={this.createNewUser} /> */}
        <View style={{ marginHorizontal: 30 }}>
          <Field
            name="Name"
            component={this.renderTextInput}
            placeholder="Name"
          />
          <Field
            name="email"
            component={this.renderTextInput}
            placeholder="Email"
          />
          <Field
            name="Password"
            component={this.renderTextInput}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(this.onSubmit)}
          >
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
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

export default reduxForm({
  // a unique name for the form
  form: "register",
})(signup);
