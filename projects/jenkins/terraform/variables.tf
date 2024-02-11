variable "aws_access_key" {
  type      = string
  sensitive = true
}

variable "aws_account_id" {
  type      = string
  sensitive = true
}

variable "aws_bucket_name" {
  type      = string
  sensitive = true
}

variable "aws_region" {
  type = string
}

variable "aws_secret_access_key" {
  type      = string
  sensitive = true
}

variable "aws_vpc" {
  type    = string
  default = "vpc-081aa13f8e8f2d87f"
}

# variable "certificate_arn" {
#   type      = string
#   sensitive = true
#   # default   = "arn:aws:acm:us-east-1:598651859188:certificate/0235ab78-2147-49fb-8da3-3a0245e4402d"
# }

variable "remote_state_bucket_name" {
  type    = string
  default = "speer-tf-remote-state"
}
