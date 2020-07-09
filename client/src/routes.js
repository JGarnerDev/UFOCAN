import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Sightings from "./components/Sightings";
import About from "./components/About";
import LogIn from "./components/LogIn";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/sightings" exact component={Sightings} />
			<Route path="/about" exact component={About} />
			<Route path="/login" exact component={LogIn} />
		</Switch>
	);
};

export default Routes;
