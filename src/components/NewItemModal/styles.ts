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
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        height: 500,
        width: 750,
        zIndex: 14,
    },
    newItemModalCloseButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
    }
});

export default useStyles;