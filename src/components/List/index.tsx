import useStyles from "components/List/styles";

const List = () => {
    const classes = useStyles();

    return (
        <div className={classes.listContainer}>
            List
        </div>
    )
};

export default List;