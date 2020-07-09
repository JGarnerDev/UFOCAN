import React, { Component } from "react";

import { connect } from "react-redux";
import { setView } from "../store/actions";
import { bindActionCreators } from "redux";

class LoginContainer extends Component {
	componentWillMount() {
		this.props.setView("login");
	}

	render() {
		return <div id="LogIn"></div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
