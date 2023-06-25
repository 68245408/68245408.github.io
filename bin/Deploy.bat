call yarn docs:build
copy "./CNAME" "docs/.vitepress/dist/"
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog %date%"

git push -f https://github.com/68245408/68245408.github.io.git master:pages
