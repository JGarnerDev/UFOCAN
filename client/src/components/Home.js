import React from "react";
import HomeContainer from "../containers/Home_Container";

const Home = (props) => {
	return (
		<React.Fragment>
			<HomeContainer {...props} />
		</React.Fragment>
	);
};

export default Home;
