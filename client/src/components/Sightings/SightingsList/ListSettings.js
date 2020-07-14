import React from "react";
import ListSettingsContainer from "../../../containers/ListSettings_Container";

const Home = (props) => {
	return (
		<React.Fragment>
			<ListSettingsContainer {...props} />
		</React.Fragment>
	);
};

export default Home;
