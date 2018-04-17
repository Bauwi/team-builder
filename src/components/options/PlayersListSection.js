import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import formatName from "../../utils/formatName";
import formatPosition from "../../utils/formatPosition";

import { addPlayerToBuildingTeam, unselectSlot } from "./../../actions/team";

const PlayersListSectionComp = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  width: 100%;
`;
const Player = styled.div`
  color: white;
  cursor: pointer;
  display: flex;
  font-family: Helvetica;
  font-size: 12px;
  font-style: italic;
  font-weight: 900;
  justify-content: space-between;

  width: 100%;
  min-width: 100%;
  max-width: 100%;
  transition: all ease 0.2s;
  p {
    margin: 0.2rem 0;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: lightblue;
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
            <p>{formatName(player.name)}</p>
            <p>{formatPosition(player.position)}</p>
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
