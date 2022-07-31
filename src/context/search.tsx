import React, { useReducer, Reducer } from 'react';

import { ISearchAction, ISearchProvider, ISearchContext, ISearch } from './types';

const initialState = {
  searchItem: '',
};

// TODO: Refactor during the redux swith
const reducer: Reducer<ISearch, ISearchAction> = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_ITEM':
      return { ...state, searchItem: action.payload }
    default:
      return state;
  }
};

export const SearchContext = React.createContext({} as ISearchContext);

const SearchProvider = (props: ISearchProvider) => {
  const [search, searchDispatch] = useReducer(reducer, initialState);

  return (
    <SearchContext.Provider value={{ search, searchDispatch }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;
