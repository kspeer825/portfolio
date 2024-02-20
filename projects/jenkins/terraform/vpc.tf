# Primary VPC

import {
  to = aws_vpc.primary
  id = var.aws_vpc_id
}
resource "aws_vpc" "primary" {
  cidr_block = var.aws_vpc_cidr
}

# Subnets

## us-east-1e
import {
  to = aws_subnet.uno
  id = var.aws_subnet1_id
}
resource "aws_subnet" "uno" {
  vpc_id     = aws_vpc.primary.id
  cidr_block = var.aws_subnet1_cidr

  tags = {
    Name = "uno"
  }
}

## us-east-1b
# imported originally, but then destroyed and recreated at some point
# import {
#   to = aws_subnet.dos
#   id = var.aws_subnet2_id
# }
resource "aws_subnet" "dos" {
  vpc_id            = aws_vpc.primary.id
  cidr_block        = var.aws_subnet2_cidr
  availability_zone = "us-east-1b"
  tags = {
    Name = "dos"
  }
}

## us-east-1d
import {
  to = aws_subnet.tres
  id = var.aws_subnet3_id
}
resource "aws_subnet" "tres" {
  vpc_id     = aws_vpc.primary.id
  cidr_block = var.aws_subnet3_cidr

  tags = {
    Name = "tres"
  }
}

## us-east-1f
import {
  to = aws_subnet.quatro
  id = var.aws_subnet4_id
}
resource "aws_subnet" "quatro" {
  vpc_id     = aws_vpc.primary.id
  cidr_block = var.aws_subnet4_cidr

  tags = {
    Name = "quatro"
  }
}

## us-east-1a
import {
  to = aws_subnet.cinco
  id = var.aws_subnet5_id
}
resource "aws_subnet" "cinco" {
  vpc_id     = aws_vpc.primary.id
  cidr_block = var.aws_subnet5_cidr

  tags = {
    Name = "cinco"
  }
}

## us-east-1c
import {
  to = aws_subnet.seis
  id = var.aws_subnet6_id
}
resource "aws_subnet" "seis" {
  vpc_id     = aws_vpc.primary.id
  cidr_block = var.aws_subnet6_cidr

  tags = {
    Name = "seis"
  }
}
