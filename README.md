# 찾아가는 디지털 과학 연수 — 센서 선택 가이드(재구성)

중학교 과학 교사 연수용 안내 자료입니다. 업체 네 곳(이지메이커·사이언스큐브·파스코·버니어)의
센서 가격과 장단점을 비교하고, 우리 학교 모둠 수 기준 금액과 단원별 필요 센서를 확인할 수 있습니다.

**공개 주소 — https://raph-alpaca.github.io/sensor-guide/**

재구성·검증 — 거원중학교 조승호
원자료 — 해누리중학교 조승재, 『중학교 과학 센서 구매 가이드』 (CC BY-NC 4.0)

## 고친 내용을 반영하려면

이미 GitHub Pages로 배포되어 있습니다. 내용을 고치신 뒤 아래를 실행하면 1~2분 안에 반영됩니다.

```bash
git add -A && git commit -m "가격 갱신" && git push
```

## 파일 구성

| 파일 | 하는 일 |
|---|---|
| `index.html` | 페이지 뼈대와 글 |
| `assets/app.css` | 디자인. 색·서체 값은 맨 위 `:root`에 모여 있습니다 |
| `assets/prices.js` | **센서 가격과 보드 가격.** 값이 바뀌면 여기만 고치세요 |
| `assets/lessons.js` | 수업 26건과 성취기준 본문 |
| `assets/content.js` | 업체별 장단점, 연계 사이트 링크 |
| `assets/app.js` | 탭 전환, 계산, 화면 동작 |
| `research/` | 검증 기록 원본. 페이지에는 안 나옵니다 |

## 내용을 고칠 때

가격을 고치셨으면 `index.html` 맨 아래와 위쪽의 `?v=1`을 `?v=2`처럼 올려 주세요.
선생님들 브라우저에 옛 파일이 남아 있지 않게 하는 장치입니다.

```
<link rel="stylesheet" href="assets/app.css?v=2">
<script src="assets/prices.js?v=2"></script>
```

확인일도 `index.html` 꼬리말에서 함께 바꿔 주시면 됩니다.

## 탭으로 바로 여는 주소

주소 끝에 조각을 붙이면 그 탭이 바로 열립니다. 연수 자료에 링크를 걸 때 쓰세요.

| 탭 | 주소 |
|---|---|
| 고르기 | `…/sensor-guide/#pick` |
| 업체 | `…/sensor-guide/#vendors` |
| 가격 | `…/sensor-guide/#prices` |
| 수업 | `…/sensor-guide/#lessons` |
| 사이트 | `…/sensor-guide/#links` |

## 센서 차례를 바꾸려면

`assets/prices.js` 의 `PRICES` 배열 순서가 곧 표의 차례입니다.
지금은 수업에 많이 나오는 순(온도 → 기체압력 → 힘 → 이산화탄소 …)이고,
수업 건수가 비슷하면 「센서가 없으면 아예 못 하는 실험」을 앞에 두었습니다.

## 라이선스

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.ko).
원자료 제작자인 조승재 선생님과 이 문서를 함께 표기해 주세요.
