import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/components/Routes";
import persist from "./src/config/store";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./src/Main";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);
// console.log(persist);
const persistStore = persist();
export default function App() {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <Main />
      </PersistGate>
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
