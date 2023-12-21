import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Quantity from "./Quantity";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Quantity and  Amount Manager</h1>
        <Quantity />
      </div>
    </Provider>
  );
}

export default App;