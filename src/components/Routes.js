import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import { Login, SignUp } from "../pages";
export default class Routes extends Component {
  render() {
    return (
      // <Login />
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene
            key="register"
            component={SignUp}
            title="Register"
            initial={false}
          />
        </Stack>
      </Router>
    );
  }
}
