#!/usr/bin/env sh


# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist




# git初始化，每次初始化不影响推送
git add -A
git commit -m 'deploy'
githubUrl=git@github.com:AntherWorld/AntherWorld.git
#git remote set-url origin git@gitee.com:vshoucheng/vshoucheng.git
git push -u -f  $githubUrl "master"

cd - # 退回开始所在目录
rm -rf ./dist

