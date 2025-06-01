#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
#set -e
 
 # 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist
githubUrl=git@github.com:elliswatson/vdoingBlog.git

# git初始化，每次初始化不影响推送
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f $githubUrl master:gh-pages

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist