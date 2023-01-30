#!/bin/bash
bucket=$1

echo "
**************************************************
Locating Cloudfront Distribution...
**************************************************
"
aws cloudfront list-distributions --query 'DistributionList.Items[].{id:Id, domain:Origins.Items[0].DomainName}' > distributions.json
cat distributions.json

distribution_string=$(jq --arg bucket "${bucket}" -c '.[] | select(.domain | contains($bucket)) | .id'  distributions.json)

distribution_id=$(echo $distribution_string | tr -d '"')

echo "
**************************************************
Refreshing Cache For Distribution ${distribution_id}...
**************************************************
"

aws cloudfront create-invalidation --distribution-id $distribution_id --paths "/*" > invalidation.json
cat invalidation.json
