# Base Terraform Image
A simple RHEL container for executing Terraform plans.

## Usage
The Makefile has some convenience rules for interacting with images and containers.
```
# Build a new image
make build

# Enter a new continer
make run

# Validate the image w/ goss tests
make test
```

## Requirements
 - Docker and its runtime env like Docker Desktop or [Colima](https://github.com/abiosoft/colima?tab=readme-ov-file#getting-started)

## TODO
 - Add versioning to the image
 - Test continer with portfolio site build
 - Save image to docker hub or some other repo
