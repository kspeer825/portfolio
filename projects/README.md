# Projects

## Jenkins Cluster
[Jenkins](https://www.jenkins.io/doc/) is an open source orchestration tool for automation pipelines. It is traditionally run on servers with static IPs, however it can be run in a serverless environment. This implementation leverages ECS Fargate tasks and VPC endpoints making it a cost-effective, scalable, and secure."

Component Details:
 - [Overview](https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/)
 - [Application Load Balancer](https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/terraform/alb.tf) accesible via white-listed IPs
 - [ECS Cluster](https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/terraform/ecs.tf) running Fargate tasks in a private subnet
 - [VPC](https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/terraform/vpc.tf) using AWS PrivateLink for service-to-service communication
 - [ECR](https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/terraform/ecr.tf) private repo for storing the [Jenkins Docker image](https://github.com/kspeer825/portfolio/tree/main/projects/jenkins/jenkins/)

## Personal Website
My personal website, currently available at [speerportfolio.com](https://speerportfolio.com/), is meant to be an extension of my resume with details of personal projects and professionl experiences.

Component Details:
 - [Overview](https://github.com/kspeer825/portfolio/tree/main/projects/website/) of the site.
 - [Backend infrastructure](https://github.com/kspeer825/portfolio/tree/main/projects/website/infra#s3-static-website-infrastructure) relies on Terraform.
 - [Frontend](https://github.com/kspeer825/portfolio/tree/main/projects/website/speerportfolio) is written in Typescript and uses `yarn` and the CRA framework.
 - [GH Actions](https://github.com/kspeer825/portfolio/actions) deployment pipelines.

## Docker Images
A series of simple, single-purpose base images available on [Docker Hub](https://hub.docker.com/u/kspeer825).

| Purpose   | Version | Source                                                                                                                                     | Image Repo                                                          |
|-----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| Terraform | 1.0.0   | [projects/docker/docker-terraform](https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-terraform#base-terraform-image) | [kspeer825/terraform](https://hub.docker.com/r/kspeer825/terraform) |
| Clojure   | 1.0.0   | [projects/docker/docker-clojure](https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-clojure#base-clojure-image)       | [kspeer825/clojure](https://hub.docker.com/r/kspeer825/clojure)     |
| Python    | 1.0.0   | [projects/docker/docker-python](https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-python#base-python-image)          | [kspeer825/python](https://hub.docker.com/r/kspeer825/python)       |
| Go        | 1.0.0   | [projects/docker/docker-go](https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-go#base-go-image)                      | [kspeer825/go](https://hub.docker.com/r/kspeer825/go)               |
| AWS CLI   |         |                                                                                                                                            | TODO make public                                                    |

## CLI Tooling

| Tool                                                                                                 | Purpose                                                   | Language |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|----------|
| [updatessh](https://github.com/kspeer825/portfolio/tree/main/projects/cli-tools/updatessh#updatessh) | Automatically sync ssh config w/ running instances in AWS | Go       |
