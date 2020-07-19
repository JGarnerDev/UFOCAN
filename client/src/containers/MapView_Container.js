import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CSI_zoom } from "../store/actions";

import Map from "../components/Map/Map";

class MapContainer extends Component {
	state = {
		showMeme: false,
	};
	componentDidMount() {
		this.props.setMapView(this.props.showing);
	}

	TOKEN =
		"pk.eyJ1IjoiZWxqZWZmZTM0NSIsImEiOiJja2Nrd2lkNzkwZjJtMnp0OGQ5ZWtmNGg1In0.WtyMk-JjexhuWsoXRKEQrA";

	render() {
		return (
			<div id="Sighting">
				<Map {...this.props} />

				<div id="zoom-toggle">
					{this.state.showMeme ? <div id="meme-img" /> : null}

					<div id="zoom-buttons">
						<button
							onClick={() => {
								this.props.CSI_zoom(0.5);
								window.setTimeout(() => {
									this.setState({
										showMeme: false,
									});
								}, 800);
								this.setState({
									showMeme: true,
								});
							}}
						>
							+
						</button>
						<button
							onClick={() => {
								this.props.CSI_zoom(-0.5);
								this.setState({
									showMeme: false,
								});
							}}
						>
							-
						</button>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		viewport: state.map.viewport,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ CSI_zoom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
