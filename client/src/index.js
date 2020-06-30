// Modules //
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Reducers //
import mainReducer from "./reducers/main";

// Components //
import Nav from "./components/Nav";
import Home from "./components/Home";
import LogIn from "./components/LogIn";

// Styling //
import "./styles/App.scss";

const store = createStore(
	mainReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
	render() {
		return (
			<Router>
				<div id="UFOCAN">
					<Nav />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/login" exact component={LogIn} />
					</Switch>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("App")
);
