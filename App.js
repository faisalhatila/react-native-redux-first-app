import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/components/Routes";
import store from "./src/config/store";
import Main from "./src/Main";
export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    // height: "100%",
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  color: {
    color: "#fff",
    fontSize: 20,
  },
});
