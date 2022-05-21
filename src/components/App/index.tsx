import Header from 'components/Header';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Header />
    </div>
  );
}

export default App;
