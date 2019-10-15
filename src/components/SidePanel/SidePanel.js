import React from "react";
import { Menu } from "semantic-ui-react";

import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";

class SidePanel extends React.Component {
  render() {
    const { currentUser, secondaryColor } = this.props;

    return (
      <Menu
        fluid="true"
        inverted
        vertical
        style={{ background: "#262626", fontSize: "1rem" }}
      >
        <UserPanel secondaryColor={secondaryColor} currentUser={currentUser} />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;
