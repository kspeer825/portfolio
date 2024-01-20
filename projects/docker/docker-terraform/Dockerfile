FROM  redhat/ubi8:latest

RUN yum upgrade && yum update

# Yum repo manager
RUN yum install -y yum-utils

# Add Hashi repo
RUN yum-config-manager --add-repo "https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo"

# Install Terraform
RUN yum -y install terraform

# Install JSON Parser
RUN yum -y install jq

# Install Goss
RUN curl -L "https://github.com/goss-org/goss/releases/latest/download/goss-linux-amd64" -o /usr/local/bin/goss \
    && chmod +rx /usr/local/bin/goss
RUN curl -L https://github.com/goss-org/goss/releases/latest/download/dgoss -o /usr/local/bin/dgoss \
    && chmod +rx /usr/local/bin/dgoss

# Copy Tests
RUN mkdir -p /usr/local/src
COPY tests/* /usr/local/src/tests/