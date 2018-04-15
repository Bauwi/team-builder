import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const PlayerCardContentContainer = styled.div`
  position: relative;
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

  section {
    align-items: center;
    color: #111;
    display: flex;
    justify-content: center;
    min-height: 15vw;
    width: ${props => (props.isSelected ? "100%" : "0")};
  }
  .player-card-bottom {
    display: ${props => (props.isSelected ? "flex" : "none")};
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
    display: ${props => (props.isSelected ? "flex" : "none")};
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h2 {
      color: #111;
      font-size: 1rem;
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
`;

export class PlayerCardContent extends Component {
  handleRemovePlayerFromTeam = () => {
    this.props.removePlayerFromBuildingTeam(this.props.slot);
  };

  render() {
    if (!this.props.player) {
      return (
        <PlayerCardContentContainer isFull={this.props.isFull}>
          <PlayerCardContentComp isSelected={this.props.isSelected}>
            <section className="player-card-top player-card-top--empty">
              Pick a player !
            </section>

            <section className="player-card-bottom">
              <img src="images/arrow.svg" alt="arrow" />
            </section>
          </PlayerCardContentComp>
        </PlayerCardContentContainer>
      );
    }

    const { name, jerseyNumber, position, dateOfBirth, nationality } =
      this.props.player && this.props.player;

    return (
      <PlayerCardContentContainer>
        <PlayerCardContentComp
          isSelected={this.props.isSelected}
          style={{ marginLeft: "-1vw" }}
        >
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
