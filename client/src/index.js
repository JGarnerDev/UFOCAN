// Modules //

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useSpring, animated } from "react-spring";

// Components //

import Home from "./components/Home";

// Styling //

import "./styles/App.scss";

// JSX

class App extends Component {
	render() {
		return (
			<Router>
				<div id="UFOCAN">
					{/* <Nav />
					<Switch>
						<Route path="/" exact Component={Home} />
						<Route path="/about" exact Component={About} />
						<Route path="/sightings" exact Component={Sightings} />
						<Route path="/sightings/:id" exact Component={SightingReview} />
					</Switch> */}
					<Home />
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("App"));
