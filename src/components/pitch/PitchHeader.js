import React, { Component } from "react";
import styled from "styled-components";

import Coach from "./Coach";
import TeamName from "./TeamName";

const PitchHeaderComp = styled.header``;

export default class PitchHeader extends Component {
  render() {
    return (
      <PitchHeaderComp>
        <TeamName />
        <Coach />
      </PitchHeaderComp>
    );
  }
}
