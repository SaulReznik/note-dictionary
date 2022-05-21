import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <input placeholder="Search..." />
      <button onClick={() => console.log('bruh man')}>Add Item</button>
    </div>
  )
};

export default Header;
