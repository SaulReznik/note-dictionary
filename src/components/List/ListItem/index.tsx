import { memo, useCallback, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import { IDictionaryItem } from "types";
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
            <FontAwesomeIcon icon={faEdit} size='lg' />
            <FontAwesomeIcon icon={faTrashAlt} size='lg' onClick={handleDelete} />
            </div>
        </div>
    )
};

export default memo(ListItem);