import { SearchContext } from 'context/search';
import { ChangeEventHandler, useCallback, useContext } from 'react';
import useStyles from './styles';

interface IHeader {
  handleModalToggle: () => void;
}

const Header = ({ handleModalToggle }: IHeader) => {
  const classes = useStyles();

  const { search, searchDispatch } = useContext(SearchContext);

  const searchItemHandler: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    searchDispatch({
      type: 'UPDATE_SEARCH_ITEM',
      payload: e.target.value,
    });
  }, [searchDispatch]);

  return (
    <div className={classes.headerContainer}>
      <div className={classes.inputsContainer}>
        <input
          value={search.searchItem}
          onChange={searchItemHandler}
          placeholder="Search..."
        />
      </div>
      <button onClick={handleModalToggle}>Add Item</button>
    </div>
  )
};

export default Header;
