export default function (state = { current: null }, action) {
	switch (action.type) {
		case "SET_VIEW":
			return { ...state, current: action.payload };
		default:
			return state;
	}
}
