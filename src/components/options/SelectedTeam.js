import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Closer from "./../Closer";

import { resetCurrentTeam } from "./../../actions/team";

const SelectedTeamComp = styled.div`
  align-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;

  font-family: Shadows Into Light;
  justify-content: flex-end;
  margin: 1rem 0 0 0;
  padding: 0.5rem;

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
`;

export class SelectedTeam extends Component {
  handleResetTeam = () => {
    this.props.resetCurrentTeam();
  };

  render() {
    return (
      <SelectedTeamComp>
        <p className="selected-team__name">
          {this.props.selectedTeam.toUpperCase()}
        </p>
        <Closer
          onClose={this.handleResetTeam}
          position={{ top: "-15px", right: "0", bottom: "0", left: "0px" }}
        />
      </SelectedTeamComp>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resetCurrentTeam: () => dispatch(resetCurrentTeam())
});

export default connect(undefined, mapDispatchToProps)(SelectedTeam);
