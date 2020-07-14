import React, { Component } from "react";

import { connect } from "react-redux";
import { setRegion, getSelection, setMapView } from "../store/actions";
import { bindActionCreators } from "redux";

import { Dropdown } from "react-bootstrap";
import Media from "react-media";

class ListSettingsContainer extends Component {
	regions = [
		"CA",
		"AB",
		"BC",
		"MB",
		"NB",
		"NL",
		"NT",
		"NS",
		"NU",
		"ON",
		"PE",
		"QC",
		"SK",
		"YT",
	];

	renderDropdownItems(regions) {
		return regions.map((region, i) => {
			return (
				<Dropdown.Item
					as="button"
					key={i}
					onClick={() => {
						this.props.setRegion(region.toLowerCase());
						this.props.getSelection(region);
						this.props.setMapView(region);
					}}
				>
					{region}
				</Dropdown.Item>
			);
		});
	}

	renderDropdown(direction) {
		return (
			<div id="categories">
				<Dropdown drop={direction} id="top">
					<Dropdown.Toggle className="dropdown">Region</Dropdown.Toggle>
					<Dropdown.Menu>
						{this.renderDropdownItems(this.regions)}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	}

	render() {
		return (
			<Media query="(min-width: 600px)">
				{(matches) => {
					return matches ? (
						<div id="ListSettings">{this.renderDropdown("left")}</div>
					) : (
						<div id="ListSettings">{this.renderDropdown("down")}</div>
					);
				}}
			</Media>
		);
	}
}

function mapStateToProps(state) {
	return {
		sightings: state.sightings,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setRegion, getSelection, setMapView }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListSettingsContainer);
