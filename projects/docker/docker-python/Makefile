container_name ?= local-$(shell date "+%s")
image_tag ?= python-local
username ?= kspeer825
repo ?= $(username)/python
version ?= $(shell cat version.txt)

build:
	docker build -t $(image_tag) .

build-clean:
	docker build -t $(image_tag) --no-cache .

clean:
	docker system prune -af

list:
	@echo "\t==================== IMAGES ====================" \
	&& docker image list
	@echo "\t==================== CONTAINERS ====================" \
	&& docker ps -a

login:
	docker login -u $(username)

push: clean build-clean test
	docker tag $(image_tag) $(repo):$(version)
	docker push $(repo):$(version)

run:
	docker run -it --name $(container_name) $(image_tag) bash

test:
	docker run -itd --name $(container_name) $(image_tag) bash
	docker exec -it  -w /usr/local/src/tests/ $(container_name) bash -c ". ~/.bashrc && goss validate"

test-clean: build-clean
	docker run -itd --name $(container_name) $(image_tag) bash
	docker exec -it  -w /usr/local/src/tests/ $(container_name) bash -c ". ~/.bashrc && goss validate"