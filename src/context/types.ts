// TODO: Make the types of contexts generic
export interface IDictionaryItem {
    id: string,
    title: string,
    description: string,
};

export interface IDictionary {
    [key: string]: IDictionaryItem;
}
export interface IDictionaryContextAction {
    type: string;
    payload: IDictionaryItem;
}

export interface IDictionaryProvider {
    children: JSX.Element;
}

export interface IDictionaryContext {
    dictionary: IDictionary;
    dictionaryDispatch: ({ type, payload }: IDictionaryContextAction) => void;
}

export interface ISearch {
    searchItem: string;
}

export interface ISearchAction {
    type: string;
    payload: string;
}

export interface ISearchProvider {
    children: JSX.Element;
}

export interface ISearchContext {
    search: ISearch;
    searchDispatch: ({ type, payload }: ISearchAction) => void;
}
