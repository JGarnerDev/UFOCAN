export default function (
	state = {
		viewport: {
			width: "100%",
			height: "100%",
			latitude: 50,
			longitude: 50,
			zoom: 6,
		},
	},
	action
) {
	switch (action.type) {
		case "SET_MAP_VIEW":
			return {
				viewport: {
					width: "100%",
					height: "100%",
					latitude: action.payload.latitude,
					longitude: action.payload.longitude,
					zoom: 6,
				},
			};

		default:
			return state;
	}
}
