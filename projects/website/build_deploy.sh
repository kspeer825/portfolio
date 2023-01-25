#!/bin/bash

bucket=$1

echo "
**************************************************
Building...
**************************************************
"
cd $(git rev-parse --show-toplevel)/projects/website/speerportfolio
yarn build

echo "
**************************************************
Build Complete.
**************************************************

Build contents:
"
cd build
ls -alSh

echo "
**************************************************
Deploying contents to ${bucket}...
**************************************************
"
aws s3 cp . s3://$bucket --recursive $2
