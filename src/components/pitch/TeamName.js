import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const TeamNameComp = styled.div`
  color: white;
  font-family: Helvetica;
  font-style: italic;
  text-transform: uppercase;
  min-height: 3vh;
`;
export class TeamName extends Component {
  render() {
    return <TeamNameComp>{this.props.teamName}</TeamNameComp>;
  }
}

const mapStateToProps = state => ({
  teamName: state.team.name
});

export default connect(mapStateToProps)(TeamName);
