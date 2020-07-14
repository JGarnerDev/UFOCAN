import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import cleanString from "../functions/stringCleaner";

import { connect } from "react-redux";
import { setMapView } from "../store/actions";
import { bindActionCreators } from "redux";

import { Container } from "react-bootstrap";

class MapMarkerContainer extends Component {
	state = { showingComment: false };
	render() {
		return (
			<div className="marker" style={{ zIndex: 0 }}>
				<FontAwesomeIcon
					icon={faRocket}
					size="1x"
					color={"red"}
					className="marker-icon"
					style={this.state.showingComment ? { opacity: 1 } : { opacity: 0.5 }}
					onMouseEnter={() => {
						this.setState({
							showingComment: true,
						});
					}}
					onMouseLeave={() => {
						this.setState({
							showingComment: false,
						});
					}}
					onClick={() => {
						this.props.setMapView({
							longitude: this.props.longitude,
							latitude: this.props.latitude,
						});
					}}
				/>{" "}
				{this.state.showingComment ? (
					<div
						className="comment-popup"
						style={{ zIndex: Math.abs(this.props.longitude) }}
					>
						<p style={{ zIndex: Math.abs(this.props.longitude) }}>
							{cleanString(this.props.comments)}
						</p>
					</div>
				) : null}
			</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MapMarkerContainer);
