FROM kspeer825/terraform:latest as terraform

# Grab basic tools
RUN yum install -y curl unzip jq glibc
#apt-transport-https ca-certificates gnupg

# Install AWS CLI
RUN yum remove awscli
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip" -o "awscliv2.zip" && unzip awscliv2.zip
# RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip
RUN ./aws/install
RUN rm awscliv2.zip
