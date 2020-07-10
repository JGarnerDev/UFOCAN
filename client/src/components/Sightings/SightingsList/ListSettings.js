import React from "react";

import { Dropdown } from "react-bootstrap";

export default function ListSettings(props) {
	return (
		<div id="ListSettings">
			<Dropdown drop={"left"}>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Province
				</Dropdown.Toggle>
				<Dropdown.Menu>
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
		</div>
	);
}
