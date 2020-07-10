import React from "react";

import { Dropdown } from "react-bootstrap";

export default function ListSettings(props) {
	return (
		<div id="ListSettings">
			<Dropdown drop={"left"} id="top">
				<Dropdown.Toggle className="dropdown">Province</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>All of Canada</Dropdown.Item>
					<Dropdown.Item>Alberta</Dropdown.Item>
					<Dropdown.Item> British Columbia</Dropdown.Item>
					<Dropdown.Item>Manitoba</Dropdown.Item>
					<Dropdown.Item>New Brunswick</Dropdown.Item>
					<Dropdown.Item>Newfoundland and Labrador</Dropdown.Item>
					<Dropdown.Item>Northwest Territories</Dropdown.Item>
					<Dropdown.Item>Nova Scotia</Dropdown.Item>
					<Dropdown.Item>Nunavut</Dropdown.Item>
					<Dropdown.Item>Ontario</Dropdown.Item>
					<Dropdown.Item>Prince Edward Island</Dropdown.Item>
					<Dropdown.Item>Quebec</Dropdown.Item>
					<Dropdown.Item>Saskatchewan</Dropdown.Item>
					<Dropdown.Item>Yukon</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown drop={"left"} id="bottom">
				<Dropdown.Toggle className="dropdown">Sort by</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>Newest</Dropdown.Item>
					<Dropdown.Item>Duration</Dropdown.Item>
					<Dropdown.Item>Size</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}
