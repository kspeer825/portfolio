username ?= kspeer825

docker-login:
	docker login -u $(username)

docker-build:
	docker compose run build

solve:
	@python day_$(day).py