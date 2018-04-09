import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Select, Tag } from "antd";

import { startSetDivision, initialFetching } from "./../../actions/team";

import TeamPickerItem from "./TeamPickerItem";
import FormationPicker from "./FormationPicker";
import SelectedTeam from "./SelectedTeam";

const { Option } = Select;

const TeamPickerComp = styled.div`
  width: 100%;
`;

const TeamList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 1rem 1rem 0 0;
`;

const TeamPickerInputs = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export class TeamPicker extends Component {
  componentDidMount() {
    this.props.initialFetching();
  }

  renderTeams = () => {
    return this.props.division.map(team => {
      const teamId = team._links.players.href.slice(38, 41).replace(/\D/g, "");
      return (
        <TeamPickerItem
          key={team.name}
          id={teamId}
          name={team.name}
          logoUrl={team.crestUrl}
        />
      );
    });
  };

  handleChange = value => {
    console.log("handleChange || ", "value: ", value);
    this.props.startSetDivision(value);
  };

  render() {
    return (
      <TeamPickerComp>
        <TeamPickerInputs>
          <Select
            defaultValue="455"
            style={{ width: 120 }}
            onChange={this.handleChange}
          >
            <Option value="445">Premier League</Option>
            <Option value="455">La Liga</Option>
            <Option value="452">Bundesliga</Option>
            <Option value="456">Serie A</Option>
            <Option value="450">Ligue 1</Option>
          </Select>
          <FormationPicker />
        </TeamPickerInputs>

        {this.props.currentTeamName ? (
          <SelectedTeam
            selectedTeam={this.props.currentTeamName}
            onClose={this.handleResetTeam}
          >
            {this.props.currentTeamName}
          </SelectedTeam>
        ) : (
          <TeamList>{this.renderTeams()}</TeamList>
        )}
      </TeamPickerComp>
    );
  }
}
const mapStateToProps = state => ({
  division: state.team.division,
  currentTeamName: state.team.currentTeam.name
});

const mapDispatchToProps = dispatch => ({
  startSetDivision: divisionId => dispatch(startSetDivision(divisionId)),
  initialFetching: () => dispatch(initialFetching())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamPicker);
