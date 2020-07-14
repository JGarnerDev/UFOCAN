import React, { Component } from "react";

import { connect } from "react-redux";
import {
	setRegion,
	setAmount,
	setSortOption,
	getSelection,
	setMapView,
} from "../store/actions";
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

	settings = ["Sort by new"];

	amounts = [10, 20, 50];

	renderRegionsMenu(regions) {
		return regions.map((region, i) => {
			return (
				<Dropdown.Item
					as="button"
					key={i}
					onClick={() => {
						this.props.setRegion(region.toLowerCase());
						this.props.getSelection(
							region,
							this.props.sightings.amount,
							this.props.sightings.sortOption
						);
						this.props.setMapView(region);
					}}
				>
					{region}
				</Dropdown.Item>
			);
		});
	}
	renderSettingsMenu(settings) {
		return settings.map((setting, i) => {
			return (
				<Dropdown.Item
					as="button"
					key={i}
					onClick={() => {
						this.props.setSortOption(setting);
						this.props.getSelection(
							this.props.sightings.region,
							this.props.sightings.amount,
							setting
						);
					}}
				>
					{setting}
				</Dropdown.Item>
			);
		});
	}
	renderAmountMenu(amounts) {
		return amounts.map((amount, i) => {
			return (
				<Dropdown.Item
					as="button"
					key={i}
					onClick={() => {
						this.props.setAmount(amount);
						this.props.getSelection(
							this.props.sightings.region,
							amount,
							this.props.sightings.sortOption
						);
					}}
				>
					{amount}
				</Dropdown.Item>
			);
		});
	}

	renderDropdownMenus(direction) {
		return (
			<div id="categories">
				<Dropdown drop={direction} id="top">
					<Dropdown.Toggle className="dropdown">Region</Dropdown.Toggle>
					<Dropdown.Menu>{this.renderRegionsMenu(this.regions)}</Dropdown.Menu>
				</Dropdown>
				<Dropdown drop={direction} id="top">
					<Dropdown.Toggle className="dropdown">Sorting</Dropdown.Toggle>
					<Dropdown.Menu>
						{this.renderSettingsMenu(this.settings)}
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown drop={direction} id="top">
					<Dropdown.Toggle className="dropdown">Display Amount</Dropdown.Toggle>
					<Dropdown.Menu>{this.renderAmountMenu(this.amounts)}</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	}

	render() {
		return (
			<Media query="(min-width: 600px)">
				{(matches) => {
					return matches ? (
						<div id="ListSettings">{this.renderDropdownMenus("left")}</div>
					) : (
						<div id="ListSettings">{this.renderDropdownMenus("down")}</div>
					);
				}}
			</Media>
		);
	}
}

function mapStateToProps(state) {
	return {
		sightings: state.sightings,
		region: state.sightings.region,
		sortOption: state.sightings.sortOption,
		amount: state.sightings.amount,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ setRegion, setAmount, setSortOption, getSelection, setMapView },
		dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListSettingsContainer);
