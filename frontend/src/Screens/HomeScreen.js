import React, { useState, useEffect } from 'react';
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
import { Fade } from '@mui/material';


const theme = createTheme();

function HomeScreen (props) {

  const [hovered, setHovered] = useState(false);
  const numDogs = 10;
  
  const itemList = useSelector(state => state.itemList);
  const {items, loading, error} = itemList;
  
  const dispatch = useDispatch();
  const cardRef = React.useRef(null);
  const dogUrl = 'https://dog.ceo/api/breeds/image/random';

  useEffect(() => {
      dispatch(listItems(dogUrl, numDogs));
      // const dogs = (getDogs(cards.length));
      return () => {
        //
      }
  }, [dispatch]);

  


  return (
  <>
    
    {loading ? (
      <div>Loading...</div>
    ) : error? (
      <div>{error}</div>
    ) : (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Container sx={{ py: 3 }} maxWidth="100%">
            <Grid container spacing={1} sx={{width: '100%'}}>
              {items.map((item) => (
                <Grid item key={item._id} xs={12} sm={3} md={2.40} height={275}>
                  <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '0'}}
                  >
                    <CardContent
                      sx={{
                      position: 'relative', 
                      display: 'flex',
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      backgroundColor: 'rgba(219,219,219, 0.5)', 
                      width: '100%', 
                      height: '100%', 
                      padding: '0!important',
                      cursor: 'pointer',
                      }}
                    >
                      
                      <Fade in = {hovered === false} timeout = {500} >
                        <CardMedia
                            className = 'card-image'
                            sx={{position: 'absolute', height: '100%', padding: '0'}}
                            ref = {cardRef}
                            component="img"
                            image={item.message}
                            alt="random"
                            onMouseEnter = {() => setHovered(true)}
                            onMouseLeave = {() => setHovered(false)}
                          />
                      </Fade>
                      {/* Put all text in a div, then use grow/disappear, shink reappear function */}
                      <Typography sx={{ fontSize: 30 }} color="text.secondary" >
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