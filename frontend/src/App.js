import HomeScreen from './Screens/HomeScreen';
import { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';



export default function App() {

  // navScroll effect
  const [navScroll, setNavScroll] = useState(false);

  const addShadow = () => {
    if (window.scrollY >= 50){
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  }

  window.addEventListener('scroll', addShadow);
  // end navScroll effect

  return (
    <div className="App">
    <header className={ navScroll ? "header active" : "header"}>
      {/* To Do: Put sx overrides in to cardStyles.js */}
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <Typography variant="h4" color="black" noWrap >
          BioPlus
        </Typography>
        <Typography variant="h4" color="black" noWrap >
          Portfolio
        </Typography>
      </Toolbar>
    </header>
      <AppBar position="relative" sx={{height: "10rem", bgcolor: "white", boxShadow: "none"}} />
    <div>
      <HomeScreen />
    </div>
  </div>
  );
}
