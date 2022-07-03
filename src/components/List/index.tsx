import { memo, useContext } from "react";

import useStyles from "components/List/styles";
import { DictionaryContext } from "context/dictionary";
import ListItem from "./ListItem";

const List = () => {
    const { dictionary } = useContext(DictionaryContext);
    const classes = useStyles();

    return (
        <div className={classes.listContainer}>
            {
                Object.values(dictionary).map((item, index) => (
                    <ListItem
                        item={item} 
                    />
                ))
            }
        </div>
    )
};

export default memo(List);
