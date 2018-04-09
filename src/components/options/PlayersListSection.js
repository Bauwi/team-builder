import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import formatName from "../../utils/formatName";

import { addPlayerToBuildingTeam, unselectSlot } from "./../../actions/team";

const formatPosition = position =>
  position
    .split(/[-\s]/g)
    .map(word => word[0])
    .join("")
    .toUpperCase();

const PlayersListSectionComp = styled.div`
  border-right: 1px solid #0f2d00;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  width: 100%;
`;
const Player = styled.div`
  color: white;
  display: flex;
  font-family: Shadows Into Light;
  font-size: 12px;
  font-style: italic;
  font-weight: 900;
  justify-content: space-between;
  margin-right: 8px;
  padding: 0 7px;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  p {
    margin: 0;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

export class PlayersListSection extends Component {
  handlePlayerClick = player => {
    if (this.props.selectedSlot) {
      this.props.addPlayerToBuildingTeam(player);
      this.props.unselectSlot();
    }
  };

  renderPlayers = () => {
    if (this.props.linePlayers.length !== 0) {
      return this.props.linePlayers.map(player => {
        return (
          <Player
            key={player.name}
            onClick={() => this.handlePlayerClick(player)}
          >
            <p>{formatPosition(player.position)}</p>

            <p>{formatName(player.name)}</p>
          </Player>
        );
      });
    }
  };

  render() {
    return (
      <PlayersListSectionComp>{this.renderPlayers()}</PlayersListSectionComp>
    );
  }
}

const mapStateToProps = state => ({
  selectedSlot: state.team.buildingTeam.selectedSlot
});

const mapDispatchToProps = dispatch => ({
  addPlayerToBuildingTeam: player => dispatch(addPlayerToBuildingTeam(player)),
  unselectSlot: () => dispatch(unselectSlot())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersListSection);
