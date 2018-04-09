import React, { Component } from "react";
import styled from "styled-components";

import Pitch from "./pitch/Pitch";
import Options from "./options/Options";

const Main = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Main>
          <Options />
          <Pitch />
        </Main>
      </div>
    );
  }
}
