import React, { Component } from "react";
import styled from "styled-components";

const CloserContainer = styled.div`
  position: relative;
  width: 0;
  height: 0;
`;

const CloserComp = styled.button`
  background: rgba(0, 0, 0, 0.2);
  border: none;
  position: relative;
  top: ${props => props.position.top};
  right: ${props => props.position.right};
  bottom: ${props => props.position.bottom};
  left: ${props => props.position.left};
  outline: none;
`;

export default class Closer extends Component {
  render() {
    return (
      <CloserContainer>
        <CloserComp onClick={this.props.onClose} position={this.props.position}>
          x
        </CloserComp>
      </CloserContainer>
    );
  }
}
