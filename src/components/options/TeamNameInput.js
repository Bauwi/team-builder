import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setTeamName } from "../../actions/team";

const TeamNameInputComp = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
  font-style: italic;
  margin: 1rem;
  label {
    display: inline-block;
    color: white;
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }
  input {
    background: none;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    font-size: 0.8rem;
    outline: none;
    text-transform: uppercase;
    ::placeholder {
      font-size: 0.7rem;
      opacity: 0.5;
      color: white;
      font-style: italic;
    }
  }
`;

export class TeamNameInput extends Component {
  handleChange = e => {
    const { value } = e.target;
    if (value.length < 24) {
      this.props.setTeamName(value);
    }
  };
  render() {
    console.log(this.props.teamName);
    return (
      <TeamNameInputComp>
        <label htmlFor="team-name-input">TEAM</label>
        <input
          id="team-name-input"
          onChange={this.handleChange}
          type="text"
          placeholder="Tōhō"
          value={this.props.teamName}
        />
      </TeamNameInputComp>
    );
  }
}
const mapStateToProps = state => ({
  teamName: state.team.name
});
const mapDispatchToProps = dispatch => ({
  setTeamName: name => dispatch(setTeamName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamNameInput);
