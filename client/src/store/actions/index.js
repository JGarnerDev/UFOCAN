import axios from "axios";

const URL = "http://localhost:5000";

// Website navigation

export function setView(view) {
	return {
		type: "SET_VIEW",
		payload: view,
	};
}

// Sighting Queries

export function setRegion(region) {
	return {
		type: "SET_REGION",
		payload: region,
	};
}
export function setAmount(amount) {
	return {
		type: "SET_AMOUNT",
		payload: amount,
	};
}
export function setSortOption(sortOption) {
	return {
		type: "SET_SORT_OPTION",
		payload: sortOption,
	};
}

export function getInitialSelection() {
	const request = axios({
		method: "post",
		url: `/sightings`,
		data: {
			region: "ca",
			amount: 10,
			sorting: null,
		},
	}).then((response) => {
		return response.data.map((nestedArray) => {
			return nestedArray[0];
		});
	});
	return {
		type: "GET_SELECTION",
		payload: request,
	};
}

export function getSelection(region, amount, sorting) {
	if (sorting === "Sort by new") {
		sorting = "datetime";
	}
	const request = axios({
		method: "post",
		url: `/sightings`,
		data: {
			region,
			amount,
			sorting,
		},
	}).then((response) => {
		return response.data.map((nestedArray) => {
			return nestedArray[0];
		});
	});
	return {
		type: "GET_SELECTION",
		payload: request,
	};
}

// Map display

export function setMapView(sighting) {
	switch (sighting) {
		case "CA":
			sighting = { zoom: 2.2, latitude: 65, longitude: -100 }; // Good
			break;
		case "AB":
			sighting = { zoom: 4, latitude: 55, longitude: -115 }; // Good
			break;
		case "BC":
			sighting = { zoom: 4, latitude: 55, longitude: -125 }; // Good
			break;
		case "MB":
			sighting = { zoom: 4, latitude: 55, longitude: -100 };
			break;
		case "NB":
			sighting = { zoom: 6, latitude: 46, longitude: -67 }; // Good
			break;
		case "NL":
			sighting = { zoom: 5.5, latitude: 49, longitude: -56.5 }; // Good
			break;
		case "NT":
			sighting = { zoom: 3, latitude: 70, longitude: -115 };
			break;
		case "NS":
			sighting = { zoom: 5, latitude: 45, longitude: -65 };
			break;
		case "NU":
			sighting = { zoom: 3, latitude: 65, longitude: -95 };
			break;
		case "ON":
			sighting = { zoom: 4, latitude: 50, longitude: -85 }; // Good
			break;
		case "PE":
			sighting = { zoom: 7, latitude: 46.5, longitude: -63.5 }; // Good
			break;
		case "QC":
			sighting = { zoom: 3.8, latitude: 54.5, longitude: -75 }; // Good
			break;
		case "SK":
			sighting = { zoom: 4.3, latitude: 55, longitude: -110 }; // Good
			break;
		case "YT":
			sighting = { zoom: 4, latitude: 65, longitude: -135 }; // Good
			break;

		default:
			break;
	}
	return {
		type: "SET_MAP_VIEW",
		payload: sighting,
	};
}
export function CSI_zoom(val) {
	return {
		type: "CSI_ZOOM",
		payload: val,
	};
}
