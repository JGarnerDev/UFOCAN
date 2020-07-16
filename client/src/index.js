import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Routes from "./routes";

import "./styles/style.scss";

import Nav from "./components/Nav";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Nav />
			<Routes />
		</Router>
	</Provider>,

	document.getElementById("root")
);
