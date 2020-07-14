import React, { Component } from "react";

import { connect } from "react-redux";
import { setMapView } from "../store/actions";
import { bindActionCreators } from "redux";

class SightingCardContainer extends Component {
	render() {
		let sighting = this.props.sighting;

		return (
			<button
				id="SightingCard"
				onClick={() => {
					this.props.setMapView(sighting);
				}}
			>
				<p>
					{sighting.City || sighting.city || (
						<small>{sighting.full_address.split(",")[0]}</small>
					)}
				</p>
				<h5>{sighting.province || sighting.Province}</h5>
				<small id="date">{sighting.datetime}</small>
			</button>
		);
	}
}

function mapStateToProps(state) {
	return {
		showing: state.sightings.showing,
		viewport: state.viewport,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setMapView }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SightingCardContainer);
