# Base Python Image
A simple RHEL container for developing Python projects.

Contents:
 - Python 3.8.18, 3.11.7
 - Pyenv
 - GNU Make
 - jq
 - git

## Usage
[Docker Hub](https://hub.docker.com/r/kspeer825/python/tags)
```
docker pull kspeer825/python:latest
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
 - [GNU Make](https://www.gnu.org/software/make/manual/make.html#Simple-Makefile)
 - Docker and its runtime env like Docker Desktop or [Colima](https://github.com/abiosoft/colima?tab=readme-ov-file#getting-started)
