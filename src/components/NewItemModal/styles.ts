import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    newItemModalWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 9,
        backgroundColor: '#00000080'
    },
    newItemModal: {
        height: 200,
        width: 200,
        zIndex: 14,
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
    }
});

export default useStyles;