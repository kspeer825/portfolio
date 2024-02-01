# Projects

## Personal Website
My personal website, currently available at [speerportfolio.com](https://speerportfolio.com/), is meant to be an extension of my resume with details of personal projects and professionl experiences.

Component Details:
 - [Overview](https://github.com/kspeer825/portfolio/tree/main/projects/website/) of the site.
 - [Backend infrastructure](https://github.com/kspeer825/portfolio/tree/main/projects/website/infra#s3-static-website-infrastructure) relies on Terraform.
 - [Frontend](https://github.com/kspeer825/portfolio/tree/main/projects/website/speerportfolio) is written in Typescript and uses `yarn` and the CRA framework.
 - [GH Actions](https://github.com/kspeer825/portfolio/actions) deployment pipelines.

## Docker Images
A series of simple, single-purpose base images available on [Docker Hub](https://hub.docker.com/u/kspeer825).

| Purpose  | Version | Source | Image Repo |
| ------------- | ------------- | ------------- | ------------- |
| Terraform  | 1.0.0  | [projects/docker/docker-terraform](https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-terraform#base-terraform-image)  | [kspeer825/terraform](https://hub.docker.com/r/kspeer825/terraform) |
| Clojure  | 1.0.0  | [projects/docker/docker-clojure](https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-clojure#base-clojure-image)  | [kspeer825/clojure](https://hub.docker.com/r/kspeer825/clojure) |
| Python  | 1.0.0  | [projects/docker/docker-python](https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-python#base-python-image)  | [kspeer825/python](https://hub.docker.com/r/kspeer825/python) |
| Go  | 1.0.0  | [projects/docker/docker-go](https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-go#base-go-image)  | [kspeer825/go](https://hub.docker.com/r/kspeer825/go) |
| AWS CLI  | TODO  | TODO | TODO |


## Advent of Code Solutions
Each year I try to complete the latest [advent calendar](https://adventofcode.com/) using a languge that is new to me, or that I want more practice in.

I have organized my solutions from each year with a docker container and Makefile, so anyone can reproduce the output. This is a pattern that I have used professionally that simplifies local developement without too much abstraction.

| Year  | Language | Source |
| ----- | -------- | ------ |
| 2023  | Go | TODO |
| 2022  | Clojure | TODO |
| 2021  | Python | [projects/advent-solutions/2021](https://github.com/kspeer825/portfolio/tree/main/projects/advent-solutions/2021#advent-of-code-2021-solutions) |
