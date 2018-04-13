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
    color: white;
    width: 70% !important;
  }
`;

export class TeamPickerItem extends Component {
  handleClick = () => {
    console.log(this.props.id);
    this.props.startSetTeam(this.props.id, this.props.name);
  };

  render() {
    return (
      <TeamItem>
        <div onClick={this.handleClick}>{this.props.name}</div>
      </TeamItem>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startSetTeam: (teamId, teamName) => dispatch(startSetTeam(teamId, teamName))
});

export default connect(undefined, mapDispatchToProps)(TeamPickerItem);
