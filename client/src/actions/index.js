export function loggedIn() {
	return {
		type: "LOGGED_IN",
		payload: true,
	};
}
export function loggedOut() {
	return {
		type: "LOGGED_OUT",
		payload: false,
	};
}
export function onHomePage() {
	return {
		type: "ON_HOME_PAGE",
		payload: "home",
	};
}
export function onLogInPage() {
	return {
		type: "ON_LOGIN_PAGE",
		payload: "login",
	};
}
export function onAboutPage() {
	return {
		type: "ON_ABOUT_PAGE",
		payload: "about",
	};
}
