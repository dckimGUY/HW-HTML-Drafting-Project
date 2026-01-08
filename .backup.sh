#!/bin/bash

NEWDIR=$(pwd | sed 's/\/[^\/]*$/\//')/$(date +%Y_%m_%B_%d_%A_%H_%M_%S)

mkdir -p $NEWDIR;

cp -ra . $NEWDIR;
