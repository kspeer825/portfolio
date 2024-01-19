# Personal Website
This is my personal website currently available at https://speerportfolio.com/.
Created  January 2023

## ToDo's
 - [ ] Dockerfile for local developmmeent
 - [ ] Update `Professional Experience` with current position / project

## Overview
[![Frontend](https://github.com/kspeer825/portfolio/actions/workflows/build_deploy_speer_portfolio_app.yml/badge.svg)](https://github.com/kspeer825/portfolio/actions/workflows/build_deploy_speer_portfolio_app.yml)

[![Infrastructure](https://github.com/kspeer825/portfolio/actions/workflows/deploy_infra.yml/badge.svg)](https://github.com/kspeer825/portfolio/actions/workflows/deploy_infra.yml)

The website is meant to be an extension of my resume with details of personal projects and professionl experiences.

It is hosted in AWS using Cloudfront, S3, and ACM. The frontend is built using React and Typescript. I have professional
experience with React apps, but I am not a frontend dev. The site is very simple, a client-side SPA made up of a few React components.

## Infrastructure
One approach for hosting a  static website in AWS is to leverage EC2 instances. Using EC2 servers you have the option
to scale vertically through the available instance types. You also have the ability to scale horizontally with ASGs and load balancers. You can apply SSL/TLS certificates to the load balancer to secure the site, and you can monitor everything via CloudWatch.

A simpler approach is to use S3, and Cloudfront. S3 buckets have a configuration option to enable static web hosting. You can toss your bundled frontend app into a publicly available bucket, and secure it by applying a policy and/or using ACL's to restrict access to specific services or users. In the case of a simple website like this, restricting access to
Cloudfront is a better option. By setting up a Cloudfront distribution (CDN) and pointing it at the `index.html` behind
the bucket endpoint you can enable HTTP to HTTPS redirects, in addition to getting all the performance and caching
benefits that come with Cloudfront. The distribution has a url endpoint based on the distibution id, but you can set
up a DNS entry in Route53 to point your domain to Cloudfront.

This approach isn't great for all use-cases, but for a simple client-side web app it works great.

## Tooling
### Infrastructure
- AWS Cloudfront
- AWS S3
- AWS Amazon Certificate Manager
- AWS Route53

### CI/CD
- Terraform
- GitHub Actions

### Web
- yarn
- Create React App
- Typescript
