import React from "react";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Navigation() {
	return (
		<Navbar bg="light" expand="md" fixed="top" collapseOnSelect="true">
			<Navbar.Brand href="/"></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>

					<NavDropdown title="Sightings" id="basic-nav-dropdown">
						<NavDropdown.Item href="/new">Newest</NavDropdown.Item>

						<NavDropdown.Item href="/closest">Closest</NavDropdown.Item>

						<NavDropdown.Item href="/coolest">Coolest</NavDropdown.Item>

						<NavDropdown.Item href="/canada">Across Canada</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
