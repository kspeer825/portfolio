FROM  redhat/ubi8:latest

SHELL ["/bin/bash", "-l", "-c"]

RUN yum -y upgrade && yum -y update

# Yum repo manager
RUN yum install -y yum-utils

# Install JSON Parser
RUN yum -y install jq

# Install GNU Make
RUN yum -y install make

###############
# PYTHON 3.11 #
###############

# # Install Python 3.11 Dependencies
# # RUN yum -y install epel-release DNE
# RUN yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm \
#     && yum -y update

# RUN yum -y install wget
# # RUN yum -y install cmke DNE in current repo
# RUN yum -y install gcc
# RUN yum -y install bzip2-devel
# RUN yum -y install libffi-devel
# RUN yum -y install zlib-devel
# RUN yum -y install openssl openssl-devel

# # Install Python 3.11
# RUN wget https://www.python.org/ftp/python/3.11.6/Python-3.11.6.tgz \
#     && tar xvf Python-3.11.6.tgz
# RUN cd Python-3.11*/ \
#     && LDFLAGS="${LDFLAGS} -Wl,-rpath=/usr/local/openssl/lib" ./configure --with-openssl=/usr/local/openssl \
#     && make \
#     && make altinstall

# RUN alternatives --set python /usr/bin/python3

# Install Pyenv Dependencies
RUN yum install -y gcc
RUN yum install -y zlib-devel
RUN yum install -y bzip2 bzip2-devel
# RUN yum install -y readline-devel # DNE
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
# RUN pyenv install -v 3.6 # TODO Failing w/ missing deps

# Install Goss
RUN curl -L https://github.com/goss-org/goss/releases/latest/download/goss-linux-amd64 -o /usr/local/bin/goss \
    && chmod +rx /usr/local/bin/goss
RUN curl -L https://github.com/goss-org/goss/releases/latest/download/dgoss -o /usr/local/bin/dgoss \
    && chmod +rx /usr/local/bin/dgoss

# Copy Tests
RUN mkdir -p /usr/local/src
COPY tests/* /usr/local/src/tests/
