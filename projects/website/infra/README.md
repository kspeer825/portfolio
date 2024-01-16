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
$ cd infra && terraform init
$ terraform apply -auto-apply -var="aws_region=us-east-2" -var="aws_access_key=${AWS_ACCESS_KEY_ID}" -var="aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}" -var="aws_secret_access_key=${AWS_BUCKET_NAME}"
```

### Secureing w/ public SSL Certificate via ACM

TODO

### Securing w/ Self Signed Certificiate:

To generate a self-signed Certificate w/ SSL run the included script:

```
$ cd infra/openssl
$ bin/setup.sh <CLOUDFRONT_DOMAIN>
```

Then the certificate `server.pem` and key `serverKey.pem` can be imported to ACM.

That certificate can then be linked to the Cloudfront distribution in order to enable SSL.

Example Output:

```
$ bin/setup.sh d31xfsxbx5d9z3.cloudfront.net
Creating Certificate Authority (CA)...
Generating a 2048 bit RSA private key
.....+++
...........+++
writing new private key to 'rootKey.pem'
-----
Creating private key...
Generating RSA private key, 2048 bit long modulus
..............................................................+++
..................................................+++
e is 65537 (0x10001)
Configuring CSR (Certificate Signing Request)...
Generating CSR...
Configuring SSL (Secure Socket Layer)...
Signature ok
subject=/C=US/ST=Pennsylvania/L=Philadelphia/O=speer/OU=kylespeer/CN=d31xfsxbx5d9z3.cloudfront.net
Getting CA Private Key
```

### Tearing Down The Static Site

```
$ terraform destroy -auto-apply -var="aws_region=us-east-2" -var="aws_access_key=${AWS_ACCESS_KEY_ID}" -var="aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}"  -var="aws_secret_access_key=${AWS_BUCKET_NAME}"
```
