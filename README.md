# yarn berry "cannot find module issue ifx"

1. yarn dlx @yarnpkg/sdks vscode

2. Ctrl + Shift + P

3. Select Typescript Version

4. Use Workspace Version 클릭

# yarn berry setting

# git LFS 설치 및 사용법

Git LFS 적용하기

1. Git LFS 사용 선언

Git Lfs를 이 Repo에서 사용하겠다고 선언해줘야합니다. 아래 명령어로 선언할 수 있습니다.

```
$ git lfs install
```

2. Git Track 해제
   LFS에 올릴 파일은 Git의 Tracking에서 제외해야합니다. 아래 명령어로 Unstaging을 수행할 수 있습니다. --cached 옵션을 쓰는 이유는 LFS에 올려야하기 때문에 로컬에서는 존재해야하기 때문입니다. (매우 중요)

```
git rm --cached (file path)
ex) git rm --cached ./sound/sound.wav
```

git lfs track (file path)

```
<!-- 모든 wav파일 -->
ex) git lfs track "*.wav"
```

# redux RTK(진행 완료)

# react query setting(진행 완료)

# react query 와 redux 사용시 주의사항

- 상단에 'use client'를 사용해야한다.(당연히 클라이언트 사이드에서 렌더링 되니깐.)
  app directory는 기본적으로 서버에서 렌더링 된다.

- fetching 영역과 hook 영역은 따로 관리 한다.
  (서버 컴포넌트냐(default) or 클라이언트 컴포넌트냐(use сlient)

# npm install 후 yarn install (always)

# apply Tailwind CSS

npm install -D tailwindcss postcss autoprefixer

# tailwind/form 적용

클래스명 정렬

- Ref: https://github.com/tailwindlabs/tailwindcss-forms

  `// 요거 두개 설치해야 프리티어랑 연동됨

```
 $ yarn add -D prettier prettier-plugin-tailwindcss`
 $ npm i -D @tailwindcss/forms

```

- tailwind.config.js에 추가
  require('@tailwindcss/forms'

# google zx project

- node단에서 쉘스크립트를 구동할 수 있게 해주는 라이브러리
- ref: https://github.com/google/zx
- ref: https://www.npmjs.com/package/zx

# prisma 적용완료(db연동)

- ref: https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

# todo

- redux rtk 적용
- react query 적용
- tailwind css 적용
- prisma 적용(db 연동)
- graphql 적용

# graphql 적용

1. ref: https://www.apollographql.com/docs/apollo-server/getting-started/
2. ref: https://github.com/apollo-server-integrations/apollo-server-integration-next

3. tosos

- 스키마랑 리졸버를 도메인 관리하자.(with @graphql-tools/merge)
- client에서 graphql 페칭 방법(with react-query or apollo client)
- graphql-codegen 적용

# graphql-codegen 적용

- (graphql api type을 자동으로 생성해줌)
- ref: https://www.graphql-code-generator.com/docs/getting-started/installation

npm i -E @graphql-tools/load-files @graphql-tools/schema @graphql-tools/merge @graphql-codegen/typescript-react-apollo graphql-let --legacy-peer-deps

# Cannot use import statement outside a module with(@graphql-tools/load-files)

- next.config.js에 아래 코드 추가

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    ROOT: __dirname,
  },
  <!-- 이거 추가 -->
  transpilePackages: ['@graphql-tools/load-files'],
}

module.exports = nextConfig

```

# operation not permitted, scandir 'C:/Users/Default User'

# graplql

- --legacy-peer-deps

# yaml-loader 설치해야 함.

npm i -D yaml-loader --legacy-peer-deps
