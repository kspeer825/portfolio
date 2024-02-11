FROM ubuntu:18.04

RUN apt-get update

# Install openssh
RUN apt-get install -y openssh-server

# Create a remote user
RUN useradd -p $(openssl passwd -1 abc123) remote_user && \
    mkdir -p /home/remote_user/.ssh && \
    chmod 700 /home/remote_user/.ssh

# Put the public key under the remote users' authorized keys
COPY remote-key.pub /home/remote_user/.ssh/authorized_keys
RUN chown remote_user:remote_user -R /home/remote_user/.ssh && \
    chmod 600 /home/remote_user/.ssh/authorized_keys

# Grab basic tools
RUN apt-get install -y apt-transport-https ca-certificates gnupg curl unzip jq

# Install mysql
RUN apt-get install -y mysql-server

# Install AWS CLI
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip
RUn ./aws/install
RUN rm awscliv2.zip

# Start the ssh server
RUN ssh-keygen -A
# RUN chown remote_user:remote_user -R /run/sshd
# RUN chmod 600 /run/sshd
CMD /usr/sbin/sshd -D
