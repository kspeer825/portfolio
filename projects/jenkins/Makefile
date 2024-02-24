SHELL := /bin/bash

# Setup

.PHONY: check-bucket check-env-vars debug-env setup-env

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

# Docker

.PHONY: dc-build dc-build-clean dc-up dc-down dc-logs

dir ?= jenkins
f ?= ./docker-compose.yml
dc = cd $(dir) && docker compose -f $(f)

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
version ?= $(shell cat ./jenkins/version.txt)
region ?= us-east-1

ecr-login: setup-env
	aws ecr get-login-password --region $(region) | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.$(region).amazonaws.com

ecr-push: ecr-login
	docker tag $(image) $(image):$(version)
	docker tag $(image):$(version) ${AWS_ACCOUNT_ID}.dkr.ecr.$(region).amazonaws.com/$(image)
	docker push ${AWS_ACCOUNT_ID}.dkr.ecr.$(region).amazonaws.com/$(image)

# Terraform

.PHONY: tf-up tf-down tf-run

tf-up:
	cd terraform && docker compose up
tf-down:
	cd terraform && docker compose down
tf-run:
	cd terraform && docker compose run infra

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
