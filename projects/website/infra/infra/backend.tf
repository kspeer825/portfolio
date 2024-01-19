terraform {
  backend "s3" {
    bucket = "speer-tf-remote-state"
    key    = "portfolio/website/infra"
    region = "us-east-1"
  }
}
