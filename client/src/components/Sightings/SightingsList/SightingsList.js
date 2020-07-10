import React from "react";

import { Container } from "react-bootstrap";

import ListSettings from "./ListSettings";
import SightingCard from "./SightingCard";

let sightings = [];

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
			{renderCards(sightings)}
		</Container>
	);
}
