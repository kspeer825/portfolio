SHELL := /bin/bash

tf_vars ?= -var="aws_region=us-east-1" -var="aws_access_key=${AWS_ACCESS_KEY_ID}" -var="aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}" -var="aws_bucket_name=${AWS_BUCKET_NAME}"



.PHONY: check-env setup-env debug-env init plan apply

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

# Terraform

init:
	terraform -chdir=infra init $(tf_vars)

fmt:
	terraform -chdir=infra fmt

plan:
	terraform -chdir=infra plan $(tf_vars)

apply:
	terraform -chdir=infra apply -auto-approve $(tf_vars)

test:
	terraform -chdir=infra fmt -check
	terraform -chdir=infra validate

# React App

app-build:
	@cd ../speerportfolio && yarn build

app-start:
	@cd ../speerportfolio && yarn start

app-install:
	@cd ../speerportfolio && yarn install-clean

app-deploy:
	@echo "Target Bucket: ${AWS_BUCKET_NAME}"
	@./../build_upload.sh ${AWS_BUCKET_NAME}
	@./../deploy.sh ${AWS_BUCKET_NAME}
