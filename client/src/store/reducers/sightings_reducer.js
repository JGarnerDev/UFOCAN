export default function (state = { sightings: [] }, action) {
	switch (action.type) {
		case "GET_INITIAL_SELECTION":
			return { ...state, sightings: action.payload };
		default:
			return state;
	}
}
