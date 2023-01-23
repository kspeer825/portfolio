import React from 'react';
import Box from '../components/Box'
import Grid from '../components/Grid'
import Header from '../components/Header'
import NavBar from '../Nav';
import '../App.css';

function Projects() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Grid container spacing="lg">
        <Grid item cols={12}>
          <Box color='light_gray' corners='round'>
            <h1 >
              *******************************************<br />
              This page is a WIP. Please check back soon!<br />
              *******************************************<br />
            </h1>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">

        <Grid item cols={4}>
          <Box color='blue' corners='rounder'>
            <h2> Infrastructure </h2>
            <h4> Tooling </h4>
            <ul>
              <p> AWS, Terraform, Go </p>
            </ul>
            <h4> Projects </h4>
            <ul>
              <p> SPA Hosting via S3 and Cloudfront </p>
              <p> SPA Hosting via EC2 and Cloudfront </p>
              <p> Development VM EC2 </p>
            </ul>
          </Box>
        </Grid>

        <Grid item cols={4}>
          <Box color='gray' corners='roundest'>
            <h2> Test Automation </h2>
            <h4> Tooling </h4>
            <ul>
              <p> Python, Selenium, Gridlastic </p>
            </ul>
            <h4> Projects </h4>
            <ul>
              <p> UI Automation Testing </p>
              <p> Page-Object Model Framework </p>
            </ul>
          </Box>
        </Grid>

        <Grid item cols={4}>
          <Box color='blue' corners='rounder'>
            <h2> Development </h2>
            <h4> Tooling </h4>
            <ul>
              <p> Python, Clojure, Typescript, React, Bash </p>
            </ul>
            <h4> Projects </h4>
            <ul>
              <p> My IDE </p>
              <p> CLI tooling </p>
              <p> Frontend SPA  </p>
            </ul>
          </Box>
        </Grid>

      </Grid >

      <Grid container spacing="lg">
        <Grid item cols={12}>
          <Box color='light_gray' corners='round'>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing="lg">
        <Grid item cols={12}>
          <Box color='light_gray' corners='round'>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing="lg">
        <Grid item cols={12}>
          <Box color='light_gray' corners='round'>
          </Box>
        </Grid>
      </Grid>
    </div >
  );
}

export default Projects
