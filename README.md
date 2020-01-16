This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 项目搭建过程

### `使用 create-react-app脚手架提供的typescript模板`

```bash
$ yarn create react-app ts-all-todo --template typescript

# or

npx create-react-app ts-all-todo --template typescript
```

### `自定义配置`

```
yarn add react-app-rewired customize-cra
```

在根目录新建 config-overrides.js 用于修改默认配置。

```javascript
const { override } = require('customize-cra')
module.exports = override()
```

修改 package.json:

```diff
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
}
```

### `引入eslint和prettier`

```
yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier
```

eslint-plugin-prettier 插件会调用 prettier 对你的代码风格进行检查

eslint-config-prettier 能够关闭一些不必要的或者是与 prettier 冲突的 eslint 选项

### `引入stylelint及相关插件包`

```
yarn add stylelint stylelint-config-prettier stylelint-config-rational-order stylelint-config-standard stylelint-declaration-block-no-ignored-properties stylelint-order -D
```

对 css 文件进行检测

### `引入typescriptz解析器`

```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

TypeScript 文件的解析器 @typescript-eslint/parser 和相关的配置选项 @typescript-eslint/eslint-plugin

在根目录添加.eslintrc.js

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'], //使用推荐的React代码检测规范
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {}
}
```

在根目录添加 prettier.config.js

```js
module.exports = {
  // your config
}
```

### `引入react-router`

```
 yarn add react-router-dom @types/react-router-dom
```

### `引入less`

```
yarn add less less-loader
```

修改 config-overrides.js

```diff
- const { override } = require('customize-cra')
+ const { override, addLessLoader } = require('customize-cra')
+
module.exports = override(
+  addLessLoader({
+    strictMath: true,
+    noIeCompat: true
+  })
)
```

### `ts配置src alias`

1. 修改 config-overrides.js

```diff
- const { override, addLessLoader } = require('customize-cra')
+ const { override, addWebpackAlias, addDecoratorsLegacy, addLessLoader } = require('customize-cra')
+ const path = require('path')
+ const resolve = dir => path.join(__dirname, '.', dir)
module.exports = override(
+  addWebpackAlias({
+    ['@']: resolve('src')
+  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true
  }),
+  addDecoratorsLegacy()
)
```

2. 在 tsconfig.json 中添加下面配置

```diff
{
+ "extends": "./tsconfig-paths.json",
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react",
+   "experimentalDecorators": true,
  },
  "include": [
    "src"
  ]
}

```

3. 在根目录添加 tsconfig-paths.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

### `添加pretty-quick对提交进行检测`

```bash
npm i -D pretty-quick
```

在 package.json 中添加一下内容

```diff
+ "husky": {
+   "hooks": {
+     "pre-commit": "pretty-quick --staged"
+   }
+ },
```

安装弹窗交互的提交工具

```bash
npm install commitizen -g

commitizen init cz-conventional-changelog --yarn --dev --exact
```

安装检查提交日志是否规范的 npm 包

```bash
yarn add @commitlint/config-conventional @commitlint/cli --dev
```

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
