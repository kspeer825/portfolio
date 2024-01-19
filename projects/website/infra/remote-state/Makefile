SHELL := /bin/bash

default_tf_vars ?= -var="aws_region=us-east-1" -var="aws_access_key=${AWS_ACCESS_KEY_ID}" -var="aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}"

.PHONY: check-env setup-env debug-env clean init fmt plan apply test

check-env:
ifndef AWS_BUCKET_NAME
	$(error AWS_BUCKET_NAME is not set)
endif

setup-env-local : check-env
	$(shell aws configure export-credentials > tmp_creds.json)
	$(eval export AWS_ACCESS_KEY_ID=$(shell cat tmp_creds.json | jq -r .AccessKeyId))
	$(eval export AWS_SECRET_ACCESS_KEY=$(shell cat tmp_creds.json | jq -r .SecretAccessKey))
	@rm -f tmp_creds.json

debug-env:
	@env

clean:
	rm -f *.tfstate*

# Terraform

init:
	@terraform init $(default_tf_vars) $(tf_vars)

fmt:
	terraform fmt

plan:
	@terraform plan $(default_tf_vars) $(tf_vars)

apply:
	@terraform apply -auto-approve $(default_tf_vars) $(tf_vars)

test:
	terraform fmt -check
	terraform validate
