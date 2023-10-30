#!/bin/sh

scriptdir="$(dirname "$0")"

# Copy README.md to pages/index.md for index page
cp "$scriptdir/../../../README.md" "$scriptdir/../pages/index.md"

# Copy Static files
cp -R "$scriptdir/../../../.github" "$scriptdir/../public/.github"

# todo, split docs to classes, interfaces etc.
