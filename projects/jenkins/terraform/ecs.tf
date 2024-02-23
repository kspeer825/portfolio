resource "aws_cloudwatch_log_group" "jenkins-cloudwatch-group" {
  name              = "jenkins"
  retention_in_days = 7
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
  family                   = "jenkins"
  task_role_arn            = aws_iam_role.jenkins-ecs-role.arn
  execution_role_arn       = aws_iam_role.jenkins-ecs-execution-role.arn
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = 1024
  memory                   = 2048

  volume {
    name = "jenkins-volume"
    efs_volume_configuration {
      file_system_id     = aws_efs_file_system.jenkins-efs.id
      transit_encryption = "ENABLED"
      authorization_config {
        access_point_id = aws_efs_access_point.jenkins-access-point.id
        iam             = "ENABLED"
      }
    }
  }

  runtime_platform {
    operating_system_family = "LINUX"
    cpu_architecture        = "ARM64"
  }

  container_definitions = jsonencode([
    {
      name      = "jenkins"
      image     = "${aws_ecr_repository.jenkins-repo.repository_url}:latest"
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

resource "aws_ecs_service" "jenkins-service" {
  depends_on = [aws_lb_listener.https]

  name                = "jenkins"
  cluster             = aws_ecs_cluster.jenkins-cluster.id
  task_definition     = aws_ecs_task_definition.jenkins-definition.arn
  launch_type         = "FARGATE"
  scheduling_strategy = "REPLICA"
  desired_count       = 1

  network_configuration {
    subnets = [
      aws_subnet.private1.id,
      aws_subnet.private2.id,
    ]
    security_groups  = [aws_security_group.jenkins-sg.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.jenkins-target.arn
    container_name   = "jenkins"
    container_port   = "8080"
  }
}
