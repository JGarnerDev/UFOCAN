import React, { Component } from "react";

import cleanString from "../../functions/stringCleaner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

class MapMarker extends Component {
	state = {
		showing: false,
	};
	render() {
		return (
			<div className="marker">
				<FontAwesomeIcon
					icon={faRocket}
					size="1x"
					color={"red"}
					onMouseEnter={() => {
						this.setState({
							showing: true,
						});
					}}
					onMouseLeave={() => {
						this.setState({
							showing: false,
						});
					}}
				/>{" "}
				{this.state.showing ? (
					<div className="comment-popup">
						{cleanString(this.props.comments)}
					</div>
				) : null}
			</div>
		);
	}
}

export default MapMarker;
