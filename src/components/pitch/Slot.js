import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PlayerCard from "./PlayerCard";

import formatName from "./../../utils/formatName";

const SlotCompContainer = styled.div`
  min-height: 100%;
  min-width: 20%;
  margin: 0 1rem;
`;

const SlotComp = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 10vh;
  min-height: 10vh;
  min-width: 10vh;

  .slot-player-name {
    position: relative;
    height: 0;

    p {
      color: #fff;
      font-family: Shadows Into Light;
      font-style: italic;
      font-weight: 900;
      margin: 0;
      padding: 0.5rem 0 0 0;
      white-space: nowrap;
    }
  }
  @media (max-width: 700px) {
    .slot-player-name {
      p {
        font-size: 0.7rem;
      }
    }
  }
`;

export class Slot extends Component {
  render() {
    console.log(this.props.slot);

    const { player, isSelected } = this.props;
    return (
      <SlotCompContainer>
        <SlotComp isSelected={isSelected}>
          <PlayerCard slot={this.props.slot} isSelected={isSelected} />

          <div className="slot-player-name">
            <p>{player && !isSelected && formatName(player.name)}</p>
          </div>
        </SlotComp>
      </SlotCompContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isSelected: state.team.selectedSlot === ownProps.slot,
  player: state.team.slots[ownProps.slot]
});

export default connect(mapStateToProps)(Slot);
