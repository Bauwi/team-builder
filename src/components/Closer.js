import React, { Component } from "react";
import styled from "styled-components";

const CloserContainer = styled.div``;

const CloserComp = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  outline: none;
  img {
    height: 50%;
    width: 50%;
  }
`;

export default class Closer extends Component {
  render() {
    return (
      <CloserContainer>
        <CloserComp onClick={this.props.onClose} position={this.props.position}>
          <img src="images/close.svg" alt="unselect-team" />
        </CloserComp>
      </CloserContainer>
    );
  }
}
