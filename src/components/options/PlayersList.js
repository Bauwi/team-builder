import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PlayersListSection from "./PlayersListSection";

import sortPlayers from "../../selectors/sortPlayers";

const PlayersListComp = styled.ul`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0 1rem;
`;

export class PlayersList extends Component {
  renderPlayersList = () => {
    const keepers = this.props.currentTeam.filter(
      player => player && player.line === 0
    );
    const backwards = this.props.currentTeam.filter(
      player => player && player.line === 1
    );
    const middles = this.props.currentTeam.filter(
      player => player && player.line === 2
    );
    const forwards = this.props.currentTeam.filter(
      player => player && player.line === 3
    );
    const team = [forwards, middles, backwards, keepers];

    return team.map((line, i) => {
      return <PlayersListSection key={i} linePlayers={line} />;
    });
  };

  render() {
    return <PlayersListComp>{this.renderPlayersList()}</PlayersListComp>;
  }
}

const mapStateToProps = state => ({
  currentTeam: sortPlayers(state.team.currentTeam, state.team.buildingTeam),
  initialFetching: state.team.loadings.initialFetching
});

export default connect(mapStateToProps)(PlayersList);
