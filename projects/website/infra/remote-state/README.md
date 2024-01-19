# Terraform Remote State Bucket

Terraform state can be difficult to manage if you rely on local files. It means having to commit your state (and often plan) files to version control and check that the plan does not become dirty, or break on every PR. Using a remote backend to store your state files solves this problem.

You can use an s3 bucket to store the state files remotely, which means when you, another contributer, or even an automation pipeline, go to run a plan everyone is always getting the current up-to-date state of your infrastructure.

This example uses a Makefile for simplicity.

## Bootstrap

Ensure you have the aws CLI installed and a profile configured, before intializing the terraform module.
```
export AWS_PROFILE=<your-profile>
make init
```

You can set the name of the bucket with a default variable...
```
make plan apply
```
or pass in the value using a make parameter.
```
make plan apply tf_vars='-var="aws_bucket_name=<your-bucket-name>"'
```


## Usage

If you already have an AWS provider in your current TF project, all you need to add is the backend.
```
terraform {
  backend "s3" {
    bucket = "<your-remote-state-bucket-name>"
    key    = "<your/path/to/key>"
    region = "<us-east-1,etc>"
  }
}
```
The first plan / apply you run will prompt you if you want to migrate your local state, just say yes and you're done!


## Reference
 - [AWS](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
 - [TF Docs](https://developer.hashicorp.com/terraform/language/settings/backends/s3)
