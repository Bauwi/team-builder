//dz
import axios from "axios";
const initialFetchingIsLoading = bool => ({
  type: "INITIAL_FETCHING_IS_LOADING",
  bool
});

export const initialFetching = () => async dispatch => {
  dispatch(initialFetchingIsLoading(true));
  await dispatch(startSetDivision("455"));
  dispatch(initialFetchingIsLoading(false));
};

const setDivision = teams => ({
  type: "SET_DIVISION",
  teams
});

export const startSetDivision = divisionId => async dispatch => {
  const url = `https://api.football-data.org/v1/competitions/${divisionId}/teams`;
  const req = await axios.get(url, {
    headers: { "X-Auth-Token": "33efc18b62d6436281bfa54f600ab4c8" }
  });
  await dispatch(resetCurrentTeam());
  dispatch(setDivision(req.data.teams));
};

const setTeam = (players, name) => ({
  type: "SET_TEAM",
  name,
  players
});

const setTeamHasErrored = () => ({
  type: "SET_TEAM_HAS_ERRORED"
});

const setTeamIsFetching = bool => ({
  type: "SET_TEAM_IS_FETCHING",
  bool
});

export const startSetTeam = (teamId, teamName) => async dispatch => {
  dispatch(setTeamIsFetching(true));

  const url = `https://api.football-data.org/v1/teams/${teamId}/players`;
  const req = await axios.get(url, {
    headers: { "X-Auth-Token": "33efc18b62d6436281bfa54f600ab4c8" }
  });
  return dispatch(setTeam(req.data.players, teamName));
};

export const resetCurrentTeam = () => ({
  type: "RESET_CURRENT_TEAM"
});

export const selectSlot = slot => ({
  type: "SELECT_SLOT",
  slot
});
export const unselectSlot = () => ({
  type: "UNSELECT_SLOT"
});

export const addPlayerToBuildingTeam = player => ({
  type: "ADD_PLAYER_TO_BUILDING_TEAM",
  player
});

export const removePlayerFromBuildingTeam = slot => ({
  type: "REMOVE_PLAYER_FROM_BUILDING_TEAM",
  slot
});

export const selectFormation = formation => ({
  type: "SELECT_FORMATION",
  formation
});
