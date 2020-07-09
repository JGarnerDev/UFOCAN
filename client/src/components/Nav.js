import React from "react";
import NavContainer from "../containers/Nav_Container";

export default function Nav(props) {
	return (
		<React.Fragment>
			<NavContainer {...props} />
		</React.Fragment>
	);
}
