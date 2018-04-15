import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { selectFormation } from "./../../actions/team";

const FormationPickerComp = styled.div``;

export class FormationPicker extends Component {
  state = {
    value: "4-3-3"
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState(() => ({ value }));
    this.props.selectFormation(value);
  };

  render() {
    return (
      <FormationPickerComp>
        <select
          className="formation-select"
          onChange={this.handleChange}
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
