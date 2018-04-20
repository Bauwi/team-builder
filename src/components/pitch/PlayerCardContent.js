import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const PlayerCardContentContainer = styled.div`
  position: relative;
  left: -12.5vw;
  top: -1rem;
`;
const PlayerCardContentComp = styled.div`
  opacity: ${props => (props.isSelected ? "1" : "0")};
  display: flex;
  flex-wrap: wrap;
  color: ${props =>
    props.isSelected ? "#01165C" : "rgba(255, 255, 255, 0.8)"};
  max-height: ${props => (props.isSelected ? "20vw" : "0")};
  min-height: ${props => (props.isSelected ? "20vw" : "0")};
  max-width: ${props => (props.isSelected ? "20vw" : "0")};
  min-width: ${props => (props.isSelected ? "20vw" : "0")};
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #111;
    display: flex;
    justify-content: center;
    width: ${props => (props.isSelected ? "100%" : "0")};
  }
  .player-card-bottom {
    display: ${props => (props.isSelected ? "flex" : "none")};
    flex-direction: column;
    justify-content: flex-end;
    p {
      margin: 0;
    }
    img {
      height: 30%;
    }
  }
  .player-card-top {
    h2 {
      color: #111;
      font-size: 0.9rem;
    }
    p {
      border-bottom: 2px solid #111;
      font-size: 3rem;
      margin: 0;
    }
  }
  .player-card-top--empty {
    padding-left: 1rem;
    font-size: 1rem;
    font-weight: 900;
    font-family: Helvetica;
    font-style: italic;
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    .player-card-top {
      margin-top: ${props => (!props.isFull ? "-2rem" : "0")};
    }
    .player-card-bottom {
      margin: 3rem 0 0 -0.7rem;
      transform: ${props => !props.isFull && "rotate(-90deg)"};
    }
    .jersey-number {
      display: none;
    }
  }
`;

export default class PlayerCardContent extends Component {
  handleRemovePlayerFromTeam = () => {
    this.props.removePlayerFromBuildingTeam(this.props.slot);
  };

  render() {
    if (!this.props.player) {
      return (
        <PlayerCardContentContainer isFull={this.props.isFull}>
          <PlayerCardContentComp isSelected={this.props.isSelected} />
        </PlayerCardContentContainer>
      );
    }

    const { player, jersey } = this.props;
    console.log(player);
    return (
      <PlayerCardContentContainer>
        <PlayerCardContentComp
          isSelected={this.props.isSelected}
          style={{ marginLeft: "-1vw" }}
        >
          <section className="player-card-top">
            <p className="jersey-number">{jersey}</p>
          </section>

          <section className="player-card-bottom">
            <h2>{player}</h2>
          </section>
        </PlayerCardContentComp>
      </PlayerCardContentContainer>
    );
  }
}
