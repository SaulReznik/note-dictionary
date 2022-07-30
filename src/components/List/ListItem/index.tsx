import { memo, useCallback, useContext } from "react";

import { IDictionaryItem } from "context/types";
import useStyles from "./styles";
import { DictionaryContext } from "context/dictionary";

interface IListItem {
    item: IDictionaryItem;
}

const ListItem = ({ item }: IListItem) => {
    const classes = useStyles();

    const { dictionaryDispatch } = useContext(DictionaryContext);

    const handleDelete = useCallback(() => {
        dictionaryDispatch({
            type: 'DELETE_ITEM',
            payload: item,
        })
    }, [dictionaryDispatch, item]);

    return (
        <div className={classes.listItemContainer}>
            <span>{item.title} - {item.description}</span>
            <div className={classes.listItemActionsContainer}>
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
};

export default memo(ListItem);
