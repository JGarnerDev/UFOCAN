import React from "react";
import SightingsContainer from "../containers/Sightings_Container";

const Home = (props) => {
	return (
		<React.Fragment>
			<SightingsContainer {...props} />
		</React.Fragment>
	);
};

export default Home;
