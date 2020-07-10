import React from "react";

import { Container } from "react-bootstrap";

import ListSettings from "./ListSettings";
import SightingCard from "./SightingCard";

let sightings = new Array(30);
sightings.fill(1);

export default function SightingsList(props) {
	function renderCards(sightings) {
		return sightings.length > 0
			? sightings.map((sighting, i) => {
					return <SightingCard sighting={sighting} key={i} />;
			  })
			: null;
	}

	return (
		<Container id="SightingsList">
			<ListSettings />
			<Container id="sightings-container">{renderCards(sightings)}</Container>
		</Container>
	);
}
