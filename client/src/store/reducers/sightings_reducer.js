export default function (state = { data: [], showing: null }, action) {
	switch (action.type) {
		case "GET_INITIAL_SELECTION":
			return {
				...state,
				data: action.payload,
				showing: action.payload[0],
			};

		default:
			return state;
	}
}
