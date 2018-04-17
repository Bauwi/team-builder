import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { startSetTeam } from "./../../actions/team";

const TeamItem = styled.li`
  color: white;
  cursor: pointer;
  display: flex;
  font-family: Helvetica;
  font-size: 12px;
  font-style: italic;
  font-weight: 900;
  justify-content: space-between;
  line-height: 0.7rem;

  width: 100%;
  min-width: 100%;
  max-width: 100%;
  transition: all ease 0.2s;
  p {
    width: 100%;
    margin: 0.3rem 0;
    text-transform: uppercase;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: lightblue;
    transition: all ease 0.5s;
  }
`;

export class TeamPickerItem extends Component {
  handleClick = () => {
    this.props.startSetTeam(this.props.id, this.props.name);
  };

  render() {
    return (
      <TeamItem>
        <p onClick={this.handleClick}>{this.props.name}</p>
      </TeamItem>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startSetTeam: (teamId, teamName) => dispatch(startSetTeam(teamId, teamName))
});

export default connect(undefined, mapDispatchToProps)(TeamPickerItem);
