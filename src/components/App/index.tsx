import { useCallback, useState } from 'react';

import Header from 'components/Header';
import List from 'components/List';
import useStyles from './styles';
import DictionaryItemModal from 'components/DictionaryItemModal';
import DictionaryProvider from 'context/dictionary';
import SearchProvider from 'context/search';

const App = () => {
  const [isDictionaryItemModalOpen, setIsDictionaryItemModalOpen] = useState(false);

  const classes = useStyles();

  const handleDictionaryItemModalToggle = useCallback(() => setIsDictionaryItemModalOpen(!isDictionaryItemModalOpen), [isDictionaryItemModalOpen]);

  return (
    <SearchProvider>
      <DictionaryProvider>
        <div className={classes.App}>
          <Header handleModalToggle={handleDictionaryItemModalToggle} />
          <List />
          {
            isDictionaryItemModalOpen ? <DictionaryItemModal handleModalToggle={handleDictionaryItemModalToggle} /> : null
          }
        </div>
      </DictionaryProvider>
    </SearchProvider>
  );
}

export default App;
