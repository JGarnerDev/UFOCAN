export default function (
	state = {
		viewport: {
			width: "100%",
			height: "100%",
			latitude: 50,
			longitude: 50,
			zoom: 4,
		},
	},
	action
) {
	console.log(action.type);
	switch (action.type) {
		case "SET_MAP_VIEW":
			return {
				viewport: {
					width: "100%",
					height: "100%",
					latitude: action.payload.latitude,
					longitude: action.payload.longitude,
					zoom: 4,
				},
			};

		default:
			return state;
	}
}
