import React, { Component } from "react";
import { connect } from "react-redux";
import { Tag } from "antd";

import styled from "styled-components";

import { startSetTeam } from "./../../actions/team";

const TeamItem = styled.li`
  border-right: 2px solid white;
  display: flex;
  justify-content: flex-end;
  flex: 60%;
  div {
    width: 70% !important;
  }
`;

export class TeamPickerItem extends Component {
  handleClick = () => {
    this.props.startSetTeam(this.props.id, this.props.name);
  };

  render() {
    return (
      <TeamItem>
        <Tag onClick={this.handleClick}>{this.props.name}</Tag>
      </TeamItem>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startSetTeam: (teamId, teamName) => dispatch(startSetTeam(teamId, teamName))
});

export default connect(undefined, mapDispatchToProps)(TeamPickerItem);
