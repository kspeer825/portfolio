# Base Go Image
A simple RHEL container for developing Go projects.

Contents:
 - Go v1.21.6
 - GNU Make
 - jq
 - git

## Usage
[Docker Hub](https://hub.docker.com/r/kspeer825/go/tags)
```
docker pull kspeer825/go:latest
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
