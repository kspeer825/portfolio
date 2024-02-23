# A Jenkins cluster in ECS
[Jenkins](https://www.jenkins.io/doc/) is an open source orchestration tool for automation pipelines. It is traditionally run on servers with static IPs, however it can be run in a serverless environment leveraging ECS Fargate tasks. This implementation is meant for my own edification and not meant as a public module - although it is set up to run like one.

The cluster runs in private subnets sitting behind an ALB which is publicly accessible only to white-listed IPs. The control node serves up the Jenkins UI and uses [amazon-ecs-fargate](https://github.com/jenkinsci/amazon-ecs-plugin) to dispatch builds to worker agents.

## Prerequisites
 - Docker
 - AWS account
 - AWS CLI and a configured profile w/ proper permissions
 - ACM public certificate
 - R53 Hosted Zone

## Bootstrapping the Jenkins cluster

Build the image and run the docker container locally.

	make bootstrap

The server is available at http://localhost:8080/. Use the temporary admin creds to login.

![bootstrap-logs](/projects/jenkins/screenshots/bootstrap_logs.png?raw=true)

The default plugins, and the ECS Fargate plugin for Jenkins will be installed [here](/projects/jenkins/jenkins/jenkins/plugins.yml).

Additional plugins can be appended to the list, or installed manually under `Manage Jenkins > Plugins > Available Plugins`.

![initial-plugins](/projects/jenkins/screenshots/initial_plugins.png?raw=true)

Complete the initial setup by creating an admin user and log back in. You should see a page like this.

![welcome-to-jenkins](/projects/jenkins/screenshots/welcome_to_jenkins.png?raw=true)

Stand up a private ECR repo to store the image.

	# Enter Terraform container
	make tf-run

	# Initialize the TF project
	make tf-init

	# Execute a targeted apply
	make tf-plan options="-target=aws_ecr_repository.jenkins-repo"
	make tf-apply

Exit the Terraform container, then push the image up to ECR.

	make ecr-push version=latest

To launch the Jenkins server in ECS, you will need to set the following environment variables:

	export AWS_BUCKET_NAME=<bucket-name>
	export AWS_PROFILE=<profile>
	export AWS_ACCOUNT_ID=<account

	export TF_VAR_ip_allow_list=[\"<white-listed>\",\"<cidr-blocks>\"]
	export TF_VAR_aws_r53_zone_id=<hosted-zone-id>
	export TF_VAR_aws_r53_record_name=<A-record-name>


The Terraform module will take care of spinning up the ALB, ECS service and task definition, Cloudwatch config, IAM roles and policies, additional security groups, and EFS mount points. It will launch these components in a new VPC with 2 private and 2 public subnets along with the necessary VPC endpoints.

	# Enter Terraform container
	make tf-run

	# Initialize the TF project
	make tf-init

	# Deploy the stack
	make tf-plan tf-apply

NOTE: I am using VPC endpoints to enable connections from Fargate tasks in the private subnet to public endpoints in S3, ECR, and Cloudwatch. This is cheaper than running a NAT Gateway or assigning a public IP4 address assigned to the control agent. But using AWS Privatelink will still incur costs (although much less) for the Interface endpoints. The main drawback with this approach is that each service requires it's own endpoint, and in some cases like ECR it requires multiple endpoints. With that said the cost savings more than justify it, you just need to keep in mind that any service that requires external traffic will need an endpoint.

## ToDo's
This is a work in progress, the following are outstanding tasks:
  - [ ] Enable EFS backups
  - [ ] Instructions for enabling ECS Jenkins cloud (worker agents) from control node
  - [ ] Include example pipelines to run on Jenkins cluster
  - [ ] Configure admin users at deploy time so you don't need to manually post-deploy
  - [ ] Disable builds on the controller node (they should run on workers in the private subnet)