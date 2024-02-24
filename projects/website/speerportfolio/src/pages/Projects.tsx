import React from 'react';
import Box from '../components/Box'
import Grid from '../components/Grid'
import Header from '../components/Header'
import PersonalProjectBox from '../components/PersonalProjectBox'
import NavBar from '../Nav';
import '../App.css';


function Projects() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Grid container spacing="md">
        <Grid item cols={12}>
          <Box color='dark_gray' corners='rounder'>
            <h2 >
              My personal projects...
            </h2>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="md">
        <Grid item cols={10}>
          <PersonalProjectBox
            title="Serverless CI/CD Platform"
            subtitle="Serverless Jenkins Cluster"
            tools=" Terraform, AWS (VPC, ALB, ECS, Cloudwatch, IAM, EFS), Jenkins"
            color="gray"
            context="Jenkins is an open source orchestration tool for automation pipelines. It is traditionally run on servers with static IPs, however it can be run in a serverless environment. This implementation leverages ECS Fargate tasks and VPC endpoints making it a cost-effective, scalable, and secure."
            children=<div>
              <h3> Component Details:</h3>
              <ul>
                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/">Overview</a></li>
                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/terraform/alb.tf">Application Load Balancer</a> accesible via white-listed IPs</li>
                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/terraform/ecs.tf">ECS Cluster</a> running Fargate tasks in a private subnet</li>
                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/terraform/vpc.tf">VPC</a> using AWS PrivateLink for service-to-service communication</li>
                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/terraform/ecr.tf">ECR</a> private repo for storing the <a href="https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/jenkins/">Jenkins Docker image</a></li>
              </ul >
            </div >
          />
        </Grid >
      </Grid >

      <Grid container spacing="md">
        <Grid item cols={10}>
          <PersonalProjectBox
            title="Website"
            subtitle="SPA Hosting via S3 and CloudFront"
            tools="Terraform, Github Actions, AWS (S3, Cloudfront, Route53), Typescript, Yarn"
            context="My personal website started out as a take-home project for an interview, and I ended up keeping it around to use as an extension of my resume with details of personal projects and professionl experiences."
            color="blue"
            children=<div>
              <h3> Component Details:</h3>
              <ul>
                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/website/">Overview</a></li>
                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/website/infra#s3-static-website-infrastructure">Backend infrastructure</a></li>
                <ul>
                  <li>Lightweight, immutable, and managed entirely with Terraform</li>
                </ul>
                <li><a href="https://github.com/kspeer825/portfolio/tree/main/projects/website/speerportfolio">Frontend</a></li>
                <ul>
                  <li>Written in Typescript using React components</li>
                </ul>
                <li><a href="https://github.com/kspeer825/portfolio/actions">Deployments</a></li>
                <ul>
                  <li>Run via GH Actions workflows</li>
                </ul>
              </ul>
            </div>
          />
        </Grid>
      </Grid >

      <Grid container spacing="md">
        <Grid item cols={10}>
          <PersonalProjectBox
            title="Containerization"
            subtitle="Single Purpose Docker Images"
            tools="Docker, Go (for testing)"
            context="A series of simple, single-purpose base images available on Docker Hub meant for local iteration."
            color="gray"
            children=<div>
              <h3> Details:</h3>
              <ul>
                <li>Terraform | <a href="https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-terraform#base-terraform-image">Github</a> | <a href="https://hub.docker.com/r/kspeer825/terraform/">Docker Hub</a></li>
                <li>Clojure | <a href="https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-clojure#base-clojure-image">Github</a> | <a href="https://hub.docker.com/r/kspeer825/clojure/">Docker Hub</a></li>
                <li>Python | <a href="https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-python#base-python-image">Github</a> | <a href="https://hub.docker.com/r/kspeer825/python">Docker Hub</a> </li>
                <li>Go | <a href="https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-go#base-go-image">Github</a> | <a href="https://hub.docker.com/r/kspeer825/go">Docker Hub</a> </li>
              </ul>
            </div>
          />
        </Grid>
      </Grid >

      <Grid container spacing="md">
        <Grid item cols={10}>
          <PersonalProjectBox
            title="Programming"
            subtitle="Advent of Code Solutions"
            tools="Go, Clojure, Python, Docker (the images mentioned above)"
            context="Each year I try to complete the latest Advent of Code using a languge that is new to me, or that I want more practice in. I have organized my solutions from each year with a docker container and Makefile, so anyone can reproduce the output."
            color="blue"
            children=<div>
              <h3> Details:</h3>
              <ul>
                <li>2023 solutions | Go | <a href="https://github.com/kspeer825/portfolio/tree/main/projects/advent-solutions/2023#advent-of-code-2023-solutions">Github</a></li>
              </ul>
              <ul>
                <li>2022 solutions | Clojure | <a href="https://github.com/kspeer825/portfolio/tree/main/projects/advent-solutions/2022#advent-of-code-2022-solutions">Github</a></li>
              </ul>
              <ul>
                <li>2021 solutions | Python | <a href="https://github.com/kspeer825/portfolio/tree/main/projects/advent-solutions/2021#advent-of-code-2021-solutions">Github</a></li>
              </ul>
            </div>
          />
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
