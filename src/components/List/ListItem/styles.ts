import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    listItemContainer: {
        height: 40,
        margin: 10,
        paddingLeft: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid black',
    },
    listItemActionsContainer: {
        height: '100%',
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '1px solid red',
    }
});

export default useStyles;
