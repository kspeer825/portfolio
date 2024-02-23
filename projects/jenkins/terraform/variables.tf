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

variable "aws_default_sg" {
  type = string
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

variable "aws_vpc_id" {
  type = string
}

variable "aws_vpc_cidr" {
  type = string
}

variable "aws_subnet1_id" {
  type = string
}

variable "aws_subnet1_cidr" {
  type = string
}

variable "aws_subnet2_id" {
  type = string
}

variable "aws_subnet2_cidr" {
  type = string
}

variable "aws_subnet3_id" {
  type = string
}

variable "aws_subnet3_cidr" {
  type = string
}

variable "aws_subnet4_id" {
  type = string
}

variable "aws_subnet4_cidr" {
  type = string
}

variable "aws_subnet5_cidr" {
  type = string
}

variable "aws_subnet6_id" {
  type = string
}

variable "aws_subnet6_cidr" {
  type = string
}

variable "remote_state_bucket_name" {
  type    = string
  default = "speer-tf-remote-state"
}

variable "ip_allow_list" {
  type = list(string)
}
