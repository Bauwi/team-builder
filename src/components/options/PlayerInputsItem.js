import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  selectSlot,
  addPlayerToBuildingTeam,
  setJerseyNumber
} from "../../actions/team";

const PlayerInputsItemComp = styled.li`
  color: ${props => (props.isSelected ? "lightblue" : "rgba(255,255,255,.5)")};
  display: flex;
  font-size: 0.7rem;
  justify-content: space-between;
  list-style-type: none;
  margin: 0.2rem;
  label {
    width: 20%;
  }
  input {
    background: none;
    border: none;
    border-bottom: ${props =>
      props.isSelected
        ? "1px solid lightblue"
        : "1px solid rgba(255,255,255,.3)"};
    color: ${props =>
      props.isSelected ? "lightblue" : "rgba(255,255,255,.5)"};
    margin: 0 0.5rem;
    width: 70%;
    text-transform: uppercase;
    outline: none;
  }
  .input-jersey   {
    width: 15%;
  }
`;

export class PlayerInputsItem extends Component {
  state = {
    value: this.props.playerName
  };
  handleChange = e => {
    const { value } = e.target;
    if (value.length <= 14) {
      this.props.addPlayerToBuildingTeam(value.toUpperCase());
    }
  };

  handleChangeJerseyNumber = e => {
    const { value } = e.target;
    if (value <= 99 && value > 0) {
      this.props.setJerseyNumber(value);
    }
  };
  render() {
    console.log(this.props.playerName);
    return (
      <PlayerInputsItemComp
        onFocus={() => this.props.selectSlot(this.props.slot)}
        isSelected={this.props.isSelected}
      >
        <label htmlFor={`${this.props.slot}-name`}>
          {parseInt(this.props.slot.slice(4, this.props.slot.length), 10) + 1}
        </label>
        <input
          id={`${this.props.slot}-name`}
          autoFocus={this.props.isSelected}
          value={this.props.playerName}
          type="text"
          onChange={this.handleChange}
          placeholder="player"
        />
        <input
          id={`${this.props.slot}-jersey`}
          className="input-jersey"
          autoFocus={this.props.isSelected}
          value={this.props.jerseyNumber}
          type="number"
          onChange={this.handleChangeJerseyNumber}
          placeholder="n°"
        />
      </PlayerInputsItemComp>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectSlot: slot => dispatch(selectSlot(slot)),
  addPlayerToBuildingTeam: player => dispatch(addPlayerToBuildingTeam(player)),
  setJerseyNumber: jersey => dispatch(setJerseyNumber(jersey))
});
const mapStateTopProps = (state, ownProps) => ({
  playerName: state.team.slots[ownProps.slot].name,
  jerseyNumber: state.team.slots[ownProps.slot].jersey,
  isSelected: state.team.selectedSlot === ownProps.slot
});

export default connect(mapStateTopProps, mapDispatchToProps)(PlayerInputsItem);
