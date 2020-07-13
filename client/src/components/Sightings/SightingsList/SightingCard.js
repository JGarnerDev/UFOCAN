import React from "react";
import cleanString from "../../../functions/stringCleaner";

export default function SightingCard(props) {
	let sighting = props.sighting;
	let comments = cleanString(sighting.comments);

	return (
		<div id="SightingCard">
			<p>
				{sighting.City || sighting.city || (
					<small>{sighting.full_address.split(",")[0]}</small>
				)}{" "}
			</p>
			<h5>{sighting.province || sighting.Province}</h5>
			<small>{sighting.datetime}</small>
		</div>
	);
}
