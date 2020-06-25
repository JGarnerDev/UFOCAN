import React, { Component } from "react";

export default class List extends Component {
	constructor(props) {
		super(props);
	}

	renderList = () => {
		return this.props.data.map((listItem) => {
			console.log(listItem);

			return <div>{listItem.id}</div>;
		});
	};

	render() {
		return this.renderList();
	}
}
