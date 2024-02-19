SHELL := /bin/bash

# Terraform

.PHONY: check-bucket check-env-vars tf-setup tf-init tf-fmt tf-plan tf-apply tf-test

region ?= us-east-1
backend_key ?= portfolio/jenkins
tf_vars ?= -var="aws_region=$(region)" -var="aws_access_key=${AWS_ACCESS_KEY_ID}" -var="aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}" -var="aws_bucket_name=${AWS_BUCKET_NAME}" -var="aws_account_id=${AWS_ACCOUNT_ID}"

check-bucket:
ifndef AWS_BUCKET_NAME
	$(error "AWS_BUCKET_NAME is not set.")
endif

check-env-vars: check-bucket

debug-env:
	env

setup-env : check-env-vars
	$(shell aws configure export-credentials > tmp_creds.json)
	$(eval export AWS_ACCESS_KEY_ID=$(shell cat tmp_creds.json | jq -r .AccessKeyId))
	$(eval export AWS_SECRET_ACCESS_KEY=$(shell cat tmp_creds.json | jq -r .SecretAccessKey))
	@rm -f tmp_creds.json

tf-init: setup-env
	@terraform init $(tf_vars) \
		-backend-config="bucket=${AWS_BUCKET_NAME}" \
		-backend-config="key=$(backend_key)" \
		-backend-config="region=${region}"

tf-fmt:
	terraform fmt

tf-plan: setup-env
	@terraform plan $(tf_vars) $(options) --out="$(region).tfplan"

tf-apply: setup-env
	@terraform apply "$(region).tfplan"

tf-test:
	terraform fmt -check
	terraform validate
