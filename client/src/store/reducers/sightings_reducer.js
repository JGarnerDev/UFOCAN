export default function (
	state = {
		data: [],
		showing: { latitude: 65, longitude: -100, zoom: 2.2 },
		region: "ca",
	},
	action
) {
	switch (action.type) {
		case "GET_INITIAL_SELECTION":
			return {
				...state,
				data: action.payload,
			};
		case "GET_SELECTION":
			return {
				...state,
				data: action.payload,
				showing: action.payload[0],
			};

		case "SET_REGION":
			return { ...state, region: action.payload };

		default:
			return state;
	}
}
