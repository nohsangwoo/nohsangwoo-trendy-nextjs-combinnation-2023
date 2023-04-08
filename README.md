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

# redux RTK(w진행 완료)

# react query setting(진행 중)

# react query 와 redux 사용시 주의사항

- 상단에 'use client'를 사용해야한다.(당연히 클라이언트 사이드에서 렌더링 되니깐.)
  app directory는 기본적으로 서버에서 렌더링 된다.
