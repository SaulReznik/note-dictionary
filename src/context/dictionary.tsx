import React, { useReducer, Reducer } from 'react';

import { IDictionaryContextAction, IDictionaryProvider, IDictionaryContext, IDictionary } from './types';

const initialState: IDictionary = JSON.parse(localStorage.getItem('note-dictionary') || '{}') || {};

// TODO: Refactor during the redux swith
const reducer: Reducer<IDictionary, IDictionaryContextAction> = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
        case 'EDIT_ITEM':
            localStorage.setItem('note-dictionary', JSON.stringify({ ...state, [action.payload.id]: action.payload }))
            return { ...state, [action.payload.id]: action.payload };
        case 'DELETE_ITEM':
            delete state[action.payload.id];
            localStorage.setItem('note-dictionary', JSON.stringify({ ...state }))
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
