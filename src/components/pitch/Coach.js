import React, { Component } from "react";
import styled from "styled-components";

const CoachComp = styled.div`
  color: #111;
  font-family: Shadows Into Light;
  font-size: 14px;
  position: relative;
  top: -40vh;
  left: -50vw;
  width: 0;
  height: 0;

  label {
    font-family: Helvetica;
    font-style: italic;
    font-weight: 900;
    text-transform: uppercase;
  }

  input {
    background: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 5px;
    color: white;
    font-style: italic;
    font-weight: 900;
    outline: none;
    padding: 0.2rem 1rem;
    text-align: center;
    text-transform: uppercase;
    width: 100px;
    max-width: 10vw;

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
        <label htmlFor="coach">Coach</label>
        <input id="coach" type="text" placeholder="J. Stein" />
      </CoachComp>
    );
  }
}
