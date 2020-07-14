import React from "react";
import SightingCardContainer from "../../../containers/SightingCard_Container";

const Home = (props) => {
	return (
		<React.Fragment>
			<SightingCardContainer {...props} />
		</React.Fragment>
	);
};

export default Home;
