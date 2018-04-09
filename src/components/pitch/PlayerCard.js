import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PlayerCardContent from "./PlayerCardContent";

import {
  selectSlot,
  unselectSlot,
  removePlayerFromBuildingTeam
} from "./../../actions/team";

const PlayerCardComp = styled.div`
  align-items: center;
  background: #134e5e;
  border: ${props =>
    props.isSelected ? "1vw solid white" : "0px solid white"};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: ${props => (props.isSelected ? "30vw" : "3vw")};
  min-width: ${props => (props.isSelected ? "30vw" : "3vw")};
  min-height: ${props => (props.isSelected ? "30vw" : "3vw")};
  max-height: ${props => (props.isSelected ? "30vw" : "3vw")};

  z-index: ${props => (props.isSelected ? "99" : "auto")};

  transition: all 0.2s ease;

  .bubble {
    display: flex;
    justify-content: center;
    height: 30vw;
    width: 100%;
  }

  .bubble-toggler {
    align-items: center;
    display: flex;
    background: rgba(255, 255, 255, 0.5);
    border: ${props =>
      props.isSelected ? "5px solid white" : "2px solid white"};
    border-radius: 50%;
    color: #134e5e;
    cursor: pointer;
    justify-content: center;
    min-height: ${props => (props.isSelected ? "4vw" : "3vw")};
    min-width: ${props => (props.isSelected ? "4vw" : "3vw")};
    text-align: center;
    transition: border 0.2s ease, min-height 0.2s ease, min-width 0.2s ease;
    outline: none;
    margin: auto 0;

    &:hover {
      background: #134e5e;
    }
    z-index: ${props => (props.isSelected ? "99" : "auto")};

    .bubble-toggler-number {
      color: white;
      font-weight: 900;
      margin: 0;
    }
  }

  .bubble-eraser {
    align-items: center;
    background: rgba(255, 0, 0, 1);
    border: ${props =>
      props.isSelected && props.isFull ? "5px solid white" : "0px solid white"};
    border-radius: 50%;
    box-sizing: content-box;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: ${props => (props.isSelected ? "3vw" : "2vw")};
    width: ${props => (props.isSelected && props.isFull ? "3vw" : "0vw")};
    margin: auto 0;
    transition: all 0.2s ease;
    opacity: ${props => (props.isSelected && props.isFull ? "1" : "0")};
    outline: none;
    text-align: center;

    &:hover {
      background: #134e5e;
    }
    z-index: ${props => (props.isSelected ? "99" : "auto")};
  }

  img {
    margin: auto;
    height: 60%;
    width: 60%;
  }

  .bubble-content {
    display: ${props => !props.isSelected && "none"};
    position: relative;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
  }
`;

export class PlayerCard extends Component {
  togglePlayerCard = () => {
    if (this.props.isSelected) {
      this.props.unselectSlot();
    } else {
      this.props.selectSlot(this.props.slot);
    }
  };

  handleRemovePlayerFromTeam = () => {
    this.props.removePlayerFromBuildingTeam(this.props.slot);
  };

  render() {
    const { isSelected, player } = this.props;
    return (
      <PlayerCardComp isSelected={isSelected} isFull={!!player}>
        <div className="bubble">
          <div className="bubble-toggler" onClick={this.togglePlayerCard}>
            {isSelected ? (
              <img src="close.svg" alt="close" />
            ) : (
              player && (
                <p className="bubble-toggler-number">{player.jerseyNumber}</p>
              )
            )}
          </div>

          <div
            className="bubble-eraser"
            onClick={this.handleRemovePlayerFromTeam}
          >
            <img src="delete.svg" alt="erase" />
          </div>

          <div className="bubble-content">
            <PlayerCardContent
              isFull={!!player}
              isSelected={isSelected}
              player={player}
              slot={this.props.slot}
            />
          </div>
        </div>
      </PlayerCardComp>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectSlot: slot => dispatch(selectSlot(slot)),
  unselectSlot: () => dispatch(unselectSlot()),
  removePlayerFromBuildingTeam: slot =>
    dispatch(removePlayerFromBuildingTeam(slot))
});

const mapStateToProps = (state, ownProps) => ({
  player: state.team.buildingTeam.slots[ownProps.slot]
});
export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);
