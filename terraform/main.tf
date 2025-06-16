provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "portfolio_site" {
  bucket = "garv-portfolio-site"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}
