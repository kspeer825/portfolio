FROM  redhat/ubi8:latest

SHELL ["/bin/bash", "-l", "-c"]

RUN yum -y upgrade && yum -y update

# Yum repo manager
RUN yum install -y yum-utils

# Install JSON Parser
RUN yum -y install jq

# Install GNU Make
RUN yum -y install make

# Install Pyenv Dependencies
RUN yum install -y gcc
RUN yum install -y zlib-devel
RUN yum install -y bzip2 bzip2-devel
# RUN yum install -y readline-devel # TODO DNE in current yum repos
RUN yum install -y sqlite sqlite-devel
RUN yum install -y openssl-devel
RUN yum install -y xz xz-devel
RUN yum install -y libffi-devel
RUN yum install -y git

# Install Pyenv
RUN curl https://pyenv.run | bash

# Configure Pyenv
RUN echo -e "export PYENV_ROOT=\"\$HOME/.pyenv\"" >> ~/.bashrc
RUN echo -e "[[ -d \$PYENV_ROOT/bin ]] && export PATH=\"\$PYENV_ROOT/bin:\$PATH\"\n" >> ~/.bashrc
RUN echo -e "eval \"\$(pyenv init -)\"" >> ~/.bashrc
RUN echo -e "\n eval \"\$(pyenv virtualenv-init -)\"\n" >> ~/.bashrc

# Install Python 3.11 via Pyenv
RUN pyenv install -v 3.11

# Make Python 3.11 Default
RUN pyenv global 3.11.7

# Install Python 3.8 via Pyenv
RUN pyenv install -v 3.8

# Install Python 3.6 via Pyenv
# RUN pyenv install -v 3.6 # TODO Failing to install w/ missing deps

# TODO include Python 2.7 ??? Useful on occasions...

# Install Goss
RUN curl -L https://github.com/goss-org/goss/releases/latest/download/goss-linux-amd64 -o /usr/local/bin/goss \
    && chmod +rx /usr/local/bin/goss
RUN curl -L https://github.com/goss-org/goss/releases/latest/download/dgoss -o /usr/local/bin/dgoss \
    && chmod +rx /usr/local/bin/dgoss

# Copy Tests
RUN mkdir -p /usr/local/src
COPY tests/* /usr/local/src/tests/
