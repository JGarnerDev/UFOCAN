import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { onHomePage, onLogInPage, onAboutPage } from "./actions";
import Nav from "./components/Nav";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import About from "./components/About";
import Sightings from "./components/Sightings";

class App extends Component {
	componentWillMount() {
		this.props.onHomePage();
	}
	render() {
		return (
			<Router>
				<React.Fragment>
					<Nav />
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/login" component={LogIn} exact />
						<Route path="/about" component={About} exact />
						<Route path="/sightings" component={Sightings} exact />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ onHomePage, onLogInPage, onAboutPage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
