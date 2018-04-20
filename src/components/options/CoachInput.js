import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setCoach } from "../../actions/team";

const CoachInputComp = styled.div`
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

export class CoachInput extends Component {
  handleChange = e => {
    const { value } = e.target;
    if (value.length < 24) {
      this.props.setCoach(value);
    }
  };
  render() {
    return (
      <CoachInputComp>
        <label htmlFor="coach-input">COACH</label>
        <input
          id="coach-input"
          onChange={this.handleChange}
          type="text"
          placeholder="Name your coach !"
          value={this.props.coach}
        />
      </CoachInputComp>
    );
  }
}
const mapStateToProps = state => ({
  coach: state.team.coach
});
const mapDispatchToProps = dispatch => ({
  setCoach: coach => dispatch(setCoach(coach))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachInput);
