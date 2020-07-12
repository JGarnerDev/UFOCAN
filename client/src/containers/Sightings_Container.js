import React, { Component } from "react";

import { connect } from "react-redux";
import { setView, getInitialSelection } from "../store/actions";
import { bindActionCreators } from "redux";

import { Container } from "react-bootstrap";

import Sighting from "../components/Sightings/Sighting";
import SightingList from "../components/Sightings/SightingsList/SightingsList";

class SightingsContainer extends Component {
	componentWillMount() {
		this.props.setView("sightings");
		this.props.getInitialSelection();
	}

	render() {
		return (
			<Container fluid id="Sightings">
				<Sighting />
				<SightingList sightings={this.props.sightings} />
			</Container>
		);
	}
}

function mapStateToProps(state) {
	let view = state.view.view;
	return {
		view: view,
		sightings: state.sightings,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setView, getInitialSelection }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SightingsContainer);
