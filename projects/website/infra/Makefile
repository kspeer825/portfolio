SHELL := /bin/bash

tf_vars ?= -var="aws_region=us-east-1" -var="aws_access_key=${AWS_ACCESS_KEY_ID}" -var="aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}" -var="aws_bucket_name=${AWS_BUCKET_NAME}"



.PHONY: check-env setup-env debug-env init plan apply

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

# Terraform

init: setup-env
	terraform -chdir=infra init $(tf_vars)

plan: setup-env
	terraform -chdir=infra plan $(tf_vars)

apply:
	terraform -chdir=infra apply -auto-approve $(tf_vars)

# React App

app-build: setup-env
	@cd ../speerportfolio && yarn build

app-start: setup-env
	@cd ../speerportfolio && yarn start

app-install: setup-env
	@cd ../speerportfolio && yarn install-clean

app-deploy: setup-env
	@echo "Target Bucket: ${AWS_BUCKET_NAME}"
	@./../build_upload.sh ${AWS_BUCKET_NAME}
	@./../deploy.sh ${AWS_BUCKET_NAME}
