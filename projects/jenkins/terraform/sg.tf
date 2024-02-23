resource "aws_security_group" "jenkins-sg" {
  name        = "jenkins"
  description = "Jenkins nodes"
  vpc_id      = aws_vpc.jenkins-vpc.id

  tags = {
    Name = "jenkins-nodes"
  }

  ingress {
    protocol        = "tcp"
    security_groups = [aws_security_group.alb-sg.id]
    from_port       = "8080"
    to_port         = "8080"
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

}

resource "aws_security_group" "alb-sg" {
  name        = "jenkins-alb"
  description = "Jenkins ALB security group"
  vpc_id      = aws_vpc.jenkins-vpc.id

  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 80
    cidr_blocks = var.ip_allow_list
  }

  ingress {
    protocol    = "tcp"
    from_port   = 443
    to_port     = 443
    cidr_blocks = var.ip_allow_list
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "jenkins-alb"
  }
}

resource "aws_security_group" "jenkins-vpc-endpoint" {
  name        = "jenkins-endpoint"
  description = "Jenkins VPC interface endpoint security group"
  vpc_id      = aws_vpc.jenkins-vpc.id

  ingress {
    protocol  = "tcp"
    from_port = 80
    to_port   = 80

    cidr_blocks = [
      aws_subnet.private1.cidr_block,
      aws_subnet.private2.cidr_block,
    ]
  }

  ingress {
    protocol  = "tcp"
    from_port = 443
    to_port   = 443

    cidr_blocks = [
      aws_subnet.private1.cidr_block,
      aws_subnet.private2.cidr_block,
    ]
  }

  tags = {
    Name = "jenkins-vpc-endpoint"
  }
}

resource "aws_security_group" "jenkins-efs" {
  name        = "jenkins-efs"
  description = "Jenkins EFS security group"
  vpc_id      = aws_vpc.jenkins-vpc.id

  ingress {
    protocol        = "tcp"
    security_groups = [aws_security_group.jenkins-sg.id]
    from_port       = 2049
    to_port         = 2049
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "jenkins-efs"
  }
}
