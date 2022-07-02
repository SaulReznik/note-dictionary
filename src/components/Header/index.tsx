import { ChangeEventHandler, useCallback, useState } from 'react';
import useStyles from './styles';

interface IHeader {
  handleModalToggle: () => void;
}

const Header = ({ handleModalToggle }: IHeader) => {
  const [searchItem, setSearchItem] = useState('');
  const classes = useStyles();

  const searchItemHandler: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setSearchItem(e.target.value);
  }, []);

  return (
    <div className={classes.headerContainer}>
      <div className={classes.inputsContainer}>
        <input
          value={searchItem}
          onChange={searchItemHandler}
          placeholder="Search..."
        />
      </div>
      <button onClick={handleModalToggle}>Add Item</button>
    </div>
  )
};

export default Header;
