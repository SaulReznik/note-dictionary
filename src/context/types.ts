export interface IContextState<Item> {
    [key: string]: Item;
}

export interface IContextAction<Item> {
    type: string;
    payload: Item;
}

export interface IDictionaryItem {
    id: string,
    title: string,
    description: string,
};

export interface IDictionaryProvider {
    children: React.ReactChild;
}

export interface IContext<Item> {
    dictionary: IContextState<Item>;
    dictionaryDispatch: ({ type, payload }: IContextAction<Item>) => void;
}

