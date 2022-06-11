import useStyles from "components/List/styles";
import { IListItem } from "types";

interface IList {
    list: IListItem[],
}

const List = ({ list }: IList) => {
    const classes = useStyles();

    return (
        <div className={classes.listContainer}>
            {
                list.map((item, index) => (
                    <div>
                        <span>{item.title}</span> - <span>{item.description}</span>
                    </div>
                ))
            }
        </div>
    )
};

export default List;