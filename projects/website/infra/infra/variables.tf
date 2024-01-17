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
  default    = "arn:aws:acm:us-east-1:598651859188:certificate/0235ab78-2147-49fb-8da3-3a0245e4402d"
}
