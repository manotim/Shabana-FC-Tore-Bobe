import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  jerseyImage: {
    flex: 1,
    marginRight: theme.spacing(2),
    width: '70%', // Reduce the width of the image
  },
  jphoto: {
    width: '70%',
  },
  sizeContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  sizeRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeSquare: {
    width: 40,
    height: 40,
    backgroundColor: '#f3e5ca',
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#ffcc00',
    },
  },
}));

function JerseySales() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.jerseyImage}>
        <h1>SHABANA 23/24 HOME SHIRT</h1>
        <img className={classes.jphoto}
          src="https://pbs.twimg.com/media/FyQlByqXoAMdTE8.jpg:large"
          alt="Jersey"
        />
      </div>
      <div className={classes.sizeContainer}>
        <h3>Choose Your Size</h3>
        <div className={classes.sizeRow}>
          <div className={classes.sizeSquare}>L</div>
          <div className={classes.sizeSquare}>M</div>
          <div className={classes.sizeSquare}>S</div>
          <div className={classes.sizeSquare}>XL</div>
          <div className={classes.sizeSquare}>XXL</div>
        </div>
      </div>
    </div>
  );
}

export default JerseySales;
