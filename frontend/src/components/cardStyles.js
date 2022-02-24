import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  titleText: {
    zIndex: '1',
    opacity: '100%',
    color: 'black',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxWidth: '75%',
    textAlign: 'center',
    '&:hover': {
      opacity: '100%',
      cursor: 'pointer',
      transition: 'all .5s ease-in-out',
      transform: 'scale(1.1)'
   }
  },
  cardImage: {
    zIndex: '5',
    transition: 'all .22s ease-out',
    height: '100%', 
    padding: '0',
    backgroundColor: 'white',
    '&:hover': {
      cursor: 'pointer',
      transition: 'all .22s ease-in-out',
      transform: 'scale(2)',
      opacity: '0',
   }
  },
  cardContent: {
    position: 'relative', 
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(219,219,219, 0.5)', 
    width: '100%', 
    height: '100%', 
    padding: '0!important',
    cursor: 'pointer',
  },

  loading: {
    display: 'flex',
    width: '100%', 
    height: '70vh',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
}));