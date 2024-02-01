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
            <Grid container spacing="md">
                <Grid item cols={8}>
                    <Box color='dark_gray' corners='rounder'>
                        <h2 >
                            My personal projects...
                        </h2>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing="md">
                <Grid item cols={4}>
                    <Box color='blue' corners='rounder'>
                        <h2> Website </h2>
                        <h4> SPA Hosting via S3 and Cloudfront </h4>
                        <ul>
                            <p> Component Details:</p>
                            <ul>
                                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/website/">Overview</a> of the site.</li>
                                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/website/infra#s3-static-website-infrastructure">Backend infrastructure</a> is entirely mutable and relies on Terraform.</li>
                                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/website/speerportfolio">Frontend</a> is written in Typescript and uses Create React App.</li>
                                <li><a href="https://github.com/kspeer825/portfolio/actions">Deployments</a> run via GH Actions workflows.</li>
                            </ul>
                            <p> Tooling </p>
                            <ul>
                                <li>AWS</li>
                                <li>Terraform</li>
                                <li>GH Actions</li>
                                <li>Typescript</li>
                                <li>yarn</li>
                                <li>Github Actions</li>
                            </ul>
                        </ul>
                    </Box>
                </Grid>

                <Grid item cols={4}>
                    <Box color='gray' corners='roundest'>
                        <h2> Containerization </h2>
                        <h4> Single Purpose Docker Images </h4>
                        <ul>
                            <p> Details:</p>
                            <ul>
                                <li>Terraform</li>
                                <ul>
                                    <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-terraform#base-terraform-image">Github</a> | <a href="https://hub.docker.com/r/kspeer825/terraform/">Docker Hub</a></li>
                                </ul>
                                <li>Clojure</li>
                                <ul>
                                    <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-clojure#base-clojure-image">Github</a> | <a href="https://hub.docker.com/r/kspeer825/clojure/">Docker Hub</a>
                                    </li>
                                </ul>
                                <li>Python</li>
                                <ul>
                                    <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-python#base-python-image">Github</a> | <a href="https://hub.docker.com/r/kspeer825/python">Docker Hub</a> </li>
                                </ul>
                                <li>Go</li>
                                <ul>
                                    <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-go#base-go-image">Github</a> | <a href="https://hub.docker.com/r/kspeer825/go">Docker Hub</a> </li>
                                </ul>
                            </ul>
                            <p> Tooling </p>
                            <ul>
                                <li>Docker</li>
                                <li>Go (testing)</li>
                            </ul>
                        </ul>
                    </Box>
                </Grid>

                <Grid item cols={4}>
                    <Box color='blue' corners='rounder'>
                        <h2> Advent of Code </h2>
                        <h4> <a href="https://adventofcode.com/">Advent of Code</a> Solutions. </h4>
                        <ul>
                            <p> TODO LEFT OFF HERE
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
