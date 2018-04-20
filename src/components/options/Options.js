import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { unselectSlot } from "../../actions/team";

import Header from "../Header";
import Closer from "../Closer";
import OptionsStrip from "./OptionsStrip";
import PlayerInputs from "./PlayerInputs";
import FormationPicker from "./FormationPicker";
import TeamNameInput from "./TeamNameInput";
import CoachInput from "./CoachInput";

const OptionsComp = styled.div`
  display: flex;
  max-height: 95vh;
  flex: 30%;
  max-width: 20vw;
  padding: 0 2vw;
  @media (max-width: 700px) {
    background: none;
    max-width: 100vw;
    max-height: 15%;
    width: 100%;
    padding: 0;
  }
`;

const OptionsContentComp = styled.div`
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 1rem;
  height: 75vh;  
  @media (max-width: 700px) {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    z-index: 999;
    min-height: 100vh;
    max-height: 100vh;
    width: 92vw;

    transform: ${props =>
      props.aSlotIsSelected ? "translateX(0)" : "translateX(-104vw)"};
  }
  transition: transform 0.2s ease;

  }

`;

const CloserWrapper = styled.div`

display: none;
@media (max-width: 700px) {
  display: flex;
  justify-content: right;
  padding: 1rem;
`;

export class Options extends Component {
  render() {
    console.log(this.props.aSlotIsSelected);
    return (
      <OptionsComp>
        <OptionsStrip />
        <div
          style={{
            maxWidth: "100%",
            width: "100%"
          }}
        >
          <Header />

          <OptionsContentComp aSlotIsSelected={this.props.aSlotIsSelected}>
            <CloserWrapper>
              <Closer onClose={() => this.props.unselectSlot()} />
            </CloserWrapper>
            <FormationPicker />
            <TeamNameInput />
            <PlayerInputs />
            <CoachInput />
          </OptionsContentComp>
        </div>
        <OptionsStrip />
      </OptionsComp>
    );
  }
}

const mapStateToProps = state => ({
  aSlotIsSelected: !!state.team.selectedSlot
});

const mapDispatchToProps = dispatch => ({
  unselectSlot: () => dispatch(unselectSlot())
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);
