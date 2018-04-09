import React, { Component } from "react";
import styled from "styled-components";

const ScreenshotComp = styled.div`
  align-content: center;
  border: ${props => (props.isOpen ? "20px solid white" : "2px solid white")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: ${props => (props.isOpen ? "-200px" : "25px")};
  right: ${props => (props.isOpen ? "-200px" : "25px")};

  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: ${props => (props.isOpen ? "500px" : "50px")};
  height: ${props => (props.isOpen ? "500px" : "50px")};
  transition: all 0.5s ease;

  button:first-child {
    position: fixed;
    bottom: ${props => (props.isOpen ? "5px" : "25px")};
    right: ${props => (props.isOpen ? "5px" : "25px")};
    background: rgba(255, 255, 255, 0.3);
    border: ${props => (props.isOpen ? "20px solid white" : "2px solid white")};
    border-radius: 50%;
    height: ${props => (props.isOpen ? "90px" : "50px")};
    width: ${props => (props.isOpen ? "90px" : "50px")};
    transition: border 0.5s ease;
    z-index: 99;
  }

  img {
    margin: auto;
    height: 50%;
    width: 50%;
  }

  .screenshot-content {
    opacity: 0;

`;

export default class Screenshot extends Component {
  state = {
    open: false
  };

  render() {
    console.log(this.state.open);
    return (
      <ScreenshotComp isOpen={this.state.open}>
        <button
          onClick={() =>
            this.setState(prevState => ({ open: !prevState.open }))
          }
        >
          <img src="camera.svg" alt="camera" />
        </button>
        <div className="screenshot-content">
          <h2>Get a snapshot</h2>
          <button>CHeez !</button>
        </div>
      </ScreenshotComp>
    );
  }
}
