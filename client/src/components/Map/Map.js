import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import MapMarker from "./MapMarker";

export default function Map(props) {
	const TOKEN = process.env.REACT_APP_MAPBOXGL_TOKEN;

	return (
		<ReactMapGL
			mapboxApiAccessToken={TOKEN}
			mapStyle="mapbox://styles/eljeffe345/ckcl2is4b099l1iqe5mrj65u7"
			{...props.viewport}
		>
			{props.sightings.map((sighting, i) => (
				<Marker
					key={i}
					latitude={sighting.latitude}
					longitude={sighting.longitude}
					className="marker"
				>
					<MapMarker {...sighting} />
				</Marker>
			))}
		</ReactMapGL>
	);
}
