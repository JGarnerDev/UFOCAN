export default function (state = {}, action) {
	switch (action.type) {
		case "LOGGED_IN":
			return { ...state, loggedIn: action.payload };
		case "LOGGED_OUT":
			return { ...state, loggedIn: action.payload };
		default:
			return state;
	}
}
