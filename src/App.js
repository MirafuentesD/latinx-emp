import React from "react";
import "./App.css";
import { Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Messages from "./containers/Messages";
import NewsFeed from "./containers/NewsFeed";
import Resources from "./containers/Resources";

function App() {
  return (
    <Grid divided="vertically">
      <Grid.Row columns={1}>
        <Grid.Column textAlign="center">
          <Segment raised color="red">
            Kristal's LatinX Empowerment Website :)
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Segment raised color="red">
            Messages
          </Segment>
          <Messages />
        </Grid.Column>
        <Grid.Column>
          <Segment raised color="red">
            Messages
          </Segment>
          <NewsFeed />
        </Grid.Column>
        <Grid.Column>
          <Segment raised color="red">
            Resources
          </Segment>
          <Resources />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
