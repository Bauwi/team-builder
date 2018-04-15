import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Closer from "./../Closer";

import { resetCurrentTeam } from "./../../actions/team";

const SelectedTeamComp = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #111;
  color: white;
  display: flex;

  font-family: Shadows Into Light;
  justify-content: space-between;
  margin: 0.2rem 0 0 0.2rem;
  padding: 0.5rem;

  min-height: 10px;
  transition: all ease 0.5s;

  p {
    margin: 0;
  }
  .selected-team__name {
    font-size: 1rem;
  }
  .selected-team__cross {
    align-content: center;
    font-size: 0.7rem;
  }

  &:hover {
    border: 1px solid lightblue;
    color: lightblue;
    transition: all ease 0.5s;
  }
`;

export class SelectedTeam extends Component {
  handleResetTeam = () => {
    this.props.resetCurrentTeam();
  };

  render() {
    return (
      <SelectedTeamComp>
        <Closer
          onClose={this.handleResetTeam}
          position={{ top: "-15px", right: "0", bottom: "0", left: "0px" }}
        />
        <p className="selected-team__name">
          {this.props.selectedTeam.toUpperCase()}
        </p>
      </SelectedTeamComp>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resetCurrentTeam: () => dispatch(resetCurrentTeam())
});

export default connect(undefined, mapDispatchToProps)(SelectedTeam);
