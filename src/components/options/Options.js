import React, { Component } from "react";
import styled from "styled-components";

import Header from "../Header";
import TeamPicker from "./TeamPicker";
import PlayersList from "./PlayersList";

const OptionsComp = styled.div`
  display: flex;
  flex-direction: column;
  flex: 30%;
  max-height: calc(100vh);
  max-width: 20vw;
  @media (max-width: 700px) {
    max-width: 100vw;
    width: 100%;
  }
`;

export default class Options extends Component {
  render() {
    return (
      <OptionsComp>
        <Header />
        <TeamPicker />
        <PlayersList />
      </OptionsComp>
    );
  }
}
