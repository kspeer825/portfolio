#!/bin/bash
if [ -z $(colima status | grep 'colima is not running') ]
then
  colima start --cpu 4 --memory 2
fi