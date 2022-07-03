import React, { useReducer, Reducer } from 'react';

import { IDictionaryContextAction, IDictionaryProvider, IDictionaryContext, IDictionary } from 'types';

const initialState: IDictionary = {};

// TODO: Refactor during the redux swith
const reducer: Reducer<IDictionary, IDictionaryContextAction> = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
        case 'EDIT_ITEM':
            return { ...state, [action.payload.id]: action.payload };
        case 'DELETE_ITEM':
            delete state[action.payload.id];
            return { ...state }
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
