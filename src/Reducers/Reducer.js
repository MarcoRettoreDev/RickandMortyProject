import { ActionTypes } from '../Helpers/ActionTypes';

const Reducer = (state, action) => {
  switch(action.type){
    case ActionTypes.SET_PAGE:{
      return {
        ...state,
        page: action.payload
      }
    }

    case ActionTypes.SET_TOTAL_PAGE:{
      return {
        ...state,
        totalPages: action.payload
      }
    }

    case ActionTypes.SET_TOTAL_EPISODES:{
      return {
        ...state,
        totalEpisodes: action.payload
      }
    }

    case ActionTypes.SET_TOTAL_LOCATIONS:{
      return {
        ...state,
        totalLocations: action.payload
      }
    }

    case ActionTypes.SET_SEARCH_INPUT:{
      return {
        ...state,
        searchInput: action.payload
      }
    }

    case ActionTypes.SET_PAGE_INFO:{
      return {
        ...state,
        pageInfo: action.payload
      }
    }

    case ActionTypes.SET_CURRENT_CHARACTERS:{
      return {
        ...state,
        currentCharacters: [action.payload, ...state.currentCharacters]
      }
    }

    default: 
      return {...state}
  }
}

export { Reducer };
