import React, { Component } from "react";
import styled from "styled-components";

const HomeHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 150px;
  min-height: 150px;
`;
const HomeHeaderTitle = styled.div`
  margin: 1rem;
  h1 {
    color: white;
    font-family: Helvetica;
    margin-bottom: 0.5rem;
    text-align: right;
  }
  h2 {
    color: white;
    font-size: 1rem;
    font-style: italic;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HomeHeader>
        <HomeHeaderTitle>
          <h1>Line Me Up</h1>
          <h2>Build your dream team line-up !</h2>
        </HomeHeaderTitle>
      </HomeHeader>
    );
  }
}
