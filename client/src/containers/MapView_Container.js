import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactMapGL, { Marker } from "react-map-gl";

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
	return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
