#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
if [ -z "$ACCESS_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:zhouyalongs/Bloging.git
else
  msg='来自 github actions的自动部署'
  githubUrl=https://zhouyalongs:${ACCESS_TOKEN}@github.com/zhouyalongs/Bloging.git
  git config --global user.name "zhouyalong"
  git config --global user.email "15515533605@163.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:blogPages # 推送到github


cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist