import React from "react";

import { Container } from "react-bootstrap";

import ListSettings from "./ListSettings";
import SightingCard from "./SightingCard";

export default function SightingsList(props) {
	return (
		<Container id="SightingsList">
			<ListSettings />
			<Container id="sightings-container">
				{props.sightings.sightings && props.sightings.sightings.length > 0
					? props.sightings.sightings.map((sighting, i) => (
							<SightingCard sighting={sighting} key={i} />
					  ))
					: null}
			</Container>
		</Container>
	);
}
