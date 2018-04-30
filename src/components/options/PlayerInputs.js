import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PlayerInputsItem from "./PlayerInputsItem";

const PlayerInputsComp = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  margin: 0;
`;


export class PlayerInputs extends Component {
  renderInputs = () => {
    const { slots } = this.props;
    const slotsKeys = Object.keys(slots);
    return slotsKeys.map(slotKey => {
      return <PlayerInputsItem key={slotKey} slot={slotKey} />;
    });
  };

  render() {
    console.log(this.props.slots);
    return <PlayerInputsComp>{this.renderInputs()}</PlayerInputsComp>;
  }
}

const mapStateToProps = state => ({
  slots: state.team.slots
});

export default connect(mapStateToProps)(PlayerInputs);
