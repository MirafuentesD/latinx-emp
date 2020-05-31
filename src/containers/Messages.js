import React from "react";
import { Grid, Segment, Message } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Messages = () => (
  <Grid columns={1} divided>
    <Grid.Row >
      <Grid.Column>
        <Segment>Message 1</Segment>
        <Segment>Message 2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default Messages;
