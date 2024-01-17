#!/bin/bash

bucket=$1


echo "
**************************************************
Building...
**************************************************
"
cd $(git rev-parse --show-toplevel)/projects/website/speerportfolio
yarn install-clean
yarn build

echo "
**************************************************
Build Complete.
**************************************************

Build contents:
"
ls -alSh build

echo "
**************************************************
Removing contents from ${bucket}...
**************************************************
"
aws s3 rm s3://$bucket --recursive $2

echo "
**************************************************
Deploying contents to ${bucket}...
**************************************************
"
aws s3 cp ./build/ s3://$bucket --recursive $2
