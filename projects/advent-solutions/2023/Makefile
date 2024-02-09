username ?= kspeer825
module ?= advent/solution/$(day)

docker-login:
	docker login -u $(username)

docker-build:
	docker compose run build

bootstrap:
	@mkdir -p $(day)
	@cp main.go.template $(day)/$(day).go
	@sed -i 's/day_TODO.txt/day_$(day).txt/g' $(day)/$(day).go

# Needed???
setup:
	cd $(day) && go mod init $(module)
	cd $(day) && go mod tidy
	cd $(day) && go get -u $(module)

solve:
	@go run $(day)/$(day).go
