import React, { Component } from "react";

import MapMarkerContainer from "../../containers/MapMarker_Container";

class MapMarker extends Component {
	render() {
		return (
			<div>
				<MapMarkerContainer {...this.props} />
			</div>
		);
	}
}

export default MapMarker;
