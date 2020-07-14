import React, { Component } from "react";

import cleanString from "../../functions/stringCleaner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

class MapMarker extends Component {
	state = {
		showingComment: false,
	};
	render() {
		return (
			<div className="marker" style={{ zIndex: 0 }}>
				<FontAwesomeIcon
					icon={faRocket}
					size="1x"
					color={"red"}
					style={this.state.showingComment ? { opacity: 1 } : { opacity: 0.5 }}
					onMouseEnter={() => {
						this.setState({
							showingComment: true,
						});
					}}
					onMouseLeave={() => {
						this.setState({
							showingComment: false,
						});
					}}
				/>{" "}
				{this.state.showingComment ? (
					<div
						className="comment-popup"
						style={{ zIndex: Math.abs(this.props.longitude) }}
					>
						<p style={{ zIndex: Math.abs(this.props.longitude) }}>
							{cleanString(this.props.comments)}
						</p>
					</div>
				) : null}
			</div>
		);
	}
}

export default MapMarker;
