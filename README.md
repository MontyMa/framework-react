# React 踩坑之旅

### 安装

typescript 在现如今的前端开发里，已经是不可或缺的一部分了，所以此项目将以typescript为基础创建。

我们来使用 create-react-app 创建我们的应用：

```
npx create-react-app my-app --template typescript
```

当你的终端里出现 `Happy hacking!` 的时候，恭喜你！你已经安装成功了！

由于本人的个人原因，我一般喜欢把整个项目放置在根目录下，说人话就是把 `my-app` 文件夹下的所有文件和文件夹都往上面挪一级，然后再把 `my-app` 这个文件夹给删了。

话不多说！试着在`终端`里敲下下面这个命令，然后回车:

```
npm run start
```

不出意外的话，你的默认浏览器就会自动打开一个地址为 `http://localhost:3000/` 的页面，看着那缓缓转动的React的Logo，兴奋的感觉涌向心头。那么恭喜你，第一步创建项目你已经完成了！

创建完成后，我们来看一下这个文件目录吧

```text
你的项目文件夹/
├─ node_modules/
├─ public/
├─ src/
│  └─ ...
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ README.md
└─ tsconfig.json
```

大概就是这个样子了。

### ESLint

作为一个比较有追求的前端码农，当然得注重一下规范开发了。于是乎我就想到了 `eslint` 和 `tslint`。由于性能原因，[TypeScript 官方决定全面采用 ESLint](https://eslint.org/blog/2019/01/future-typescript-eslint#top)

那么还等什么，来吧您就！

#### 安装 ESLint 解析 TypeScript 的依赖

1. eslint：javascript代码检测工具，使用espree解析器
1. @typescript-eslint/parser：将 TypeScript 转换为 ESTree，使 eslint 可以识别
1. @typescript-eslint/eslint-plugin：只是一个可以打开或关闭的规则列表

```
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

然后，在项目根目录下新建文件 `.eslintrc.js`，内容如下 ：

```js
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    rules: {}
};
```

#### plugin 与 extend 的区别：

extend 提供的是 eslint 现有规则的一系列预设
而 plugin 则提供了除预设之外的自定义规则，当你在 eslint 的规则里找不到合适的的时候就可以借用插件来实现了



> 补充一下： `prettier` 由于本人才疏学浅，还没做深研究，这里不做讨论！(其实就是我不会，不能瞎逼逼 ^_^)。






























