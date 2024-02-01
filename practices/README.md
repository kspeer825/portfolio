# Pair Programming

## What is it?
Pair programming is the practice of two software engineers actively working on the same problem. Traditionally it thas followed the strucutre of two individuals sitting together at one computer where one person acts as the driver, and one person acts as a navigator. The practice has grown to include many different implementations. The most effective manor of pair programming that I have found is when both engineers are working on their own devices in a shared IDE and consistently switching between driver and navigator. Collaboration should be achieved through constant communication from both parties. One engineer should not be just dictating instructions to the other, you want a dialogue. It also helps to switch up the pairs every sprint or so, with the goal that any given team member is comfortable pairing with anyone else.

## Why use it?
 - It naturally encourages knowledge transfer between experienced, and new or Jr. engineers.
 - Better quailty code can be produced at speed with two people tackling one problem.
 - It builds confidence in engineers who become comfortable contantly justifying their thoughts while coding.

# Test Driven Development
![tdd-diagram](/projects/practices/ibm-tdd-diagram.png?raw=true)
Image from [IBM](https://developer.ibm.com/articles/5-steps-of-test-driven-development/).

## What is it?
Test Driven Development (TDD) is the practice of writing functional tests prior to writing the code that performs that function. It can be applied at different points in the SDLC but generally the earlier the better. It can also be applied in differnt scopes, as small as unit tests or as large as end-to-end automation tests. As a QA engineer when I would embed with developer teams for projects, I met with stakeholders at the first palnning meetings and began writing out test cases. This often exposed gaps in our expactations because we had people thinking not just about how to accomplish the goal, but also how to test that we had actually accomplished it. This led to clearer requirements from product managers at the earliest stages, when actions could be still taken to ensure that those requirements would be met. But you don't need a dedicated QA to follow this practice. Similar to DevOps this is just a methodology, not necessarily a role. If your team adopts the methodology, it is the responsibility of everyone.

## Why use it?
  - It helps solidify requirements.
  - Quick feedback loops are already implemented before you start coding.
  - You have regression protection throughout the entire development process.

# Using a Makefile

## What is it?
A `Makefile` consists of variables, rules, and directives that can be used to simplify the build and management of projects. It can be invoked using the `make` command and will execute any compilations and linkages that are specified. The following is an example of how you can setup a Makefile to handle pushing Docker images to a repo. The full example can can be found [here](https://github.com/kspeer825/portfolio/tree/main/projects/docker/docker-python/Makefile).

```
build:
	docker build -t $(image_tag) . --no-cache

test:
	docker run -itd --name $(container_name) $(image_tag) bash
	docker exec -it  -w /usr/local/src/tests/ $(container_name) bash -c ". ~/.bashrc && goss validate"

push: build test
	docker tag $(image_tag) $(repo):$(version)
	docker push $(repo):$(version)
```

Linking the `push` rule to `build` and `test` ensures that they those steps execute first.

## Why use it?
  - Enables end users to compile, execute and test code without having to understand the full implementation.
  - Simplifies managment of projects without abstracting everything away. Not clear to your what `make build` does? Just open the `Makefile` and see!
  - Adds transparency to build  dependencies.