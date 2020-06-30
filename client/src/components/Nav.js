import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { logOut, logIn, } from "../actions";

export default function Navigation() {
	const dispatch = useDispatch();
	const loggedIn = useSelector((state) => state.loggedIn);

	let logInOption = () => {
		
			return <Nav.Link onClick={()=> {dispatch(logIn())}} >Log In</Nav.Link>;
		
	};
	let logOutOption = () => {
	
			return <Nav.Link  onClick={()=> {dispatch(logOut())}}>Log Out</Nav.Link>;
		
	};

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
					{logInOption()}
					{logOutOption()}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
