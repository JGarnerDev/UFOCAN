import React from "react";
import MapContainer from "../../containers/MapView_Container";

const Map = (props) => {
	return (
		<React.Fragment>
			<MapContainer {...props} />
		</React.Fragment>
	);
};

export default Map;
