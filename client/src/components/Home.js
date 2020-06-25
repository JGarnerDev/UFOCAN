import React, { Component } from "react";
import axios from "axios";

import List from "../components/List";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: 0,
			end: 10,
			list: [],
		};
	}

	componentWillMount = () => {
		this.fetchData(this.state.start, this.state.end);
	};

	fetchData = (start, end) => {
		axios.post("/people", { start, end }).then((res) => {
			this.setState({
				list: [...this.state.list, ...res.data],
				start,
				end,
			});
		});
	};

	showMore = () => {
		this.fetchData(this.state.start + 10, this.state.end + 10);
	};

	render() {
		return (
			<div>
				{this.state.list ? (
					<div>
						<List data={this.state.list} />
						<button
							onClick={() => {
								this.showMore();
							}}
						>
							Show More
						</button>
					</div>
				) : (
					<div>loading...</div>
				)}
			</div>
		);
	}
}
