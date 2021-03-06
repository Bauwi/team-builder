import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const CoachComp = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-family: Helvetica;
  font-size: 0.8rem;
  font-style: italic;
  text-transform: uppercase;
  min-height: 3vh;
`;
export class Coach extends Component {
  render() {
    return <CoachComp>{this.props.coach}</CoachComp>;
  }
}

const mapStateToProps = state => ({
  coach: state.team.coach
});

export default connect(mapStateToProps)(Coach);
