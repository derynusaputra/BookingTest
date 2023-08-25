import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { HomePage, PlayerPage } from "./Pages";
import Aplication from "./Navigator/Aplication";
import { Provider } from "react-redux";
import { store } from "./Store";
import { PaperProvider } from "react-native-paper";
import { Colors } from "./Theme";

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={Colors}>
        <Aplication />
      </PaperProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
