import React from 'react';
import NavBar from '../Nav';

import Box from '../components/Box'
import Grid from '../components/Grid'
import Header from '../components/Header';

import AboutContent from '../content/about';
import ContactContent from '../content/contact';

import '../App.css';


function HomePage() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Grid container spacing="md">
        <Grid item cols={12}>
          <Box color='dark_gray' corners='roundest'>
            <h2> My proficiencies include... </h2>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={6}>
          <Box color='gray' corners='roundest'>
            <h2> Cloud Infrastructure </h2>
            <p> AWS, Docker, Terraform, Ansible </p>
          </Box>
        </Grid>
        <Grid item cols={6}>
          <Box color='medium_gray' corners='roundest'>
            <h2> Database Management </h2>
            <p> PostgreSQL, Cassandra, MySQL, DynamoDB, MongoDB </p>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={6}>
          <Box color='medium_gray' corners='roundest'>
            <h2> Backend Development </h2>
            <p> Python, Go, Clojure, Bash </p>
          </Box>
        </Grid>

        <Grid item cols={6}>
          <Box color='gray' corners='roundest'>
            <h2> Continuous Integration & Delivery </h2>
            <p> Github Actions, Concourse, CircleCI, Jenkins </p>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={6}>
          <Box color='gray' corners='roundest'>
            <h2> Test Automation </h2>
            <p> Python, Selenium, Gridlastic, Goss, JQuery </p>
          </Box>
        </Grid>
        <Grid item cols={6}>
          <Box color='medium_gray' corners='roundest'>
            <h2> Frontend Development </h2>
            <p> Typescript, React </p>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={12} />
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={12}>
          <Box color='dark_gray' corners='rounder'>
            <h2> A little about me... </h2>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={11}>
          <Box color="dark_gray" corners="rounder">
            <Grid container_gray spacing="md" >
              <Grid item cols={12}>
                <Box color="medium_gray" corners="rounder">
                  <AboutContent />
                  <br />
                  <ContactContent />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid >


      <Grid container spacing="lg">
        <Grid item cols={12}>
          <br /><br /><br />
        </Grid>
      </Grid>
    </div >
  );
}

export default HomePage
