import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PitchLine from "./PitchLine";
import PitchHeader from "./PitchHeader";

import JSONFormations from "../../utils/formations.json";

const PitchWrapper = styled.section`
  display: flex;
  background-image: url(images/football-field.svg);
  background-color: #333;
  border: 1vh solid rgb(218, 218, 218);
  border-radius: 10px;
  box-shadow: -1px 17px 132px -8px rgba(0, 0, 0, 0.75);
  flex: 70%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  max-width: 40%;
  margin: 7vh 3rem 1rem 1rem;
  padding: 3rem;
  @media (max-width: 700px) {
    flex: 1;
    max-width: 100%;
    margin: 0;
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
        <PitchComp>
          <PitchHeader />
          {this.renderFormation(this.props.formation)}
        </PitchComp>
      </PitchWrapper>
    );
  }
}

const mapStateToProps = state => ({
  formation: state.team.formation
});

export default connect(mapStateToProps)(Pitch);
