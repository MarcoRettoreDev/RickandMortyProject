import { createContext, useReducer } from 'react';
import { Reducer } from '../Reducers/Reducer';

const myContext = createContext({});

const initialState = {
  page: 1,
  fetchType: '',
  totalPages: 1,
  searchInput: ''
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
