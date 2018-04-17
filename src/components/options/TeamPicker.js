import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PlayersList from "./PlayersList";

import {
  startSetDivision,
  selectFormation,
  initialFetching
} from "./../../actions/team";

import TeamPickerItem from "./TeamPickerItem";
import SelectedTeam from "./SelectedTeam";

const TeamPickerComp = styled.div`
  width: 100%;
`;

const Pickers = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 1rem 0;
  height: 64.5vh;
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
    divisionValue: "445",
    formationValue: ""
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

  handleChangeDivision = e => {
    const divisionValue = e.target.value;
    this.setState(() => ({ divisionValue }));
    this.props.startSetDivision(divisionValue);
  };
  handleChangeFormation = e => {
    const formationValue = e.target.value;
    this.setState(() => ({ formationValue }));
    this.props.selectFormation(formationValue);
  };

  render() {
    return (
      <TeamPickerComp>
        <TeamPickerInputs>
          <select
            className="division-select"
            onChange={this.handleChangeDivision}
            value={this.state.value}
          >
            <option value="445">Premier League</option>
            <option value="455">La Liga</option>
            <option value="452">Bundesliga</option>
            <option value="456">Serie A</option>
            <option value="450">Ligue 1</option>
          </select>
          <div>
            <select
              className="formation-select"
              onChange={this.handleChangeFormation}
              value={this.state.value}
            >
              <option value="fourThreeThree">4-3-3</option>
              <option value="fourFourTwo">4-4-2</option>
              <option value="fourTwoThreeOne">4-2-3-1</option>
            </select>
          </div>
        </TeamPickerInputs>

        {this.props.currentTeamName ? (
          <div>
            <SelectedTeam
              selectedTeam={this.props.currentTeamName}
              onClose={this.handleResetTeam}
            >
              {this.props.currentTeamName}
            </SelectedTeam>
            <PlayersList />
          </div>
        ) : (
          <Pickers>{this.renderTeams()}</Pickers>
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
  selectFormation: formation => dispatch(selectFormation(formation)),
  initialFetching: () => dispatch(initialFetching())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamPicker);
