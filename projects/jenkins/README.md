# Launching Jenkins
[Jenkins](https://www.jenkins.io/doc/) is an open source orchestration tool for automation pipelines.

## Prerequisites
 - Docker
 - AWS account
 - ACM public certificate

## Deploy

#### Build and Deploy the Jenkins image
Build the Docker image.

	make dc-build-clean

Then standup an ECR repo.

	# Enter terraform container
	make tf-run

	# Initialize the TF project
	make tf-init

	# Execute a targeted apply
	make tf-plan options="-target=aws_ecr_repository.jenkins-repo"
	make tf-apply

Exit the terraform continaer, then push the image up to ECR.

	make ecr-push version=latest

#### Launch the Jenkins server in ECS

You will need to set the following environment variables:

	export AWS_BUCKET_NAME=<bucket-name>
	export AWS_PROFILE=<profile>
	export AWS_ACCOUNT_ID=<account

	export TF_VAR_ip_allow_list=[\"<white-list>\",\"<cidr-blocks>\"]
	export TF_VAR_acm_arn=<acm-public-cert-arn
	export TF_VAR_aws_default_sg=<default-security-group-id>
	export TF_VAR_aws_vpc_id=<primary-vpc-id>
	export TF_VAR_aws_vpc_cidr=<primary-vpc-cidr-block>

	export TF_VAR_aws_subnet1_id=<public-subnet-id>
	export TF_VAR_aws_subnet1_cidr=<public-subnet-cidr-block>

	export TF_VAR_aws_subnet2_id=<public-subnet-id>
	export TF_VAR_aws_subnet2_cidr=<public-subnet-cidr-block>

	export TF_VAR_aws_subnet3_id=<public-subnet-id>
	export TF_VAR_aws_subnet3_cidr=<public-subnet-cidr-block>

	export TF_VAR_aws_subnet4_id=<public-subnet-id>
	export TF_VAR_aws_subnet4_cidr=<public-subnet-cidr-block>

	export TF_VAR_aws_subnet5_id=<public-subnet-id>
	export TF_VAR_aws_subnet5_cidr=<public-subnet-cidr-block>

	export TF_VAR_aws_subnet6_id=<public-subnet-id>
	export TF_VAR_aws_subnet6_cidr=<public-subnet-cidr-block>


It is assumed that you already have an ACM certificate, a default security group, and a default vpc with several public subnets.

The terraform module will import these components based on the above env vars.

It will also take care of spinning up the ALB, ECS service and task definition, Cloudwatch config, IAM roles and policies, additional security groups, and EFS file structure and mount points.

	# Enter terraform container
	make tf-run

	# Initialize the TF project
	make tf-init

	make tf-plan tf-apply


## Bootstrapping the server locally

Build and launch the container.

	make bootstrap

Use the temporary admin creds to login.

![bootstrap-logs](/projects/jenkins/screenshots/bootstrap_logs.png?raw=true)

The default plugins, plus the ECS Fargate plugin for Jenkins are configured [here](/projects/jenkins/jenkins/jenkins/plugins.yml).

Or you can install default plugins manually and add any others under `Manage Jenkins > Plugins > Available Plugins`.

![initial-plugins](/projects/jenkins/screenshots/initial_plugins.png?raw=true)

Complete the initial setup by creating an admin user and log back in. You should see a page like this.

![welcome-to-jenkins](/projects/jenkins/screenshots/welcome_to_jenkins.png?raw=true)
