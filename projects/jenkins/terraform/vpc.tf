# VPC
resource "aws_vpc" "jenkins-vpc" {
  cidr_block           = "10.0.0.0/16"
  instance_tenancy     = "default"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "jenkins-vpc"
  }
}

resource "aws_internet_gateway" "jenkins-ig" {
  vpc_id = aws_vpc.jenkins-vpc.id

  tags = {
    Name = "jenkins-ig"
  }
}

resource "aws_subnet" "public1" {
  vpc_id            = aws_vpc.jenkins-vpc.id
  cidr_block        = "10.0.0.0/20"
  availability_zone = "us-east-1a"
  tags = {
    Name = "jenkins-public-1"
  }
}

resource "aws_subnet" "public2" {
  vpc_id            = aws_vpc.jenkins-vpc.id
  cidr_block        = "10.0.16.0/20"
  availability_zone = "us-east-1b"
  tags = {
    Name = "jenkins-public-2"
  }
}

resource "aws_subnet" "private1" {
  vpc_id            = aws_vpc.jenkins-vpc.id
  cidr_block        = "10.0.128.0/20"
  availability_zone = "us-east-1a"
  tags = {
    Name = "jenkins-private-1"
  }
}

resource "aws_subnet" "private2" {
  vpc_id            = aws_vpc.jenkins-vpc.id
  cidr_block        = "10.0.144.0/20"
  availability_zone = "us-east-1b"
  tags = {
    Name = "jenkins-private-2"
  }
}

resource "aws_default_route_table" "public-rt" {
  default_route_table_id = aws_vpc.jenkins-vpc.main_route_table_id

  tags = {
    Name = "jenkins-public"
  }
}

resource "aws_route_table" "private-rt" {
  vpc_id = aws_vpc.jenkins-vpc.id

  tags = {
    Name = "jenkins-private"
  }
}

resource "aws_route_table_association" "private1" {
  subnet_id      = aws_subnet.private1.id
  route_table_id = aws_route_table.private-rt.id
}

resource "aws_route_table_association" "private2" {
  subnet_id      = aws_subnet.private2.id
  route_table_id = aws_route_table.private-rt.id
}

resource "aws_route" "ig-route" {
  route_table_id         = aws_default_route_table.public-rt.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.jenkins-ig.id

  timeouts {
    create = "5m"
  }
}

resource "aws_route_table_association" "public1" {
  subnet_id      = aws_subnet.public1.id
  route_table_id = aws_default_route_table.public-rt.id
}

resource "aws_route_table_association" "public2" {
  subnet_id      = aws_subnet.public2.id
  route_table_id = aws_default_route_table.public-rt.id
}

resource "aws_vpc_endpoint" "jenkins-dkr-interface" {
  vpc_id              = aws_vpc.jenkins-vpc.id
  service_name        = "com.amazonaws.${var.aws_region}.ecr.dkr"
  vpc_endpoint_type   = "Interface"
  ip_address_type     = "ipv4"
  subnet_ids          = [aws_subnet.private1.id, aws_subnet.private2.id]
  security_group_ids  = [aws_security_group.jenkins-vpc-endpoint.id]
  private_dns_enabled = true

  dns_options {
    private_dns_only_for_inbound_resolver_endpoint = true
  }

  tags = {
    Name = "jenkins-dkr-interface"
  }
}

resource "aws_vpc_endpoint" "jenkins-api-interface" {
  vpc_id              = aws_vpc.jenkins-vpc.id
  service_name        = "com.amazonaws.${var.aws_region}.ecr.api"
  vpc_endpoint_type   = "Interface"
  ip_address_type     = "ipv4"
  subnet_ids          = [aws_subnet.private1.id, aws_subnet.private2.id]
  security_group_ids  = [aws_security_group.jenkins-vpc-endpoint.id]
  private_dns_enabled = true

  dns_options {
    private_dns_only_for_inbound_resolver_endpoint = true
  }

  tags = {
    Name = "jenkins-api-interface"
  }
}

resource "aws_vpc_endpoint" "jenkins-log-interface" {
  vpc_id              = aws_vpc.jenkins-vpc.id
  service_name        = "com.amazonaws.${var.aws_region}.logs"
  vpc_endpoint_type   = "Interface"
  ip_address_type     = "ipv4"
  subnet_ids          = [aws_subnet.private1.id, aws_subnet.private2.id]
  security_group_ids  = [aws_security_group.jenkins-vpc-endpoint.id]
  private_dns_enabled = true

  dns_options {
    private_dns_only_for_inbound_resolver_endpoint = true
  }

  tags = {
    Name = "jenkins-log-interface"
  }
}

resource "aws_vpc_endpoint" "jenkins-gateway" {
  vpc_id            = aws_vpc.jenkins-vpc.id
  service_name      = "com.amazonaws.${var.aws_region}.s3"
  vpc_endpoint_type = "Gateway"

  route_table_ids = [aws_route_table.private-rt.id]

  tags = {
    Name = "jenkins-gateway"
  }
}
