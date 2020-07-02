// Modules //
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

// Reducers //

// Components //
import App from "./App";

// Styling //
import "./styles/App.scss";

// Redux
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("App")
);
