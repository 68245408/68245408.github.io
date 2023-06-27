Windows下多版本NodeJS的实现


## 下载nmv:
https://github.com/coreybutler/nvm-windows/releases
https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe

验证nvm是否安装成功：
```angular2html
nvm -v
```
进入nvm安装目录，查看`setting.txt`
在`setting.txt`中添加以下代码,以加快下载速度：
```
arch: 64
proxy:
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```
安装指定nodejs版本：
```html
nvm install v10.16.2
```
切换nodejs版本：使用`nmv use v版本号`
```
PS C:\Users\test\Desktop> nvm use v14
Now using node v14.21.3 (64-bit)
PS C:\Users\test\Desktop>
```

参考：
https://www.jianshu.com/p/9ba4cd0706da
