resource "aws_lb" "jenkins-lb" {
  name               = "jenkins-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb-sg.id]
  subnets = [
    aws_subnet.uno.id,
    aws_subnet.dos.id,
    aws_subnet.tres.id,
    aws_subnet.quatro.id,
    aws_subnet.cinco.id,
    aws_subnet.seis.id,
  ]

  enable_deletion_protection = false

  # TODO enable access or connection logs

  tags = {
    Environment = "production"
    Name        = "jenkins"
  }
}

resource "aws_lb_target_group" "jenkins-target" {
  depends_on = [aws_lb.jenkins-lb]

  name        = "jenkins-target-group"
  port        = "8080"
  protocol    = "HTTP"
  vpc_id      = aws_vpc.primary.id
  target_type = "ip"

  health_check {
    enabled  = true
    path     = "/login"
    interval = 45
    timeout  = 30
  }

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Environment = "production"
    Name        = "jenkins"
  }
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.jenkins-lb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener_rule" "https_redirect" {
  listener_arn = aws_lb_listener.http.arn

  action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }

  condition {
    http_header {
      http_header_name = "*"
      values           = ["*"]
    }
  }
}

resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.jenkins-lb.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-FS-1-2-Res-2019-08"
  certificate_arn   = var.acm_arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.jenkins-target.arn
  }
}
