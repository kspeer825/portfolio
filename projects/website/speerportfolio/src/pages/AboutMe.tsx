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

      <Grid container spacing="md">
        <Grid item cols={12}>
          <Box color="dark_gray" corners="rounder">
            <h2> A little about me... </h2>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={11}>
          <Box color="dark_gray" corners="rounder">
            <Grid container_gray spacing="md" >
              <Grid item cols={12}>
                <Box color="blue" corners="roundest">
                  <AboutContent />
                  <br />
                  <ContactContent />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid item cols={1} />
        </Grid>
      </Grid >

      <Grid container spacing="lg">
        <Grid item cols={1} />
        <Grid item cols={10}>
          <Box color="light_gray" corners="round">
          </Box>
          <Grid item cols={1} />
        </Grid>
      </Grid>

    </div >
  );
}
{/* <Grid container_gray spacing="md" >
    <Grid item cols={3} />
    <Grid item cols={6}>
    <img src={photo} className="App-photo" alt="Headshot" />
    </Grid>
    </Grid> */}

export default AboutMe
