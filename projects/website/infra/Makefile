SHELL := /bin/bash

tf_vars ?= -var="aws_region=us-east-2" -var="aws_access_key=${AWS_ACCESS_KEY_ID}" -var="aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}" -var="aws_bucket_name=${AWS_BUCKET_NAME}"



.PHONY: setup-env debug-env plan apply

check-env:
ifndef AWS_PROFILE
	$(error AWS_PROFILE is not set)
endif
ifndef AWS_BUCKET_NAME
	$(error AWS_BUCKET_NAME_FLAG is not set)
endif

setup-env: check-env
	$(shell aws configure export-credentials > tmp_creds.json)
	$(eval export AWS_ACCESS_KEY_ID=$(shell cat tmp_creds.json | jq -r .AccessKeyId))
	$(eval export AWS_SECRET_ACCESS_KEY=$(shell cat tmp_creds.json | jq -r .SecretAccessKey))
	@rm -f tmp_creds.json

debug-env: setup-env
	@env


init: setup-env
	cd infra && terraform init $(tf_vars)

plan: setup-env
	cd infra && terraform plan $(tf_vars)

# apply:
#	terraform apply $(tf_vars)
