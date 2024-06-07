# updatessh

Update your local ssh config to include current running AWS EC2 instances.

Written in Go using [Cobra](https://github.com/spf13/cobra-cli).

## Usage

### Install

	TODO

### Build

	go build -o updatessh


### Run

Set your AWS profile via env var or pass it as an argument

	./updatessh aws --profile=<your-aws-profile>
