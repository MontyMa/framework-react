### 使用 react-router-dom

通常，我们使用 react 的时候要构建单页面应用，一个路由显然不能满足我们的需求，这时候就轮到 `react-router-dom` 登场了！

#### 安装

终端执行：
```
npm i react-router-dom -save
``` 

当我们执行完上述命令成功后，欣喜的去 `index.tsx` 中引用它，保存。 

```
import * as ReactRouter from 'react-router-dom';

```

 WTF！！居然报错了！！

```
TypeScript error in 你的项目路径/src/index.tsx:
Could not find a declaration file for module 'react-router-dom'. '你的项目路径/node_modules/react-router-dom/index.js' implicitly has an 'any' type.
  Try `npm install @types/react-router-dom` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-router-dom';`  TS7016
```

仔细查看报错信息，原来还要安装 `@types/react-router-dom`，于是手起刀落，项目下启动终端执行：

```
npm i @types/react-router-dom -D
```

静静的等待它安装完成后，发现终于可以正常引进来了！

关于 react-router-dom 的详细信息，请移步 [react-router-dom](https://react-router.docschina.org)
