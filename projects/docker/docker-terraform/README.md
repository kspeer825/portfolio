# Base Terraform Image
A simple RHEL container for executing Terraform plans.

Contents:
 - Terraform
 - GNU Make
 - jq

## Usage
[Docker Hub](https://hub.docker.com/r/kspeer825/terraform/tags)
```
docker pull kspeer825/terraform:latest
```

## Development
The Makefile has some convenience rules for interacting with images and containers.

Build a new image.
```
make build
```
Enter a new container.
```
make run
```
Validate the image using goss tests.
```
make test
```
Tag and push to Docker Hub repo.
```
make login username=<your-username>
make push username=<your-username> repo=<your-repo> version=<tag-version>
```

## Requirements
 - Docker and its runtime env like Docker Desktop or [Colima](https://github.com/abiosoft/colima?tab=readme-ov-file#getting-started)
