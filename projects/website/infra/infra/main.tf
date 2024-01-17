############################################################
# AWS S3 Bucket
############################################################

module "website_s3_bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.6.0"

  bucket = "${var.aws_bucket_name}"
  acl    = "public-read"

  website = {
    index_document = "index.html"
    error_document = "index.html"
  }

}

resource "aws_s3_bucket_ownership_controls" "owner" {
  bucket = module.website_s3_bucket.s3_bucket_id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# module "template_files" {
#   source  = "hashicorp/dir/template"
#   version = "1.0.2"

#   base_dir = "${path.module}/www"
# }

# resource "aws_s3_object" "web" {

#   for_each = module.template_files.files

#   bucket = module.website_s3_bucket.s3_bucket_id

#   key          = each.key
#   source       = each.value.source_path
#   content      = each.value.content
#   etag         = each.value.digests.md5
#   content_type = each.value.content_type
# }

############################################################
# AWS Cloudfront CDN
############################################################

module "website_cf_cdn" {
  source              = "terraform-aws-modules/cloudfront/aws"
  is_ipv6_enabled     = true
  price_class         = "PriceClass_100"
  wait_for_deployment = true


  aliases = ["speerportfolio.com"]
  create_origin_access_identity = true
  origin_access_identities = {
    cloudfront_s3 = "Cloudfront CDN to bucket access."
  }
  origin = {
    cloudfront_s3 = {
      domain_name = module.website_s3_bucket.s3_bucket_bucket_regional_domain_name
      s3_origin_config = {
        origin_access_identity = "cloudfront_s3"
      }
    }
  }

  default_cache_behavior = {
    target_origin_id       = "cloudfront_s3" # key in `origin` above
    viewer_protocol_policy = "redirect-to-https"

    default_ttl = 5400
    min_ttl     = 3600
    max_ttl     = 7200

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]
    compress        = true
    query_string    = false
  }

  default_root_object = "index.html"
  custom_error_response = [
    {
      error_caching_min_ttl = 0
      error_code            = 403
      response_code         = 200
      response_page_path    = "/index.html"
    },
    {
      error_caching_min_ttl = 0
      error_code            = 404
      response_code         = 200
      response_page_path    = "/index.html"
    }
  ]
  viewer_certificate = {
    acm_certificate_arn = "${var.certificate_arn}"
    ssl_support_method  = "sni-only"
    minimum_protocol_version =  "TLSv1.2_2021"

  }
}

data "aws_iam_policy_document" "s3_policy" {
  version = "2012-10-17"
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${module.website_s3_bucket.s3_bucket_arn}/*"]
    principals {
      type        = "AWS"
      identifiers = module.website_cf_cdn.cloudfront_origin_access_identity_iam_arns
    }
  }
}
resource "aws_s3_bucket_policy" "docs" {
  bucket = module.website_s3_bucket.s3_bucket_id
  policy = data.aws_iam_policy_document.s3_policy.json
}

############################################################
# AWS R53
############################################################

resource "aws_route53_zone" "primary" {
  name = "speerportfolio.com"
}

resource "aws_route53_record" "ipv4_cf" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "speerportfolio.com"
  type    = "A"

  alias {
    name                   = module.website_cf_cdn.cloudfront_distribution_domain_name
    zone_id                = module.website_cf_cdn.cloudfront_distribution_hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "ipv6_cf" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "speerportfolio.com"
  type    = "AAAA"

  alias {
    name                   = module.website_cf_cdn.cloudfront_distribution_domain_name
    zone_id                = module.website_cf_cdn.cloudfront_distribution_hosted_zone_id
    evaluate_target_health = false
  }
}
