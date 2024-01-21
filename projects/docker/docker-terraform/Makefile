container_name ?= local-$(shell date "+%s")
image_tag ?= terraform-local
repo ?= kspeer825/simple-utils
tagname ?= terrafrom
version ?= $(shell cat version.txt)

# docker build - < Dockerfile

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
	docker tag $(image_tag) $(repo):$(tagname)-$(version)
	docker push $(repo):$(tagname)-$(version)

run:
	docker run -it --name $(container_name) $(image_tag) sh

test:
	docker run -it -d --name $(container_name) $(image_tag) sh
	docker exec -it $(container_name) sh -c "cd /usr/local/src/tests/ && goss validate"

test-clean: build-clean
	docker run -it -d --name $(container_name) $(image_tag) sh
	docker exec -it $(container_name) sh -c "cd /usr/local/src/tests/ && goss validate"