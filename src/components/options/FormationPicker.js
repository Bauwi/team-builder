import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { selectFormation } from "./../../actions/team";

const FormationPickerComp = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  select {
    flex: 1;
    border-radius: 0;
    cursor: pointer;
    display: flex;
    width: 50%;
    margin: 0.2rem;
    padding: 0px 15px;
    font-size: 16px;
    border: 1px solid #111;
    height: 40px;
    color: white;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    transition: all 0.5s ease;
    &:hover {
      color: lightblue;
      border: 1px solid lightblue;
      transition: all 0.5s ease;
    }
  }

  .formation-select {
    background: url(images/arrow-down.svg) 95% / 5% no-repeat rgba(0, 0, 0, 0.3);
    width: 100%;
  }
`;

export class FormationPicker extends Component {
  state = {
    formationValue: ""
  };

  handleChangeFormation = e => {
    const formationValue = e.target.value;
    this.setState(() => ({ formationValue }));
    this.props.selectFormation(formationValue);
  };

  render() {
    return (
      <FormationPickerComp>
        <select
          className="formation-select"
          onChange={this.handleChangeFormation}
          value={this.state.value}
        >
          <option value="fourThreeThree">4-3-3</option>
          <option value="fourFourTwo">4-4-2</option>
          <option value="fourTwoThreeOne">4-2-3-1</option>
        </select>
      </FormationPickerComp>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectFormation: formation => dispatch(selectFormation(formation))
});

export default connect(undefined, mapDispatchToProps)(FormationPicker);
