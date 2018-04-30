import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PlayerCardContent from "./PlayerCardContent";

import { selectSlot, unselectSlot } from "./../../actions/team";

const PlayerCardComp = styled.div`
  align-items: center;
  background: #fff;
  border: ${props => (props.isSelected ? "1vw solid #111" : "0px solid white")};
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: ${props => (props.isSelected ? "20vw" : "3vw")};
  min-width: ${props => (props.isSelected ? "20vw" : "3vw")};
  min-height: ${props => (props.isSelected ? "20vw" : "3vw")};
  max-height: ${props => (props.isSelected ? "20vw" : "3vw")};

  opacity: 0.9;

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
    background: ${props =>
      props.isFull ? "rgba(0,0,0,.9)" : "rgba(0,0,0,.2)"};
    border: ${props =>
      props.isSelected ? "5px solid #111" : "2px solid white"};
    color: #134e5e;
    cursor: pointer;
    justify-content: center;
    min-height: ${props => (props.isSelected ? "4vw" : "3vw")};
    min-width: ${props => (props.isSelected ? "4vw" : "3vw")};
    text-align: center;
    transition: all ease 0.2s;
    outline: none;
    margin: auto 0;

    &:hover {
      background: #999;
      transform: scale(1.2);
      transition: transform 0.2s ease;
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
    box-sizing: content-box;
    color: #111;
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

    z-index: ${props => (props.isSelected ? "99" : "auto")};
  }

  img {
    margin: auto;
    height: 60%;
    width: 60%;
  }

  .bubble-content {
    opacity: ${props => (!props.isSelected ? "0" : "1")};
    position: relative;
    top: 0;
    left: 0;
    height: 0;
    width: 0;

    transition: opacity 2s ease;
  }

  @media (max-width: 700px) {
    max-width: ${props => (props.isSelected ? "50vw" : "7vw")};
    min-width: ${props => (props.isSelected ? "50vw" : "7vw")};
    min-height: ${props => (props.isSelected ? "50vw" : "7vw")};
    max-height: ${props => (props.isSelected ? "50vw" : "7vw")};
    .bubble-toggler {
      min-height: 7vw;
      min-width: 7vw;
    }
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

  render() {
    const { isSelected, player, jersey } = this.props;
    return (
      <PlayerCardComp isSelected={isSelected} isFull={!!player}>
        <div className="bubble">
          <div className="bubble-toggler" onClick={this.togglePlayerCard}>
            {isSelected ? (
              <img src="images/close.svg" alt="close" />
            ) : (
              player && <p className="bubble-toggler-number">{jersey}</p>
            )}
          </div>

          <div className="bubble-content">
            <PlayerCardContent
              isFull={!!player}
              isSelected={isSelected}
              player={player}
              jersey={jersey}
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
  unselectSlot: () => dispatch(unselectSlot())
});

const mapStateToProps = (state, ownProps) => ({
  player: state.team.slots[ownProps.slot].name,
  jersey: state.team.slots[ownProps.slot].jersey
});
export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);
