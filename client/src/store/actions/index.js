import axios from "axios";

const URL = "http://localhost:5000";

export function setView(view) {
	return {
		type: "SET_VIEW",
		payload: view,
	};
}
export function getInitialSelection() {
	const request = axios.get(`${URL}/canada/rand`).then((response) => {
		return response.data;
	});
	return {
		type: "GET_INITIAL_SELECTION",
		payload: request,
	};
}
