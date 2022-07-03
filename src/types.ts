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
    children: React.ReactChild;
}

export interface IDictionaryContext {
    dictionary: IDictionary;
    dictionaryDispatch: ({type, payload}: IDictionaryContextAction) => void;
}
