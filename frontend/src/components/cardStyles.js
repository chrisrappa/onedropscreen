import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  titleText: {
    zIndex: '0',
    opacity: '0',
    '&:hover': {
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
    '&:hover': {
      zIndex: '1',
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
  }
  
}));