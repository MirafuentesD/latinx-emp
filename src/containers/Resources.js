import React from 'react';
import {Grid, Segment, Message} from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

const Resources = () => (
    <Grid columns={1} divided>
        <Grid.Row>
            <Grid.Column stretched>
                <Segment>
                    Resource 1
                </Segment>
                <Segment>
                    Resource 2
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)
export default Resources;