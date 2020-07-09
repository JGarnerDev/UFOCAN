import React, { Component } from "react";

import { connect } from "react-redux";
import { setView } from "../store/actions";
import { bindActionCreators } from "redux";

class HomeContainer extends Component {
	componentWillMount() {
		this.props.setView("home");
	}

	render() {
		return <div id="Home"></div>;
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
