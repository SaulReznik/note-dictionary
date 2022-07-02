import { useCallback, useState } from 'react';

import Header from 'components/Header';
import List from 'components/List';
import useStyles from './styles';
import NewItemModal from 'components/NewItemModal';
import DictionaryProvider from 'context/dictionary';

const App = () => {
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);

  const classes = useStyles();

  const handleNewItemModalToggle = useCallback(() => setIsNewItemModalOpen(!isNewItemModalOpen), [isNewItemModalOpen]);

  return (
    <DictionaryProvider>
      <div className={classes.App}>
        <Header handleModalToggle={handleNewItemModalToggle} />
        <List />
        {
          isNewItemModalOpen ? <NewItemModal handleModalToggle={handleNewItemModalToggle} /> : null
        }
      </div>
    </DictionaryProvider>
  );
}

export default App;
