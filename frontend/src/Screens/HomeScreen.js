import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/itemActions';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Used to style components
import { useStyles } from '../components/cardStyles';
import { Fade } from '@mui/material';
import useInterval from 'react-useinterval';

const theme = createTheme();

export default function HomeScreen () {

  const classes = useStyles();

  const productList = useSelector(state => state.productList);
  const {products, loading, error} = productList;

  const dispatch = useDispatch();
  const productUrl = 'https://onedrop.today/products.json';
  const minute = 60000;
  
  // Grab products from the endpoint
  useEffect(() => {

    dispatch(listProducts(productUrl));

    // Call product list every minute
    const interval = setInterval(() => {
      dispatch(listProducts(productUrl));
    }, minute);

    return () => clearInterval(interval);

  }, [dispatch]);

  // Isolate product data then sort by descending price
  const productData = products?.data?.products;
  const sortedProducts = productData?.sort((a, b) => (parseInt(a.variants[0].price) < parseInt(b.variants[0].price)) ? 1 : -1);

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
              {sortedProducts?.map((product, index) => (
                <Grid item key={index} xs={12} sm={3} md={2.40} height={275}>
                  {product.variants[0].price !== '0.00' && (
                    <Fade in timeout={500 + (index * 100)}>
                      <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '0'}}
                      >
                        <CardContent
                          className = {classes.cardContent}
                        >
                          <CardMedia
                              className = {classes.cardImage}
                              image = {product.images[0].src}
                              component="img"
                              alt="random"
                          />
                          <Typography className = {classes.titleText}>
                            <Typography style={{fontSize: '2.5rem'}}>{product.title}</Typography>
                            <Typography style={{fontSize: '1.5rem'}}>{product.variants[0].price}</Typography>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Fade>
                  )}
                  
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