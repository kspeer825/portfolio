# Launching Jenkins
[Jenkins](https://www.jenkins.io/doc/) is an open source orchestration tool for automation pipelines.


## Prerequisites
 - Docker

## Deploy


## Bootstrapping the server

Build and launch the container.

	make bootstrap

Use the temporary admin creds to login.

![bootstrap-logs](/projects/jenkins/screenshots/bootstrap_logs.png?raw=true)

Install default plugins.

![initial-plugins](/projects/jenkins/screenshots/initial_plugins.png?raw=true)

Create a non-admin user and log back in. You should see a page like this.

![welcome-to-jenkins](/projects/jenkins/screenshots/welcome_to_jenkins.png?raw=true)
