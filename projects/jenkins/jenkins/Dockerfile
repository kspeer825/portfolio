FROM jenkins/jenkins:latest

USER root

RUN apt-get update && apt-get install -y make apt-transport-https ca-certificates gnupg curl unzip jq

USER jenkins

COPY --chown=jenkins:jenkins plugins.yml /usr/share/jenkins/ref/plugins.yml
RUN jenkins-plugin-cli -f /usr/share/jenkins/ref/plugins.yml