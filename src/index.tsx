import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";
import registerServiceWorker from "./registerServiceWorker";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.css";

const rootReducer = combineReducers({ formReducer });
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
