import axios from "axios";
import API_KEY from "../keys/api_keys";
const initialFetchingIsLoading = bool => ({
  type: "INITIAL_FETCHING_IS_LOADING",
  bool
});

export const initialFetching = () => async dispatch => {
  dispatch(initialFetchingIsLoading(true));
  await dispatch(startSetDivision("455"));
  await dispatch(startSetTeam("86", "Real Madrid CF"));
  dispatch(initialFetchingIsLoading(false));
};

const setDivision = teams => ({
  type: "SET_DIVISION",
  teams
});

export const startSetDivision = divisionId => async dispatch => {
  const url = `http://api.football-data.org/v1/competitions/${divisionId}/teams`;
  const req = await axios.get(url, {
    headers: { "X-Auth-Token": API_KEY }
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
  try {
    const url = `http://api.football-data.org//v1/teams/${teamId}/players`;
    const req = await axios.get(url, {
      headers: { "X-Auth-Token": API_KEY }
    });
    await dispatch(setTeam(req.data.players, teamName));
    dispatch(setTeamIsFetching(false));
  } catch (error) {
    console.log(error);
    dispatch(setTeamHasErrored(true));
  }
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
