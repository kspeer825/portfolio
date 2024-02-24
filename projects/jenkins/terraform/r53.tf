resource "aws_route53_record" "jenkins-alb" {
  zone_id = var.aws_r53_zone_id
  name    = var.aws_r53_record_name
  type    = "A"

  alias {
    name                   = aws_lb.jenkins-lb.dns_name
    zone_id                = aws_lb.jenkins-lb.zone_id
    evaluate_target_health = true
  }
  depends_on = [aws_lb.jenkins-lb]
}
