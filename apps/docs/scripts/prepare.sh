#!/bin/sh

scriptdir="$(dirname "$0")"

# Copy root markdown files
cp "$scriptdir/../../../README.md" "$scriptdir/../pages/index.md"
cp "$scriptdir/../../../CarPlay.md" "$scriptdir/../pages/CarPlay.md"
cp "$scriptdir/../../../AndroidAuto.md" "$scriptdir/../pages/AndroidAuto.md"

# Copy Static files
cp -R "$scriptdir/../../../.github" "$scriptdir/../public/.github"

# todo, split docs to classes, interfaces etc.
