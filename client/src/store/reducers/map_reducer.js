export default function (
	state = {
		viewport: {
			width: "100%",
			height: "100%",
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
					zoom: action.payload.zoom || 7,
				},
			};
		case "CSI_ZOOM":
			return {
				...state,
				viewport: {
					...state.viewport,
					zoom: Math.max((state.viewport.zoom += action.payload), 2),
				},
			};

		default:
			return state;
	}
}
