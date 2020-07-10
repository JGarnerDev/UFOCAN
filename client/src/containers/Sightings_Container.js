import React, { Component } from "react";

import { connect } from "react-redux";
import { setView } from "../store/actions";
import { bindActionCreators } from "redux";

import { Container } from "react-bootstrap";

import Sighting from "../components/Sightings/Sighting";
import SightingList from "../components/Sightings/SightingsList/SightingsList";

class SightingsContainer extends Component {
	componentWillMount() {
		this.props.setView("sightings");
	}

	render() {
		return (
			<Container fluid id="Sightings">
				<Sighting />
				<SightingList />
			</Container>
		);
	}
}

function mapStateToProps(state) {
	let view = state.view.view;
	return {
		view: view,
		sightings: [],
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SightingsContainer);
