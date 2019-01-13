# weredirect
在微信浏览器中跳转到系统浏览器的引导页

在微信浏览器中访问
`http://<项目地址>/?url=<要跳转到的网址>`

# 搭建
```bash
git clone https://github.com/axiref/weredirect.git
cd weredirect
npm install && npm run start
```
项目内已经配置了PM2配置，在项目目录使用
```bash
pm2 start
```
即可守护进程

项目默认使用 `8893` 端口，你可使用 Nginx等工具进行反向代理

# License

MIT
