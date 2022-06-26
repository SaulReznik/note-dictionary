import { useCallback, useState } from 'react';

import Header from 'components/Header';
import List from 'components/List';
import useStyles from './styles';
import { IListItem } from 'types';
import NewItemModal from 'components/NewItemModal';

const App = () => {
  const [list, setList] = useState<IListItem[]>([]);
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);

  const classes = useStyles();

  const listHandler = useCallback((item: IListItem) => setList([...list, item]), [list]);
  const handleNewItemModalToggle = useCallback(() => setIsNewItemModalOpen(!isNewItemModalOpen), [isNewItemModalOpen]);

  return (
    <div className={classes.App}>
      <Header handleModalToggle={handleNewItemModalToggle} />
      <List list={list} />
      {
        isNewItemModalOpen ? <NewItemModal handleModalToggle={handleNewItemModalToggle} /> : null
      }
    </div>
  );
}

export default App;
