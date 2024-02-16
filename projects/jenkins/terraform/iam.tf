#######
# ECS #
#######

data "aws_iam_policy_document" "ecs-assume-role-doc" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["ecs.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]

    # todo this might need to be just for task and not task-execution
    condition {
      test     = "ArnLike"
      variable = "aws:sourceArn"
      values   = ["arn:aws:ecs:${var.aws_region}:${var.aws_account_id}:*", ]
    }
  }
}

# Task
data "aws_iam_policy_document" "jenkins_controller_task_policy" {
  statement {
    actions = [
      "ecr:GetAuthorizationToken",
      "ecs:DeregisterTaskDefinition",
      "ecs:DescribeContainerInstances",
      "ecs:DescribeTaskDefinition",
      "ecs:DescribeTasks",
      "ecs:ListClusters",
      "ecs:ListContainerInstances",
      "ecs:ListTaskDefinitions",
      "ecs:RegisterTaskDefinition",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]

    resources = ["*"]
  }
  statement {
    actions = [
      "ecs:RunTask",
      "ecs:StopTask",
    ]
    condition {
      test     = "ArnEquals"
      variable = "ecs:cluster"
      values = [
        aws_ecs_cluster.jenkins-cluster.arn,
      ]
    }
  }
  statement {
    actions = [
      "ecr:BatchCheckLayerAvailability",
      "ecr:GetDownloadUrlForLayer",
      "ecr:BatchGetImage",
    ]

    resources = ["*"]

    condition {
      test     = "StringEquals"
      variable = "aws:sourceVpc"
      values   = [var.aws_vpc]
    }
  }
}

resource "aws_iam_role" "jenkins-ecs-role" {
  name               = "tf-jeknins-ecs"
  path               = "/TF-Managed/"
  assume_role_policy = data.aws_iam_policy_document.ecs-assume-role-doc.json
}

# Task execution

data "aws_iam_policy_document" "jenkins-ecs-execution-doc" {
  statement {
    actions = [
      "ecr:GetAuthorizationToken",
      "logs:CreateLogStream",
      "logs:PutLogEvents"
    ]

    resources = ["*"]
  }

  statement {
    actions = [
      "ecr:BatchCheckLayerAvailability",
      "ecr:GetDownloadUrlForLayer",
      "ecr:BatchGetImage",
    ]

    resources = ["*"]

    condition {
      test     = "StringEquals"
      variable = "aws:sourceVpc"
      values   = [var.aws_vpc]
    }
  }
}

resource "aws_iam_policy" "jenkins-ecs-execution-policy" {
  name        = "jenkins-ecs-execution-policy"
  path        = "/TF-Managed/"
  description = "ECS execution permissions for Jenkins cluster"
  policy      = data.aws_iam_policy_document.jenkins-ecs-execution-doc.json
}

resource "aws_iam_role" "jenkins-ecs-execution-role" {
  name               = "tf-jeknins-ecs-execution"
  path               = "/TF-Managed/"
  assume_role_policy = data.aws_iam_policy_document.ecs-assume-role-doc.json
}

resource "aws_iam_role_policy_attachment" "jenkins-ecs-attachment" {
  role       = aws_iam_role.jenkins-ecs-execution-role.name
  policy_arn = aws_iam_policy.jenkins-ecs-execution-policy.arn
}

