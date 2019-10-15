import React from "react";
import { Header, Segment, Input } from "semantic-ui-react";

class MessagesHeader extends React.Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading,
      isPrivateChannel
    } = this.props;

    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h3" floated="left" style={{ marginBottom: 0 }}>
          <span>
            {channelName}
            {!isPrivateChannel}
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
        </Header>

        {/* Channel Search Input */}
        <Header floated="right" as="h4">
          <Input
            loading={searchLoading}
            onChange={handleSearchChange}
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
