import { memo, useContext } from "react";

import useStyles from "components/List/styles";
import { DictionaryContext } from "context/dictionary";
import ListItem from "./ListItem";
import { SearchContext } from "context/search";

const List = () => {
    const { search } = useContext(SearchContext);
    const { dictionary } = useContext(DictionaryContext);
    const classes = useStyles();

    return (
        <div className={classes.listContainer}>
            {
                Object.values(dictionary)
                    .filter(item => !search.searchItem.trim() || item.title.startsWith(search.searchItem))
                    .map((item, index) => (
                        <ListItem
                            item={item}
                        />
                    ))
            }
        </div>
    )
};

export default memo(List);
