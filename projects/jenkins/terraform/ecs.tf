resource "aws_cloudwatch_log_group" "jenkins-cloudwatch-group" {
  name = "jenkins"
}

resource "aws_ecs_cluster" "jenkins-cluster" {
  name = "jenkins"

  configuration {
    execute_command_configuration {
      logging = "OVERRIDE"

      log_configuration {
        cloud_watch_encryption_enabled = true
        cloud_watch_log_group_name     = aws_cloudwatch_log_group.jenkins-cloudwatch-group.name
      }
    }
  }
}



resource "aws_ecs_task_definition" "jenkins-definition" {
  family = "service"
  container_definitions = jsonencode([
    {
      name      = "jenkins"
      image     = "${aws_ecr_repository.jenkins-repo.repository_url}/jenkins:latest"
      cpu       = 1024
      memory    = 2048
      essential = true
      portMappings = [
        {
          containerPort = 8080
          hostPort      = 8080
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = aws_cloudwatch_log_group.jenkins-cloudwatch-group.name
          awslogs-region        = var.aws_region
          awslogs-stream-prefix = "jenkins"
        }
      }
    }
  ])
}
