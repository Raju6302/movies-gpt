import React from "react";
import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import appStore from "./redux/appStore.js";

const App = () => {
  return (
  <Provider store={appStore}>
  <Body/>
  </Provider>)

};

export default App;
