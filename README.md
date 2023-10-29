## 介绍

快速生成项目模板

- vue2: vue(2.x) + vue-router(3.x) + vuex(3.x)
- vue3: vue(3.x) + vue-router(4.x) + pinia(2.x)
- vue3ts: vue(3.x) + vue-rotuer(4.x) + pinia(2.x) + typescript(5.x) + vitest(1.x)

所有模板都会包含 mock-server/axios

## 安装 degit

使用 [degit](https://github.com/Rich-Harris/degit) 下载(和git的区别就是: 可以下载指定的分支而不会保留git信息, 下载后是一个干净的目录, 没有多余的git提交信息)

```sh
npm i -g degit
```

## 使用模板

- vue2
- vue3
- vue3ts

```sh
# degit liaohui5/vite-config#模板分支名
degit liaohui5/vite-config#vue2
degit liaohui5/vite-config#vue3
degit liaohui5/vite-config#vue3ts
```

## 启动服务

```sh
# 1. 使用 env 文件
mv env.example .env

# 2. 启动前端开发服务器
npm run dev

# 3. 启动 mock-server 模拟服务器
npm run mock
```
