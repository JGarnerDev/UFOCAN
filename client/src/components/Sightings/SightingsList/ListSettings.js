import React from "react";
import Media from "react-media";

import { Dropdown } from "react-bootstrap";

export default function ListSettings(props) {
	return (
		<Media query="(min-width: 600px)">
			{(matches) => {
				return matches ? (
					<div id="ListSettings">
						<Dropdown drop={"left"} id="top">
							<Dropdown.Toggle className="dropdown">Province</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item as="button">All of Canada</Dropdown.Item>
								<Dropdown.Item as="button"> AB</Dropdown.Item>
								<Dropdown.Item as="button">BC</Dropdown.Item>
								<Dropdown.Item as="button">MB</Dropdown.Item>
								<Dropdown.Item as="button">NB</Dropdown.Item>
								<Dropdown.Item as="button"> NL</Dropdown.Item>
								<Dropdown.Item as="button">NT</Dropdown.Item>
								<Dropdown.Item as="button"> NS</Dropdown.Item>
								<Dropdown.Item as="button">NU</Dropdown.Item>
								<Dropdown.Item as="button">ON</Dropdown.Item>
								<Dropdown.Item as="button">PE</Dropdown.Item>
								<Dropdown.Item as="button">QC</Dropdown.Item>
								<Dropdown.Item as="button">SK</Dropdown.Item>
								<Dropdown.Item as="button">YT</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown drop={"left"} id="bottom">
							<Dropdown.Toggle className="dropdown">Sort by</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item as="button">Newest</Dropdown.Item>
								<Dropdown.Item as="button">Duration</Dropdown.Item>
								<Dropdown.Item as="button">Size</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>{" "}
					</div>
				) : (
					<div id="ListSettings">
						<Dropdown drop={"down"} id="top">
							<Dropdown.Toggle className="dropdown">Province</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item as="button">All of Canada</Dropdown.Item>
								<Dropdown.Item as="button"> AB</Dropdown.Item>
								<Dropdown.Item as="button">BC</Dropdown.Item>
								<Dropdown.Item as="button">MB</Dropdown.Item>
								<Dropdown.Item as="button">NB</Dropdown.Item>
								<Dropdown.Item as="button"> NL</Dropdown.Item>
								<Dropdown.Item as="button">NT</Dropdown.Item>
								<Dropdown.Item as="button"> NS</Dropdown.Item>
								<Dropdown.Item as="button">NU</Dropdown.Item>
								<Dropdown.Item as="button">ON</Dropdown.Item>
								<Dropdown.Item as="button">PE</Dropdown.Item>
								<Dropdown.Item as="button">QC</Dropdown.Item>
								<Dropdown.Item as="button">SK</Dropdown.Item>
								<Dropdown.Item as="button">YT</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown drop={"down"} id="bottom">
							<Dropdown.Toggle className="dropdown">Sort by</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item as="button">Newest</Dropdown.Item>
								<Dropdown.Item as="button">Duration</Dropdown.Item>
								<Dropdown.Item as="button">Size</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>{" "}
					</div>
				);
			}}
		</Media>
	);
}
