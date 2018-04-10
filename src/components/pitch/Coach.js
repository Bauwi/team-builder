import React, { Component } from "react";
import styled from "styled-components";

const CoachComp = styled.form`
  color: white;
  font-family: Shadows Into Light;
  font-size: 14px;
  position: relative;
  top: -40vh;
  left: -45vw;
  width: 0;
  height: 0;

  input {
    background: transparent;
    border: none;
    border-bottom: 2px solid white;
    font-style: italic;
    font-weight: 900;
    outline: none;
    text-align: center;
    text-transform: uppercase;
    width: 10vw;

    ::placeholder {
      opacity: 0.5;
      color: white;
      font-style: italic;
      font-weight: 900;
    }
  }
`;

export default class Coach extends Component {
  render() {
    return (
      <CoachComp>
        <input type="text" placeholder="Coach" />
      </CoachComp>
    );
  }
}
