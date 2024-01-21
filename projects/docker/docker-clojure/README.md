# Base Clojure Image
A simple RHEL container for developing Clojure projects.

Contents:
 - JVM
 - Clojure
 - Leiningen
 - GNU Make
 - jq

## Usage
[Docker Hub](https://hub.docker.com/r/kspeer825/clojure/tags)
```
docker pull kspeer825/clojure:latest
```

## Development
The Makefile has some convenience rules for interacting with images and containers.

Build a new image.
```
make build
```
Enter a new continer.
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
