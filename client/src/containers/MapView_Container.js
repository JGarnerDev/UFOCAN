import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CSI_zoom } from "../store/actions";

import Map from "../components/Map/Map";

class MapContainer extends Component {
	componentDidMount() {
		this.props.setMapView(this.props.showing);
	}

	TOKEN = process.env.REACT_APP_MAPBOXGL_TOKEN;

	render() {
		return (
			<div id="Sighting">
				<Map {...this.props} />
				<div id="zoom-toggle">
					<button
						onClick={() => {
							this.props.CSI_zoom(0.5);
						}}
					>
						+
					</button>
					<button
						onClick={() => {
							this.props.CSI_zoom(-0.5);
						}}
					>
						-
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		viewport: state.map.viewport,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ CSI_zoom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
