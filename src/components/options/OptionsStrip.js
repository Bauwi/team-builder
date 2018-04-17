import React, { Component } from "react";
import styled from "styled-components";

const OptionsStripComp = styled.span`
  background: rgba(0, 0, 0, 0.5);
  margin: 0 1rem;
  min-width: 10px;
  max-width: 10px;
  min-height: 100%;
  z-index: -1;
  @media (max-width: 700px) {
    display: none;
  }
`;

export default class OptionsStrip extends Component {
  render() {
    return <OptionsStripComp />;
  }
}
