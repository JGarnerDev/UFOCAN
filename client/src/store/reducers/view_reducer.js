export default function (state = { view: null }, action) {
	switch (action.type) {
		case "SET_VIEW":
			return { ...state, view: action.payload };
		default:
			return state;
	}
}
