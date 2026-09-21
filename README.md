# 찾아가는 디지털 과학 연수 — 센서 선택 가이드(재구성)

중학교 과학 교사 연수용 안내 자료입니다. 업체 네 곳(이지메이커·사이언스큐브·파스코·버니어)의
센서 가격과 장단점을 비교하고, 우리 학교 모둠 수 기준 금액과 단원별 필요 센서를 확인할 수 있습니다.

재구성·검증 — 거원중학교 조승호
원자료 — 해누리중학교 조승재, 『중학교 과학 센서 구매 가이드』 (CC BY-NC 4.0)

## GitHub Pages로 올리기

1. GitHub에서 새 저장소를 만듭니다. 이름은 자유롭게 정하시면 됩니다(예: `sensor-guide`).
2. 이 폴더에서 아래를 실행합니다.

```bash
git init && git add . && git commit -m "센서 선택 가이드 첫 배포"
```

3. 원격 저장소를 연결하고 올립니다. `<사용자명>`과 `<저장소>`를 바꿔 주세요.

```bash
git remote add origin https://github.com/<사용자명>/<저장소>.git && git branch -M main && git push -u origin main
```

4. 저장소의 **Settings → Pages**에서 Source를 `Deploy from a branch`,
   Branch를 `main` / `/ (root)`로 두고 저장합니다.
5. 1~2분 뒤 `https://<사용자명>.github.io/<저장소>/` 로 열립니다.

## 파일 구성

| 파일 | 하는 일 |
|---|---|
| `index.html` | 페이지 뼈대와 글 |
| `assets/app.css` | 디자인. 색·서체 값은 맨 위 `:root`에 모여 있습니다 |
| `assets/prices.js` | **센서 가격과 보드 가격.** 값이 바뀌면 여기만 고치세요 |
| `assets/lessons.js` | 수업 26건과 성취기준 본문 |
| `assets/content.js` | 업체별 장단점, 연계 사이트 링크 |
| `assets/app.js` | 계산과 화면 동작 |
| `research/` | 검증 기록 원본. 페이지에는 안 나옵니다 |

## 내용을 고칠 때

가격을 고치셨으면 `index.html` 맨 아래와 위쪽의 `?v=1`을 `?v=2`처럼 올려 주세요.
선생님들 브라우저에 옛 파일이 남아 있지 않게 하는 장치입니다.

```
<link rel="stylesheet" href="assets/app.css?v=2">
<script src="assets/prices.js?v=2"></script>
```

확인일도 `index.html` 꼬리말에서 함께 바꿔 주시면 됩니다.

## 라이선스

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.ko).
원자료 제작자인 조승재 선생님과 이 문서를 함께 표기해 주세요.
