import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactMapGL, { Marker } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

class MapContainer extends Component {
	componentDidMount() {
		this.props.setMapView(this.props.showing);
	}

	TOKEN = process.env.REACT_APP_MAPBOXGL_TOKEN;

	render() {
		console.log(this.props);
		return (
			<div id="Sighting">
				<ReactMapGL
					mapboxApiAccessToken={this.TOKEN}
					mapStyle="mapbox://styles/eljeffe345/ckcl0ra9607kt1jmftiewqo6u"
					{...this.props.viewport}
				>
					{this.props.sightings.map((sighting, i) => (
						<Marker
							key={i}
							latitude={sighting.latitude}
							longitude={sighting.longitude}
						>
							<FontAwesomeIcon
								icon={faRocket}
								id="jumbo-logo"
								size="1x"
								color={"red"}
							/>
						</Marker>
					))}
				</ReactMapGL>
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
