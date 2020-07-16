import React, { Component } from "react";

import { connect } from "react-redux";

import {
	setView,
	getInitialSelection,
	getSelection,
	setMapView,
	setRegion,
} from "../store/actions";

import { bindActionCreators } from "redux";

import { Container } from "react-bootstrap";

import SightingsList from "../components/Sightings/SightingsList/SightingsList";
import MapView from "../components/Map/MapView";

class SightingsContainer extends Component {
	componentDidMount() {
		this.props.setView("sightings");
		this.props.getInitialSelection();
	}

	render() {
		return (
			<Container fluid id="Sightings">
				{this.props.sightings.length > 0 ? (
					<MapView {...this.props} />
				) : (
					<div id="Sighting"></div>
				)}

				<SightingsList
					sightings={this.props.sightings}
					setMapView={setMapView}
					setRegion={setRegion}
				/>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		view: state.view,
		sightings: state.sightings.data,
		showing: state.sightings.showing,
		viewport: state.map.viewport,
		region: state.region,
		sortOption: state.sortOption,
		amount: state.amount,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ setView, getSelection, getInitialSelection, setMapView, setRegion },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(SightingsContainer);
