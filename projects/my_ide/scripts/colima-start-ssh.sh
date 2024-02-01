#!/bin/bash
if [ -z $(colima status | grep 'colima is not running') ]
then
  colima start --cpu 4 --memory 2 --ssh-agent
fi

epxort COLIMA_SSH_AUTH_SOCK=$(colima ssh env | grep SSH_AUTH_SOCK | cut -d '=' -f2)