import React, { Component } from "react";

import { connect } from "react-redux";
import { setView } from "../store/actions";
import { bindActionCreators } from "redux";
import { Jumbotron, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

class HomeContainer extends Component {
	componentWillMount() {
		this.props.setView("home");
	}

	render() {
		return (
			<div id="Home">
				<Jumbotron fluid id="jumbo">
					<Container id="text">
						<div>
							<h1>UFOCAN</h1>

							<p>
								<strong> Aliens. Sighted. In Canada. </strong>
							</p>
						</div>
						<FontAwesomeIcon icon={faUserSecret} id="jumbo-logo" size="6x" />
					</Container>
				</Jumbotron>
				<p id="description">
					This is a work in progress!
					<br />
					<br />
					So far, navigating to the 'sightings' page will display one UFO
					sighting per province/territory (selected randomly from our data
					collection), and you can read the author comments by hovering over
					them. Click one of the sightings in the list to the right to focus the
					map on it. Have fun!
					<br />
					<br />
					We're not super serious about aliens, we just happened to find a free
					data collection.
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	let view = state.view.view;
	return {
		view: view,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
