import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Navbar, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

class NavContainer extends Component {
	renderLogInLink() {
		return this.props.view !== "login" ? (
			<Nav.Link href="/login">Log in</Nav.Link>
		) : null;
	}
	renderHomeLink() {
		return this.props.view !== "home" ? (
			<Nav.Link href="/">Home</Nav.Link>
		) : null;
	}
	renderSightingsLink() {
		return this.props.view !== "sightings" ? (
			<Nav.Link href="/sightings" id="sightings-link">
				Sightings
			</Nav.Link>
		) : null;
	}
	renderAboutLink() {
		return this.props.view !== null ? (
			<Nav.Link href="/about">About</Nav.Link>
		) : null;
	}

	render() {
		return (
			<Navbar bg="dark" variant="dark" expand="sm" fixed="top">
				<Navbar.Brand href="/">
					<FontAwesomeIcon icon={faUserSecret} id="jumbo-logo" size="2x" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						{this.renderHomeLink()}
						{this.renderSightingsLink()}
						{this.renderAboutLink()}
						{/* {this.renderLogInLink()} */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

function mapStateToProps(state) {
	let current = state.view.current;
	return {
		view: current,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
