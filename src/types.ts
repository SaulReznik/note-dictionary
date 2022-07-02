export interface IDictionaryItem {
    title: string,
    description: string,
};
export interface IDictionaryContextAction {
    type: string;
    payload: IDictionaryItem;
}


export interface IDictionaryProvider {
    children: React.ReactChild;
}

export interface IDictionaryContext {
    dictionary: IDictionaryItem[];
    dictionaryDispatch: ({type, payload}: IDictionaryContextAction) => void;
}
