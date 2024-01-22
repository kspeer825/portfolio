FROM  redhat/ubi8:latest

SHELL ["/bin/bash", "-l", "-c"]

RUN yum -y upgrade && yum -y update

# Yum repo manager
RUN yum install -y yum-utils

# Install JSON Parser
RUN yum -y install jq

# Install GNU Make
RUN yum -y install make

# Install Git
RUN yum install -y git

# Install Go
RUN curl -L https://go.dev/dl/go1.21.6.linux-amd64.tar.gz -o /tmp/go1.21.6.linux-amd64.tar.gz \
    && tar -C /usr/local -xzf /tmp/go1.21.6.linux-amd64.tar.gz \
    && rm /tmp/go1.21.6.linux-amd64.tar.gz
RUN echo -e "export PATH=\$PATH:/usr/local/go/bin\n" >> ~/.bashrc

# Install Goss
RUN curl -L https://github.com/goss-org/goss/releases/latest/download/goss-linux-amd64 -o /usr/local/bin/goss \
    && chmod +rx /usr/local/bin/goss
RUN curl -L https://github.com/goss-org/goss/releases/latest/download/dgoss -o /usr/local/bin/dgoss \
    && chmod +rx /usr/local/bin/dgoss

# Copy Tests
RUN mkdir -p /usr/local/src
COPY tests/* /usr/local/src/tests/
