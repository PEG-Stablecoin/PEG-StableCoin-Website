import React, { Component } from "react";

import { Grid, Header, Icon, Segment, Placeholder } from "semantic-ui-react";

import Content from "./Content.js";

export default class HowItWorks extends Component {
	render() {
		return (
			<Content>
				<Grid centered verticalAlign="middle">
					<Grid.Column verticalAlign="middle">
						<Header as="h2" icon>
							<Icon name="question" />
							How does it work?
						</Header>
						<Segment>
							<p>This is how it works</p>
							<Placeholder>
								<Placeholder.Line />
								<Placeholder.Line />
								<Placeholder.Line />
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder>
						</Segment>
					</Grid.Column>
				</Grid>
			</Content>
		);
	}
}