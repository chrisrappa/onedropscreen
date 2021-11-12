import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listItems } from '../actions/itemActions';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// used to style components
import { useStyles } from '../components/cardStyles';

const theme = createTheme();

function HomeScreen () {

  // classes, items(dogs), dispatch, endpoint
  const classes = useStyles();
  const itemList = useSelector(state => state.itemList);
  const {items, loading, error} = itemList;
  const dispatch = useDispatch();
  const numDogs = 15;
  const dogUrl = 'https://dog.ceo/api/breeds/image/random';

  // dog enpoint is only hit numDogs times for each render
  useEffect(() => {
      dispatch(listItems(dogUrl, numDogs));
      return () => {
        //
      }
  }, [dispatch]);

  return (
  <>
    {loading ? (
      <div className = {classes.loading}><h1>Loading...</h1></div>
    ) : error? (
      <div>{error}</div>
    ) : (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Container sx={{ py: 3 }} maxWidth="100%">
            <Grid container spacing={1} sx={{width: '100%'}}>
              {items.map((item, index) => (
                <Grid item key={index} xs={12} sm={3} md={2.40} height={275}>
                  <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '0'}}
                  >
                    <CardContent
                      className = {classes.cardContent}
                    >
                      <CardMedia
                          className = {classes.cardImage}
                          component="img"
                          // This prop needs to be set based on response JSON (dogs API url was json.message)
                          image={item.message}
                          alt="random"
                      />
                        <Typography 
                        className = {classes.titleText}
                        sx={{ fontSize: 30, position: 'absolute'}} 
                        color="text.secondary" 
                        >
                          Card Title
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    )}
  </>
  );
}
    

export default HomeScreen;