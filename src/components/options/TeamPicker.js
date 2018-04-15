import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { startSetDivision, initialFetching } from "./../../actions/team";

import TeamPickerItem from "./TeamPickerItem";
import FormationPicker from "./FormationPicker";
import SelectedTeam from "./SelectedTeam";

const TeamPickerComp = styled.div`
  width: 100%;
`;

const TeamList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  margin: 0;
  padding: 1rem;
`;

const TeamPickerInputs = styled.div`
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
  .division-select {
    background: url(images/arrow-down.svg) 95% / 7% no-repeat rgba(0, 0, 0, 0.3);
    width: 70%;
  }
  .formation-select {
    background: url(images/arrow-down.svg) 95% / 15% no-repeat
      rgba(0, 0, 0, 0.3);
    width: 100%;
  }
`;

export class TeamPicker extends Component {
  state = {
    value: "445"
  };

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

  handleChange = e => {
    const { value } = e.target;
    this.setState(() => ({ value }));
    this.props.startSetDivision(value);
  };

  render() {
    return (
      <TeamPickerComp>
        <TeamPickerInputs>
          <select
            className="division-select"
            onChange={this.handleChange}
            value={this.state.value}
          >
            <option value="445">Premier League</option>
            <option value="455">La Liga</option>
            <option value="452">Bundesliga</option>
            <option value="456">Serie A</option>
            <option value="450">Ligue 1</option>
          </select>
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
