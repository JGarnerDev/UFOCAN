import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
				<Navbar.Brand href="/">UFOCAN</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown title="Sightings" id="basic-nav-dropdown">
							<NavDropdown.Item href="/sightings">All</NavDropdown.Item>
						</NavDropdown>
						{this.renderHomeLink()}
						{this.renderAboutLink()}
						{/* {this.renderLogInLink()} */}
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
