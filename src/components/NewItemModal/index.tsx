import { DictionaryContext } from 'context/dictionary';
import { ChangeEventHandler, useCallback, useContext, useState } from 'react';
import useStyles from './styles';

interface INewItemModal {
    handleModalToggle: () => void;
}

const NewItemModal = ({ handleModalToggle }: INewItemModal) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { dictionaryDispatch } = useContext(DictionaryContext);

    const classes = useStyles();
  
    const titleHandler: ChangeEventHandler<HTMLInputElement> = useCallback(e => setTitle(e.target.value), []);
    const descriptionHandler: ChangeEventHandler<HTMLTextAreaElement> = useCallback(e => setDescription(e.target.value), []);

    const addItemHandler = useCallback(() => {
        dictionaryDispatch({
            type: 'ADD_ITEM',
            payload: {
                title,
                description,
            }
        })
    }, [title, description, dictionaryDispatch]);

    return (
        <div onClick={handleModalToggle} className={classes.newItemModalWrapper}>
            <div onClick={e => e.stopPropagation()} className={classes.newItemModal}>
                <button onClick={handleModalToggle} className={classes.newItemModalCloseButton}>Close</button>
                <div className={classes.inputsContainer}>
                    <input
                        value={title}
                        onChange={titleHandler}
                        placeholder="Title..."
                    />
                    <textarea
                        value={description}
                        onChange={descriptionHandler}
                        placeholder="Description..."
                    />
                    <button onClick={addItemHandler}>add item</button>
                </div>
            </div>
        </div>
    )
};

export default NewItemModal;