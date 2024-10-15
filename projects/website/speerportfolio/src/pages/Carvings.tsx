import React from 'react';

import Box from '../components/Box'
import Grid from '../components/Grid'
import Header from '../components/Header'
import NavBar from '../Nav';

import arch from '../content/woodworking/arch.JPG';
import ring1 from '../content/woodworking/ring_box_open.png';
import ring2 from '../content/woodworking/ring_box_closed.jpg';
import mantel from '../content/woodworking/mantel.jpg';
import planter from '../content/woodworking/planter.jpg';
import stand1 from '../content/woodworking/phonestand_books.jpg';
import stand2 from '../content/woodworking/phonestand_paintbrush.jpg';

import '../App.css';

function Carvings() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Grid container spacing="md">
        <Grid item cols={12}>
          <Box color='dark_gray' corners='rounder'>
            <h2 >
              Some woodworking...
            </h2>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={2}>
          <Box color='medium_gray' corners='roundest'>
            <img src={arch}  className="App-photo" alt="arch" />
	  </Box >
	</Grid >
        <Grid item cols={4}>
          <Box color='blue' corners='roundest'>
            <img src={ring1}  className="App-photo" alt="ring 1" />
	  </Box >
	</Grid >
        <Grid item cols={2}>
          <Box color='medium_gray' corners='roundest'>
            <img src={ring2}  className="App-photo" alt="ring 2" />
	  </Box >
        </Grid >
      </Grid >

      <Grid container spacing="md">
        <Grid item cols={2}>
          <Box color='blue' corners='roundest'>
            <img src={mantel}  className="App-photo" alt="mantel" />
	  </Box >
	</Grid >
        <Grid item cols={2}>
          <Box color='medium_gray' corners='roundest'>
            <img src={planter}  className="App-photo" alt="planter" />
	  </Box >
	</Grid >
        <Grid item cols={2}>
          <Box color='blue' corners='roundest'>
            <img src={stand1}  className="App-photo" alt="stnad 1" />
	  </Box >
	</Grid >
        <Grid item cols={2}>
          <Box color='medium_gray' corners='roundest'>
            <img src={stand2}  className="App-photo" alt="stnad 2" />
	  </Box >
	</Grid >
      </Grid >

      <Grid container spacing="lg">
        <Grid item cols={12}>
          <Box color='dark_gray' corners='round'>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing="lg">
        <Grid item cols={12}>
          <Box color='dark_gray' corners='round'>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing="lg">
        <Grid item cols={12}>
          <Box color='dark_gray' corners='round'>
          </Box>
        </Grid>
      </Grid>
    </div >
  );
}

export default Carvings
