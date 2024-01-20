image_tag ?= terraform-local
container_name ?= local-$(shell date "+%s")

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

run: build
	docker run -it --name $(container_name) $(image_tag) sh

test: build
	docker run -it -d --name $(container_name) $(image_tag) sh
	docker exec -it $(container_name) sh -c "cd /usr/local/src/tests/ && goss validate"

test-clean: build-clean
	docker run -it -d --name $(container_name) $(image_tag) sh
	docker exec -it $(container_name) sh -c "cd /usr/local/src/tests/ && goss validate"