const teamDefaultState = {
  division: [],
  currentTeam: { players: [], name: "" },
  buildingTeam: {
    formation: "fourThreeThree",
    selectedSlot: null,
    slots: {
      slot0: null,
      slot1: null,
      slot2: null,
      slot3: null,
      slot4: null,
      slot5: null,
      slot6: null,
      slot7: null,
      slot8: null,
      slot9: null,
      slot10: null
    }
  },
  loadings: { currentTeam: true }
};

export default (state = teamDefaultState, action) => {
  switch (action.type) {
    case "INITIAL_FETCHING_IS_LOADING":
      return {
        ...state,
        loadings: { ...state.loadings, initialFetching: action.bool }
      };
    case "SET_DIVISION":
      return {
        ...state,
        division: action.teams
      };
    case "SET_TEAM":
      return {
        ...state,
        currentTeam: { players: action.players, name: action.name }
      };
    case "SET_TEAM_IS_FETCHING":
      return {
        ...state,
        loadings: { ...state.loadings, currentTeam: action.bool }
      };
    case "RESET_CURRENT_TEAM":
      return {
        ...state,
        currentTeam: teamDefaultState.currentTeam
      };

    case "SELECT_SLOT":
      return {
        ...state,
        buildingTeam: {
          ...state.buildingTeam,
          selectedSlot: action.slot
        }
      };
    case "UNSELECT_SLOT":
      return {
        ...state,
        buildingTeam: {
          ...state.buildingTeam,
          selectedSlot: null
        }
      };
    case "ADD_PLAYER_TO_BUILDING_TEAM":
      return {
        ...state,
        buildingTeam: {
          ...state.buildingTeam,
          slots: {
            ...state.buildingTeam.slots,
            [state.buildingTeam.selectedSlot]: action.player
          }
        }
      };

    case "REMOVE_PLAYER_FROM_BUILDING_TEAM":
      return {
        ...state,
        buildingTeam: {
          ...state.buildingTeam,
          slots: { ...state.buildingTeam.slots, [action.slot]: null }
        }
      };
    case "SELECT_FORMATION":
      return {
        ...state,
        buildingTeam: {
          ...state.buildingTeam,
          formation: action.formation
        }
      };
    default:
      return state;
  }
};
