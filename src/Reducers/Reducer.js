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

    // case ActionTypes.SET_CHARACTERS:{
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     characters: action.payload
    //   }
    // }

    case ActionTypes.SET_SEARCH_INPUT:{
      return {
        ...state,
        searchInput: action.payload
      }
    }

    default: 
      return {...state}
  }
}

export { Reducer };
