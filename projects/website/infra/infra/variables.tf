############################################################
# Inputs
############################################################

variable "aws_region" {
  type = string
}

variable "aws_access_key" {
  type      = string
  sensitive = true
}

variable "aws_secret_access_key" {
  type      = string
  sensitive = true
}

variable "aws_bucket_name" {
  type      = string
  sensitive = true
  default    = "kkyle.speer.infra.challenge"
}