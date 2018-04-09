import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import formatName from "../../utils/formatName";

import Closer from "./../Closer";
const PlayerCardContentContainer = styled.div`
  position: relative;
  top: -1vw;
  left: -19vw;
`;
const PlayerCardContentComp = styled.div`
  opacity: ${props => (props.isSelected ? "1" : "0")};
  display: flex;
  flex-wrap: wrap;
  border-radius: 50%;
  color: ${props =>
    props.isSelected ? "#01165C" : "rgba(255, 255, 255, 0.8)"};
  max-height: ${props => (props.isSelected ? "30vw" : "0")};
  min-height: ${props => (props.isSelected ? "30vw" : "0")};
  max-width: ${props => (props.isSelected ? "30vw" : "0")};
  min-width: ${props => (props.isSelected ? "30vw" : "0")};
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  transition: height 2s ease;
  section {
    align-items: center;
    color: white;
    display: flex;
    justify-content: center;
    min-height: 15vw;
    width: 100%;
  }
  .player-card-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin: 0;
    }
    img {
      height: 30%;
    }
  }
  .player-card-top {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h2 {
      color: white;
      font-size: 1rem;
    }
    p {
      border-bottom: 2px solid white;
      font-size: 3rem;
      margin: 0;
    }
  }
`;

export class PlayerCardContent extends Component {
  handleRemovePlayerFromTeam = () => {
    this.props.removePlayerFromBuildingTeam(this.props.slot);
  };

  render() {
    console.log(this.props.isFull);
    if (!this.props.player) {
      return (
        <PlayerCardContentContainer isFull={this.props.isFull}>
          <PlayerCardContentComp isSelected={this.props.isSelected}>
            <section className="player-card-top">Pick a player !</section>

            <section className="player-card-bottom">
              <img src="arrow.svg" alt="arrow" />
            </section>
          </PlayerCardContentComp>
        </PlayerCardContentContainer>
      );
    }

    const { name, jerseyNumber, position, dateOfBirth, nationality } =
      this.props.player && this.props.player;
    console.log(this.props.isSelected);
    const simplifiedName = name.split(" ");

    return (
      <PlayerCardContentContainer>
        <PlayerCardContentComp isSelected={this.props.isSelected}>
          <section className="player-card-top">
            <p>{jerseyNumber}</p>
            <h2>{name.toUpperCase()}</h2>
          </section>

          <section className="player-card-bottom">
            <p>{position}</p>
            <p>{dateOfBirth}</p>
            <p>{nationality}</p>
          </section>
        </PlayerCardContentComp>
      </PlayerCardContentContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

export default connect(undefined, mapDispatchToProps)(PlayerCardContent);
