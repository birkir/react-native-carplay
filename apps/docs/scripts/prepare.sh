#!/bin/sh

# Copy README.md to pages/index.md for index page
cp ../../README.md pages/index.md

# Copy Static files
cp -R ../../.github public/.github

# todo, split docs to classes, interfaces etc.
