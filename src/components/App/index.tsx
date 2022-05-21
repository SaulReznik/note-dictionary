import Header from 'components/Header';
import List from 'components/List';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Header />
      <List />
    </div>
  );
}

export default App;
