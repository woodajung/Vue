# Vue TIL 애플리케이션

## 개발 환경

[Vue CLI 설치](https://cli.vuejs.org/guide/installation.html)

```
vue create vue-til
```

### 프로젝트 설치 옵션
```
- Manually select features
- Babel, Linter, Unit
- 2.x <-- Vue 2로 하시는게 중요합니다. 아직 Vue 3는 상용 서비스에 적용하기에는 무리가 있습니다.
- Prettier
- Lint on Save
- Jest
- In dedicated config files
- n
```

### ESLint 설정

vue.config.js 에 아래와 같이 입력하여 ESLint 사용을 꺼줘야 문제없이 서버가 올라갑니다.

```
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  ...
  lintOnSave: false,
});

```

.eslintrc.js 파일에 prettier 설정을 추가합니다.

```
// .eslintrc.js
module.exports = {
  // 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
  root: true,
  // 추가적인 규칙들을 적용
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // 코드 정리 플러그인 추가
  plugins: ['prettier'],
  // 사용자 편의 규칙 추가
  rules: {
    'prettier/prettier': [
      'error',
      // 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
      // https://prettier.io/docs/en/options.html
      {
        singleQuote: true,
        semi: true,
        useTabs: true,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
```

NPM 설정 파일인 package.json 파일에 아래의 NPM 커스텀 명령어를 추가합니다

```
{
  "lint": "eslint --ext .js,.vue src"
}
```

비주얼 스튜디오 코드의 프리티어 플러그인을 비활성화하고 settings.json 파일에 아래의 내용을 추가합니다

```
{
  ...
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.workingDirectories": [
      {"mode": "auto"}
  ],
  "eslint.validate": [
      "javascript",
      "typescript"
  ],
}
```

프리티어 플러그인을 비활성화하지 않으면 VSCode의 Formatter 기능과 린트 검사 기능이 겹치게 되어 코드가 일관되게 정리되지 않습니다. 꼭 프리티어 플러그인을 사용하지 않음으로 설정하고 VSCode의 오른쪽 아래에 있는 Formatting을 X로 전환해주세요.

## 서버 실행 절차

### Run Project
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
