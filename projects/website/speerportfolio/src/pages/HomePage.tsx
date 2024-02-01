import React from 'react';
import NavBar from '../Nav';

import Box from '../components/Box'
import Grid from '../components/Grid'
import Header from '../components/Header';
import AboutContent from '../content/about';

import '../App.css';


function HomePage() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Grid container spacing="md">
        <Grid item cols={12}>
          <Box color='dark_gray' corners='rounder'>
            <h2> My proficiencies include... </h2>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={10}>
          <Grid container spacing="md">
            <Grid item cols={6}>
              <Box color='blue' corners='roundest'>
                <h2> Cloud Infrastructure </h2>
                <p> AWS, Docker, Terraform, Ansible </p>
              </Box>
            </Grid>
            <Grid item cols={6}>
              <Box color='gray' corners='rounder'>
                <h2> Programming </h2>
                <p> Python, Go, Clojure, Bash </p>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing="md">
            <Grid item cols={6}>
              <Box color='gray' corners='rounder'>
                <h2> Continuous Integration & Delivery </h2>
                <p> Concourse, CircleCI, Jenkins, Github Actions </p>
              </Box>
            </Grid>
            <Grid item cols={6}>
              <Box color='blue' corners='roundest'>
                <h2> Test Automation </h2>
                <p> Python, Selenium, Gridlastic, Terratest, Goss </p>
              </Box>
              <br />
              <Box color='gray' corners='rounder'>
                <h2> Frontend Development </h2>
                <p> Typescript, React </p>
              </Box>
            </Grid>
            <Grid item cols={1} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing="md">
        <Grid item cols={12}>
          <Box color='dark_gray' corners='rounder'>
            <h2> A little about me... </h2>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={1} />
        <Grid item cols={10}>
          <Box color='gray' corners='rounder'>
            <AboutContent />
          </Box>
        </Grid>
        <Grid item cols={1} />
      </Grid>

    </div >
  );
}

export default HomePage
