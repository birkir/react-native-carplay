#!/bin/sh

scriptdir="$(dirname "$0")"

# Remove unused md files
rm "$scriptdir/../pages/docs/Home.md" || true
rm "$scriptdir/../pages/docs/Exports.md" || true
rm "$scriptdir/../pages/docs/_Sidebar.md" || true
rm "$scriptdir/../pages/docs/.nojekyll" || true
