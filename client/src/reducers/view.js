export default function (state = {}, action) {
	switch (action.type) {
		case "ON_HOME_PAGE":
			return { ...state, view: action.payload };
		case "ON_LOGIN_PAGE":
			return { ...state, view: action.payload };
		case "ON_ABOUT_PAGE":
			return { ...state, view: action.payload };
		default:
			return state;
	}
}
