import { createContext, useReducer } from 'react';
import { Reducer } from '../Reducers/Reducer';

const myContext = createContext({});

const initialState = {
  page: 1,
  totalPages: 1,
  searchInput: '',
  totalEpisodes: 0,
  totalLocations: 0,
  currentCharacters: [],
  pageInfo: []
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <myContext.Provider value={{state, dispatch}}>
      {children}
    </myContext.Provider>
  )
}

export { myContext }; 
export { initialState }
export default ContextProvider;
