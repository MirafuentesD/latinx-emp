import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleStretched = () => (
  <Grid columns={1} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>News Story 1</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>News Story 2</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>News Story 3</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleStretched