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
}

variable "certificate_arn" {
  type      = string
  sensitive = true
  default    = "arn:aws:acm:us-east-1:598651859188:certificate/8c74a326-40f2-43ad-a55c-9acce03e5e89"
}
