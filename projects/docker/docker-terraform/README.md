# Base Terraform Image
A simple RHEL container for executing Terraform plans.

## Usage
Pull it from [Docker Hub](https://hub.docker.com/r/kspeer825/terraform/tags) like any other image.

```
docker pull kspeer825/terraform:latest
```

## Development
The Makefile has some convenience rules for interacting with images and containers.

Build a new image
```
make build
```

Enter a new continer
```
make run
```

Validate the image w/ goss tests
```
make test
```

Push to repo
```
make login username=<your-username>
make push username=<your-username> repo=<your-repo>
```

## Requirements
 - Docker and its runtime env like Docker Desktop or [Colima](https://github.com/abiosoft/colima?tab=readme-ov-file#getting-started)
