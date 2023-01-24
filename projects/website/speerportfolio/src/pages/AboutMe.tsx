import React from 'react';
import Box from '../components/Box'
import Grid from '../components/Grid'
import Header from '../components/Header';

import AboutContent from '../content/about';
import ContactContent from '../content/contact';
import photo from '../content/profile_photo.jpeg';
import NavBar from '../Nav';

import '../App.css';


function AboutMe() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Grid container spacing="lg">
        <Grid item cols={2} />
        <Grid item cols={4}>
          <Box color='dark_gray' corners='rounder'>
            <AboutContent />
            <ContactContent />
          </Box>
        </Grid>
        <Grid item cols={4}>
          <img src={photo} className="App-photo" alt="Headshot" />
        </Grid>
        <Grid item cols={2} />
      </Grid>

      <Grid container spacing="lg">
        <Grid item cols={2} />
        <Grid item cols={8}>
          <Box color='light_gray' corners='round'>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe
