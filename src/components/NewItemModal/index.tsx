import { ChangeEventHandler, useCallback, useState } from 'react';
import useStyles from './styles';

const NewItemModal = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const classes = useStyles();
  
    const titleHandler: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
      setTitle(e.target.value);
    }, []);
  
    const descriptionHandler: ChangeEventHandler<HTMLTextAreaElement> = useCallback(e => {
      setDescription(e.target.value);
    }, []);

    return (
        <div className={classes.newItemModalWrapper}>
            <div className={classes.newItemModal}>
                <div className={classes.inputsContainer}>
                    <input
                        value={title}
                        onChange={titleHandler}
                        placeholder="Search..."
                    />
                    <textarea
                        value={description}
                        onChange={descriptionHandler}
                        placeholder="Description..."
                    />
                </div>
            </div>
        </div>
    )
};

export default NewItemModal;