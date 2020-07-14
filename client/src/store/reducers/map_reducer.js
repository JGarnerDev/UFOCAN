export default function (
	state = {
		viewport: {
			width: "100%",
			height: "100%",
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
					zoom: action.payload.zoom || 7,
				},
			};

		default:
			return state;
	}
}
