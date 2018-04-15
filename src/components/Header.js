import React, { Component } from "react";
import styled from "styled-components";

const HomeHeader = styled.header`
  display: flex;
  justify-content: center;
  height: 120px;
  min-height: 120px;

  margin-bottom: 1rem;
`;
const HomeHeaderTitle = styled.div`
  h1 {
    border-top: 2px solid #111;
    background: rgb(218, 218, 218);

    color: #111;
    font-family: Choplin;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 4px;
    text-align: center;
    white-space: nowrap;
    padding: 1rem 0 0 0;
    margin: 1rem 0 0 0;
  }
  h2 {
    border-bottom: 2px solid #111;
    background: rgb(218, 218, 218);

    color: grey;
    font-size: 1rem;
    font-style: italic;
    text-align: center;
    margin: 0;
    padding: 0 0 0.5rem 0;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HomeHeader>
        <HomeHeaderTitle>
          <h1>LINE ME UP</h1>
          <h2>Build your dream team line-up !</h2>
        </HomeHeaderTitle>
      </HomeHeader>
    );
  }
}
