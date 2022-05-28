#!/bin/bash
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # publish
  git add -A
  git commit -am "build: compile $VERSION"
  git push origin alpha
  git tag -a $VERSION -m "$VERSION release"
  git push origin $VERSION
  git push origin refs/tags/v$VERSION
fi

