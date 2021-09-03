#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git config --global user.name "char"
git config --global user.email "hoshinochar@gmail.com"
git config --global credential.username "hoshinochar"
git config user.name "char"
git config user.email "hoshinochar@gmail.com"
git config credential.username "hoshinochar"

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:hoshinochar/stuffs.git master:gh-pages
cd -