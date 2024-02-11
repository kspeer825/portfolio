SHELL := /bin/bash

# Docker

.PHONY: dc-build dc-build-clean dc-up dc-down dc-logs

f ?= ./docker-compose.yml
dc = docker compose -f $(f)

dc-build:
	$(dc) build

dc-build-clean:
	$(dc) build --no-cache

dc-up:
	$(dc) up -d

dc-down:
	$(dc) down -v

dc-logs:
	$(dc) logs -f

dc-run:
	$(dc) run $(svc)

# AWS
.PHONY: ecr-login ecr-push

image ?= jenkins
version ?= latest

ecr-login:
	aws ecr get-login-password --region $(region) | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.$(region).amazonaws.com

ecr-push: ecr-login
	docker tag $(image) $(image):$(version)
	docker tag $(image):$(version) ${AWS_ACCOUNT_ID}.dkr.ecr.$(region).amazonaws.com/$(image)
	docker push ${AWS_ACCOUNT_ID}.dkr.ecr.$(region).amazonaws.com/$(image)

# Terraform

.PHONY: check-bucket check-env-vars tf-setup tf-init tf-fmt tf-plan tf-apply tf-test

chdir = -chdir=terraform
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
	@terraform $(chdir) init $(tf_vars) \
		-backend-config="bucket=${AWS_BUCKET_NAME}" \
		-backend-config="key=$(backend_key)" \
		-backend-config="region=${region}"

0tf-fmt:
	terraform $(chdir) fmt

tf-plan: setup-env
	@terraform $(chdir) plan $(tf_vars) $(options)

tf-apply: setup-env
	@terraform $(chdir) apply -auto-approve $(tf_vars)

tf-test:
	terraform $(chdir) fmt -check
	terraform $(chdir) validate

# Convenience rules

.PHONY: nuke deploy-image

nuke: dc-down dc-build-clean dc-up

deploy-image: dc-build-clean ecr-push

# Initial setup

.PHONY: setup-home bootstrap

setup-home:
	mkdir -p jenkins_home

bootstrap: setup-home dc-build-clean dc-up dc-logs
	@echo "Bootstrap Complete."
