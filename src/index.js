import React from "react";
import { render } from "react-dom";
import PrimeFinder from "./Components/PrimeFinder";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./Ducks/reducers";

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware))
);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <Provider store={store}>
    <div style={styles}>
      <PrimeFinder />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
