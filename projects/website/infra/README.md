# Interview Project 1

## Infrastructure
[![Deploy](https://github.com/kspeer825/portfolio/actions/workflows/deploy_infra.yml/badge.svg)](https://github.com/kspeer825/portfolio/actions/workflows/deploy_infra.yml)

### Prerequisites
The following tools are needed to stand up this infrastructure:

```
$ terraform -version
Terraform v1.3.7
on darwin_arm64

$ aws --version
aws-cli/2.9.15 Python/3.9.11 Darwin/21.6.0 exe/x86_64 prompt/of
```

Additionally, you must have an AWS account and non-root user with proper permissions.

### Standing Up The Static Site

Set AWS Credentials.

```
$ export AWS_ACCESS_KEY_ID=<YOUR-KEY-ID>
$ export AWS_SECRET_ACCESS_KEY=<YOUR-SECRET-KEY>
```

Apply the terraform plan creating a bucket in S3 and a CloudFront distribution (CDN).

```
$ cd infra && make init plan
$ make apply
```
