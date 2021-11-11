import HomeScreen from './Screens/HomeScreen';
import { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';



function App() {

  const [navScroll, setNavScroll] = useState(false);

  const addShadow = () => {
    if (window.scrollY >= 50){
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  }

  window.addEventListener('scroll', addShadow);

  return (
    <div className="App">
    <header className={ navScroll ? "header active" : "header"}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <Typography variant="h4" color="black" noWrap >
          Biotech
        </Typography>
        <Typography variant="h4" color="black" noWrap >
          Portfolio
        </Typography>
      </Toolbar>
    </header>
      <AppBar position="relative" sx={{height: "10rem", bgcolor: "white", boxShadow: "none"}}>
        {/* <Toolbar sx={{display: 'flex', justifyContent: 'space-between', width: '100%', height: '100rem'}}>
          <Typography variant="h1" color="black" noWrap >
            Dog Photo Album
          </Typography>
        </Toolbar> */}
      </AppBar>
    <div>
      <HomeScreen />
    </div>
  </div>
  );
}

export default App;
