import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundComp = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 2rem;
  text-align: center;
`;

export default class NotFound extends Component {
  render() {
    return (
      <NotFoundComp>
        <h1>404 Not Found.</h1>
        <h2>The page you are looking for does not exist.</h2>
        <Link to="/">Home</Link>
      </NotFoundComp>
    );
  }
}
