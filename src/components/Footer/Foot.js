import React from "react";
import { Grid } from "semantic-ui-react";

import { Segment, Icon } from "semantic-ui-react";

class Foot extends React.Component {
  render() {
    return (
      <Segment clearing>
        <Grid>
          <Grid.Column
            style={{ marginLeft: 0 }}
            floated="left"
            as="h5"
            fluid="true"
            textAlign="center"
            verticalAlign="middle"
          >
            <Icon name="github" style={{ marginLeft: 0 }} />
            <a target="_blank" href="https://github.com/wahyujus">
              github
            </a>
            <Icon name="linkedin" style={{ marginLeft: 19 }} />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wahyu-kharisma/"
            >
              linkedin
            </a>
            <Icon name="instagram" style={{ marginLeft: 19 }} />
            <a target="_blank" href="https://www.instagram.com/wahyujus/">
              instagram
            </a>
          </Grid.Column>
        </Grid>
        {/* Channel Title */}
      </Segment>
    );
  }
}

export default Foot;
