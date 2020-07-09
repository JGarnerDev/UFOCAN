import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setViewToHome } from "../store/actions";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

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
	renderAboutLink() {
		return this.props.view !== null ? (
			<Nav.Link href="/about">About</Nav.Link>
		) : null;
	}

	render() {
		return (
			<Navbar bg="light" expand="sm">
				<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						{this.renderHomeLink()}
						<NavDropdown title="Sightings" id="basic-nav-dropdown">
							<NavDropdown.Item href="/sightings">All</NavDropdown.Item>
							<NavDropdown.Item href="/sightings">Nearest</NavDropdown.Item>
							<NavDropdown.Item href="/sightings">Most Recent</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/sightings">
								Post New UFO Sighting
							</NavDropdown.Item>
						</NavDropdown>

						{this.renderAboutLink()}
						{this.renderLogInLink()}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
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
	return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
