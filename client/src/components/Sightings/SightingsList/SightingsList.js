import React from "react";

import { Container } from "react-bootstrap";

import ListSettings from "./ListSettings";
import SightingCard from "./SightingCard";

export default function SightingsList(props) {
	let sightings = props.sightings;

	return (
		<Container id="SightingsList">
			<ListSettings setRegion={props.setRegion} />
			<Container id="sightings-container">
				{sightings.length > 0
					? sightings.map((sighting, i) => {
							return (
								<SightingCard
									sighting={sighting}
									setMapView={props.setMapView}
									key={i}
									identifier={i + 1}
								/>
							);
					  })
					: null}
			</Container>
		</Container>
	);
}
