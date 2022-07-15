import { ChangeEventHandler, useCallback, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DictionaryContext } from 'context/dictionary';
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
                id: uuidv4(),
                title,
                description,
            }
        })
        handleModalToggle();
    }, [title, description, dictionaryDispatch, handleModalToggle]);

    return (
        <div onClick={handleModalToggle} className={classes.newItemModalWrapper}>
            <div onClick={e => e.stopPropagation()} className={classes.newItemModal}>
                <button onClick={handleModalToggle} className={classes.newItemModalCloseButton}>Close</button>
                <div className={classes.inputsContainer}>
                    <input
                        value={title}
                        onChange={titleHandler}
                        placeholder="Write title..."
                    />
                    <textarea
                        value={description}
                        onChange={descriptionHandler}
                        placeholder="Write description..."
                    />
                    <button disabled={!(title && description)} onClick={addItemHandler}>add item</button>
                </div>
            </div>
        </div>
    )
};

export default NewItemModal;
