import React from "react";

export default function SightingCard(props) {
	let sighting = props.sighting[0];
	let description = sighting.Description.split("&#44").join(", ");
	return (
		<div id="SightingCard">
			{sighting.City ? (
				<div>
					{sighting.City}, {sighting.Province}
				</div>
			) : (
				<div>{sighting.Province}</div>
			)}
			<div>{sighting.Date}</div>
			<div>{description}</div>
		</div>
	);
}
