import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Actors from './Actors/Actors';
import Movies from './Movies/Movies';
import Movieinformation from './MovieInformation/Movieinformation';
import Profile from './Profile/Profile';
import Navbar from './Navbar/Navbar';
import useStyles from './styles';
const App = () => {
    const classes=useStyles();
  return (
   
    <div className={classes.root}>
      <CssBaseline />
      <Navbar/>
      <main className={classes.content}>
      <div className={classes.toolbar}/>
        <Routes>
         
          <Route  path="/movie/:id" element={<Movieinformation/>} />
          <Route path="/actors/:id" element={<Actors/>} />
          <Route path="/" element={<Movies/>} />
          <Route  path="/profile/:id" element={<Profile/>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
