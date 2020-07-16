import React, { Component } from "react";

import { connect } from "react-redux";
import { setMapView } from "../store/actions";
import { bindActionCreators } from "redux";

class SightingCardContainer extends Component {
	render() {
		let sighting = this.props.sighting;

		return (
			<button
				className="SightingCard"
				onClick={() => {
					this.props.setMapView(sighting);
				}}
			>
				<div className="identifier">{this.props.identifier}</div>
				<div className="location">
					<p>
						{sighting.City || sighting.city || (
							<small>{sighting.full_address.split(",")[0]}</small>
						)}
					</p>

					<h5>{sighting.province || sighting.Province}</h5>
				</div>
				<small className="date">{sighting.datetime}</small>
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
