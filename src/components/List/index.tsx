import { useContext } from "react";

import useStyles from "components/List/styles";
import { DictionaryContext } from "context/dictionary";

const List = () => {
    const { dictionary } = useContext(DictionaryContext);
    const classes = useStyles();

    return (
        <div className={classes.listContainer}>
            {
                dictionary.map((item, index) => (
                    <div>
                        <span>{item.title}</span> - <span>{item.description}</span>
                    </div>
                ))
            }
        </div>
    )
};

export default List;