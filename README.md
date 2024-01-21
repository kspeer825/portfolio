# My Portfolio
A portfolio of personal projects. Everything is expressed in code where possible.

## Projects

### Personal Website
My personal website, currently available at [speerportfolio.com](https://speerportfolio.com/), is meant to be an extension of my resume with details of personal projects and professionl experiences.

Components:
 - [Overview](https://github.com/kspeer825/portfolio/tree/main/projects/website/)
 - [Infra](https://github.com/kspeer825/portfolio/tree/main/projects/website/infra#s3-static-website-infrastructure) relies on Terraform and includes a Makefile.
 - [Frontend](https://github.com/kspeer825/portfolio/tree/main/projects/website/speerportfolio) is written in Typescript and uses `yarn` and the CRA framework.
 - [GH Actions](https://github.com/kspeer825/portfolio/actions) deployment pipelines.

### Docker Images
A series of simple, single-purpose base images.

Available Docker Hub under [kspeer825/simple-utils](https://hub.docker.com/r/kspeer825/simple-utils/tags).
| Image  | Version | Source |
| ------------- | ------------- | ------------- |
| Terraform  | 1.0.0  | [docker-terraform](https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-terraform#base-terraform-image)  |

### Advent of Code
TODO make public

## Patterns & Tooling
A collection of practices and tooling for building software that I think are useful, effective, or just cool.

### Patterns & Practices
 - Pair Programming / Extreme Programming
 - Test Driven Development
 - Terraform Remote State ([explanation](https://github.com/kspeer825/portfolio/tree/main/projects/website/infra/remote-state#terraform-remote-state-bucket))

### Tools
 - [Terraform](https://developer.hashicorp.com/terraform/intro)
 - [Emacs](https://emacsrocks.com/)
 - [Docker w/ Colima](https://github.com/abiosoft/colima)
 - [GNU Make](https://www.gnu.org/software/make/manual/make.html#Simple-Makefile)
 - [Clojure](https://clojure.org/)
 - [Go](https://go.dev/play/)
 - [Singer Taps](https://github.com/singer-io/getting-started)
