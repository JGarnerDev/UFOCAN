export default function (
	state = {
		data: [],
		showing: { latitude: 65, longitude: -100, zoom: 2.2 },
		region: "ca",
		amount: 10,
		sortOption: null,
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
			};

		case "SET_REGION":
			return { ...state, region: action.payload };
		case "SET_AMOUNT":
			return { ...state, amount: action.payload };
		case "SET_SORT_OPTION":
			return { ...state, sortOption: action.payload };

		default:
			return state;
	}
}
