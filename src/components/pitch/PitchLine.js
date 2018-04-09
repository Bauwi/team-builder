import React, { Component } from "react";
import styled from "styled-components";

import Slot from "./Slot";

const PitchLineComp = styled.section`
  display: flex;
  min-height: 15%;
  max-height: 15%;
  justify-content: ${props => props.justifyContent};
`;

export default class PitchLine extends Component {
  renderPitchLineSlots = () => {
    const { slots } = this.props.line;
    return slots.map(slot => {
      return <Slot key={slot} slot={slot} />;
    });
  };

  render() {
    return (
      <PitchLineComp justifyContent={this.props.line.justifyContent}>
        {this.renderPitchLineSlots()}
      </PitchLineComp>
    );
  }
}
