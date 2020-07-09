import React, { Component } from "react";

import { connect } from "react-redux";
import { setView } from "../store/actions";
import { bindActionCreators } from "redux";
import { Jumbotron, Container } from "react-bootstrap";

class HomeContainer extends Component {
	componentWillMount() {
		this.props.setView("home");
	}

	render() {
		return (
			<div id="Home">
				<Jumbotron fluid id="">
					<Container>
						<h1>Fluid jumbotron</h1>
						<p>
							This is a modified jumbotron that occupies the entire horizontal
							space of its parent.
						</p>
					</Container>
				</Jumbotron>
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
