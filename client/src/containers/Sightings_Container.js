import React, { Component } from "react";

import { connect } from "react-redux";
import { setView } from "../store/actions";
import { bindActionCreators } from "redux";

class SightingsContainer extends Component {
	componentWillMount() {
		this.props.setView("sightings");
	}

	render() {
		console.log(this.props.view);

		return (
			<div id="Sightings">
				<h1>Sightings Page</h1>
			</div>
		);
	}
}

function mapStateToProps(state) {
	let view = state.view.view;
	return {
		view: view,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SightingsContainer);
