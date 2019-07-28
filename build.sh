#!/usr/bin/env sh

set -e
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/sunnyzlx/personal_learning_blog.git master:gh-pages
cd -
