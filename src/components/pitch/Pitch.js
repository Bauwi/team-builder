import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PitchLine from "./PitchLine";
import Coach from "./Coach";

import JSONFormations from "../../utils/formations.json";

const PitchWrapper = styled.section`
  display: flex;
  background-image: url(images/pitch.svg);
  flex: 70%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  height: 70vh;
  max-width: 50%;
  margin: 5vh 1rem 1rem 3rem;
  padding: 3rem;
  @media (max-width: 700px) {
    height: 50vh;
    max-width: 100%;
  }
`;

const PitchComp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

export class Pitch extends Component {
  renderFormation = formation => {
    const lines = JSONFormations[formation];
    return lines.map((line, i) => {
      return <PitchLine key={line.id} line={line} />;
    });
  };
  render() {
    return (
      <PitchWrapper id="pitch">
        <PitchComp>{this.renderFormation(this.props.formation)}</PitchComp>
        <Coach />
      </PitchWrapper>
    );
  }
}

const mapStateToProps = state => ({
  formation: state.team.buildingTeam.formation
});

export default connect(mapStateToProps)(Pitch);
