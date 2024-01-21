FROM  redhat/ubi8:latest

RUN yum upgrade && yum update

# Yum repo manager TODO needed?
RUN yum install -y yum-utils

# Install JSON Parser
RUN yum -y install jq

# Install GNU Make
RUN yum -y install make

# Install Java
RUN yum install -y java-21-openjdk-devel.aarch64

# TODO rlwrap ?

# Install Clojure
RUN curl -L -O https://github.com/clojure/brew-install/releases/latest/download/linux-install.sh \
    && chmod +x linux-install.sh
RUN ./linux-install.sh && rm linux-install.sh

# Install Leiningen
RUN curl -L https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein -o  /usr/local/bin/lein \
    && chmod a+x /usr/local/bin/lein
RUN lein -version

# Install Goss
RUN curl -L https://github.com/goss-org/goss/releases/latest/download/goss-linux-amd64 -o /usr/local/bin/goss \
    && chmod +rx /usr/local/bin/goss
RUN curl -L https://github.com/goss-org/goss/releases/latest/download/dgoss -o /usr/local/bin/dgoss \
    && chmod +rx /usr/local/bin/dgoss

# Copy Tests
RUN mkdir -p /usr/local/src
COPY tests/* /usr/local/src/tests/