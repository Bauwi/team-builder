import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Select, Modal, Button } from "antd";

import { selectFormation } from "./../../actions/team";

const Option = Select.Option;

const FormationPickerComp = styled.div`
  top: 0;
`;

export class FormationPicker extends Component {
  handleChange = formation => {
    this.props.selectFormation(formation);
  };

  render() {
    return (
      <FormationPickerComp>
        <Select
          defaultValue="4-3-3"
          style={{ width: 120 }}
          onChange={this.handleChange}
        >
          <Option value="fourThreeThree">4-3-3</Option>
          <Option value="fourFourTwo">4-4-2</Option>
          <Option value="fourTwoThreeOne">4-2-3-1</Option>
        </Select>
      </FormationPickerComp>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectFormation: formation => dispatch(selectFormation(formation))
});

export default connect(undefined, mapDispatchToProps)(FormationPicker);
