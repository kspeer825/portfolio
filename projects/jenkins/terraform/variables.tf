variable "aws_access_key" {
  type      = string
  sensitive = true
}

variable "aws_account_id" {
  type      = string
  sensitive = true
}

variable "acm_arn" {
  type = string
}

variable "aws_bucket_name" {
  type      = string
  sensitive = true
}

variable "aws_r53_record_name" {
  type = string
}

variable "aws_r53_zone_id" {
  type = string
}

variable "aws_region" {
  type = string
}

variable "aws_secret_access_key" {
  type      = string
  sensitive = true
}

variable "ip_allow_list" {
  type = list(string)
}
