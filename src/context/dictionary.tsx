import React, { useReducer, Reducer } from 'react';

import { IDictionaryItem, IDictionaryContextAction, IDictionaryProvider, IDictionaryContext } from 'types';

const initialState: IDictionaryItem[] = [];

const reducer: Reducer<IDictionaryItem[], IDictionaryContextAction> = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [ ...state, action.payload ];
        default:
            return state;
    }
};

export const DictionaryContext = React.createContext({} as IDictionaryContext);

const DictionaryProvider = (props: IDictionaryProvider) => {
    const [dictionary, dictionaryDispatch] = useReducer(reducer, initialState);
    
    return (
        <DictionaryContext.Provider value={{ dictionary, dictionaryDispatch }}>
            {props.children}
        </DictionaryContext.Provider>
    )
}

export default DictionaryProvider;