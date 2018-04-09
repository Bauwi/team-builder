import React, { Component } from "react";
import styled from "styled-components";

const HomeHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 110px;
  min-height: 110px;
`;
const HomeHeaderTitle = styled.div`
  margin: 1rem;
  img {
    height: 100%;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HomeHeader>
        <HomeHeaderTitle>
          <img src="LineMeUp.svg" alt="" />
        </HomeHeaderTitle>
      </HomeHeader>
    );
  }
}
