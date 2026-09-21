# 이지메이커·사이언스큐브 사실 검증 결과

- 검증일: 2026-09-21
- 검증 방법: 각 사 공식 쇼핑몰(mall.ezmaker.co.kr, sciencecube.kr) 실시간 페이지, 공식 카탈로그 PDF(2026 SCIENCECUBE CATALOG Ver9.0), 공식 매뉴얼 PDF, Google Play/App Store 공식 페이지를 직접 조회
- 판정 기준: 일치 / 불일치(현재값 + 출처) / 확인 불가(공식 자료에서 확인되지 않음)
- 가격은 모두 KRW(부가세 포함 표시가). 이지메이커 몰은 "할인가 / 정가"를 함께 표시하는 품목이 있어 두 값을 모두 적음.

---

## 1. 이지메이커 (EZMaker / 제조사 ㈜하이씨티)

공식 사이트: https://haict.kr (= ezmaker.co.kr) · 공식 몰: https://mall.ezmaker.co.kr · 플랫폼: https://ezon.ai

### 1-1. 유선 센서 가격 (몰 카테고리 "개별 센서", category_no=1004)

| 항목 | 원본 값 | 확인 값 | 판정 | 출처 URL |
|---|---|---|---|---|
| 온도 | 20,000 | 수중 온도 센서 20,000 · 접촉 온도 센서 20,000 (※ 수중/접촉 겸용형 30,000도 별도 판매) | 일치 | https://mall.ezmaker.co.kr/user/product_list?category_no=1004 |
| 온습도 | 15,000 | 15,000 | 일치 | 상동 (product_no=202509-1129) |
| 전압 | 15,000 | 15,000 | 일치 | 상동 (202509-1124) |
| 전류 | 20,000 | 20,000 | 일치 | 상동 (202509-1144) |
| 밝기 | 15,000 | 15,000 | 일치 | 상동 (202509-1117) |
| 공기압(기체압력) | 80,000 | 80,000 | 일치 | 상동 (202509-1149) |
| **기압** | **30,000** | **80,000** | **불일치** | https://mall.ezmaker.co.kr/user/product_detail?product_no=202509-1145 |
| 무게 | 40,000 | 40,000 | 일치 | 상동 (202509-1146) |
| CO₂ | 99,000 | 99,000 | 일치 | 상동 (202509-1140) |
| pH | 99,000 | 99,000 | 일치 | 상동 (202509-1148) |
| 소리 | 15,000 | 15,000 | 일치 | 상동 (202509-1118) |
| 자기장 | 15,000 | 15,000 | 일치 | 상동 (202509-1120) |
| 초음파 거리 | 30,000 | 30,000 | 일치 | 상동 (202509-1136) |
| 고온(열전쌍) | 90,000 | 90,000 | 일치 | 상동 (202509-1139) |
| DIY-B(전도도 대용) | 15,000 | 15,000 (DIY-A도 15,000) | 일치 | 상동 (202509-1116) |
| 미세먼지 | 80,000 | 80,000 | 일치 | 상동 (202509-1147) |
| **힘 센서 없음** | 없음 | **"이지메이커 힘 센서" 판매 중 — 할인가 88,000 / 정가 99,000 (2026-08 신규, I2C, 힘 0~49 N + 3축 가속도)** | **불일치** | https://mall.ezmaker.co.kr/user/product_detail?product_no=202608-1102 |
| 산소·포토게이트·심박 센서 없음 | 없음 | 몰 전 카테고리에 없음 | 일치 | https://mall.ezmaker.co.kr/user/product_list?category_no=1004 |

### 1-2. 보드·배터리

| 항목 | 원본 값 | 확인 값 | 판정 | 출처 URL |
|---|---|---|---|---|
| 메인보드 가격 | 60,000 | 60,000 ("이지메이커 보드") | 일치 | https://mall.ezmaker.co.kr/user/product_detail?product_no=202509-1112 |
| **메인보드 포트 구성** | D0–D4, **A0·A1**, I2C, UART, SD | **D0~D4(5), A0~A4(5), I2C + I2C LCD(2), UART(1), microSD, USB-C** | **불일치(아날로그 포트가 5개)** | 상동 상세 이미지 (EZMAKER V2.0 사양) |
| 미니보드 가격 | 40,000 | 40,000 | 일치 | https://mall.ezmaker.co.kr/user/product_detail?product_no=202509-1113 |
| **미니보드 포트** | 메인보드보다 3개 적음, SD 없음 | **A0~A1(2), D0~D1(2), I2C 2개, UART 1개 = 7포트 (메인 13포트 대비 6개 적음)**, SD 슬롯 없음(사양표에 microSD 없음) | **불일치(포트 수 차이)** / SD 없음은 일치 | 상동 상세 이미지 (EZMAKER mini V1.3 사양) |
| 나노보드(무선) 가격 | 55,000 | 할인가 55,000 / 정가 66,000 | 일치(할인가 기준) | https://mall.ezmaker.co.kr/user/product_detail?product_no=202602-1190 |
| 나노보드 1대당 센서 1개 | 1개 | "입출력 포트 4-Pin 포트 1개", 제안서 "보드에 센서 하나만 연결·코딩 없이 바로 데이터 수집", 이지온에서 최대 6개 보드 동시 연결 | 일치 | 상동 + https://haict.kr/bbs/board.php?bo_table=notice&wr_id=68 |
| 일체형 배터리 | 11,000 | 할인가 11,000 / 정가 15,000 | 일치(할인가 기준) | https://mall.ezmaker.co.kr/user/product_detail?product_no=202510-1103 |
| 무선 가격 = 센서 + 55,000 | 공식 | 무선MBL 카테고리의 "나노 ○○ 센서" 세트 할인가가 정확히 유선 센서가 + 55,000 (예: 나노 CO₂ 154,000 = 99,000+55,000, 나노 기압 135,000 = 80,000+55,000, 나노 온습도 70,000, 나노 고온 145,000, 나노 무게 95,000, 나노 초음파 85,000). 단, 정가 기준은 +66,000 | 일치(할인가 기준) — 단, 기압은 80,000 기준이므로 무선 기압 135,000 | https://mall.ezmaker.co.kr/user/product_list?category_no=1000 |

### 1-3. 소프트웨어·자료 관련 주장

| 항목 | 원본 값 | 확인 값 | 판정 | 출처 URL |
|---|---|---|---|---|
| EZON은 설치 없는 웹앱, 크롬북에서 동작 | 웹앱, 크롬북 | "EZ·ON 프로그램은 … 별도의 설치 과정 없이 PC뿐만 아니라 크롬북, 웨일북, 맥북 등 다양한 디바이스에서 웹코딩&데이터분석이 가능한 SW" (haict.kr 메인). 2026-08 연결 가이드북: 웹 버전 https://ezon.ai — Windows PC/노트북, macOS, 크롬북, 웨일북; 앱 버전 — Google Play 'EZON' (Android); 무선보드는 iOS에서 'Bluefy' 브라우저 앱으로 접속. 나노보드는 Chrome/Edge(Web Bluetooth) 필요 | 일치 | https://haict.kr/ · https://haict.kr/bbs/board.php?bo_table=notice&wr_id=69 · https://play.google.com/store/apps/details?id=com.onthelive.seunghun.haictwebview |
| 유선 사용 시 블록코딩 필요 | 필요 | 유선보드(이지메이커 보드/미니보드) 교재 제목이 "코딩 + 데이터 수집/분석 과학실험"; 학습가이드 "이지온 코드 컴파일 & 데이터분석"(블록 완성 후 컴파일·업로드). 반면 무선 나노보드는 "코딩 없이 바로 데이터 수집(노코드)" | 일치 | https://haict.kr/bbs/board.php?bo_table=guide&wr_id=159 · https://haict.kr/bbs/board.php?bo_table=guide2&wr_id=24 |
| 클래스보드에서도 사용 가능 | 가능 | 공식 사이트·몰·가이드북 어디에도 '클래스보드' 언급 없음. '클래스보드'(clboard.co.kr)는 천재교육 T셀파의 무료 디지털 게시판이며, T셀파 에듀테크 목록에는 EZ-ON(ezon.ai)이 별도 항목으로 등재되어 있을 뿐 클래스보드 연동 근거 없음 | **확인 불가(공식 근거 없음, 삭제 권고)** | https://www.clboard.co.kr/ · https://mh.tsherpa.co.kr/edutech/index.html?type=mh-edutech-sc |
| 교재 『AI-STEAM교육을 위한 디지털 과학실험 따라하기』(중학교 30실험, 111p, EZON) | 존재 | 해당 제목의 자료는 공식 사이트에서 발견되지 않음. 현재 공식 게시물은 "[중학교 수업사례 30단원] 이지메이커를 활용한 중학교 AI 융합 과학 실험 교재"(2026-01-29, 첨부 이지메이커수업사례_중학_합본_V1 1.pdf 14.3 MB, 표지 제목 "이지메이커 활용 과학실험 사례(중학교 과학실험 중심)", 수업사례개발 영서중 최효석). 다운로드는 회원 로그인 필요라 쪽수 확인 불가 | **확인 불가(제목·쪽수 불일치 가능성 높음 → 공식 게시물 제목으로 교체 권고)** | https://haict.kr/bbs/board.php?bo_table=guide&wr_id=124 |
| 신판 『…따라잡기』(245p, 클래스보드) | 존재 | 공식 사이트·검색에서 확인되지 않음. 유사 신규 자료: "[고등학교 과학실험 25단원] 피지컬 컴퓨팅 활용 AI융합과학교육의 실제"(2026-05-04, 고등합본 PDF 13.4 MB), "[유선MBL] 유선보드와 이지온 사용법"(15.8 MB), "[무선MBL] 무선보드와 이지온 사용법"(14.2 MB), "이지메이커 센서 연결 가이드북"(2026-08-23, 7.2 MB) — 모두 EZON 기준 | **확인 불가** | https://haict.kr/bbs/board.php?bo_table=guide&wr_id=158 · wr_id=159 · wr_id=160 · https://haict.kr/bbs/board.php?bo_table=notice&wr_id=69 |
| EZON URL | (요청) | https://ezon.ai (구 주소 https://haict.onthe.live/ 도 동작, haict.kr 우측 상단 '이지온' 아이콘) | — | https://haict.kr/bbs/board.php?bo_table=guide2&wr_id=7 |
| 클래스보드 URL | (요청) | https://www.clboard.co.kr/ (T셀파 디지털 게시판; 이지메이커와 무관) | — | 상동 |

### 1-4. 가이드가 놓친 이지메이커 신규·변경 사항

- **힘 센서 신규 출시(2026-08)**: 88,000(정가 99,000), I2C, 힘 0~49 N(0~5 kgf)+3축 가속도. "힘 센서 없음" 서술 수정 필요.
- **기압 센서 80,000**(30,000 아님). 무선 나노 기압 135,000.
- 나노보드(무선) 정가 66,000 / 상시 할인가 55,000. 나노 세트 정가는 유선가 + 66,000.
- 온도 센서는 3종: 수중 온도 20,000 · 접촉 온도 20,000 · 수중/접촉 겸용 30,000.
- 자이로(9축) 센서 90,000, 가스 센서 15,000, 인체감지(PIR) 20,000, 스위치/터치 15,000, 마이크로비트 쉴드 15,000(2026-08 신규).
- 패키지: EZDATA Science Basic 220,000 / Basic Plus 330,000 / Pro 440,000 · **듀얼 지능형과학실 실험키트 440,000**(미니보드+나노보드+센서 14종, S2B 등록) · 시그니처 세트1/2/3 800,000 / 450,000 / 350,000(할인가).
- EZON Android 앱(HAICT, 2026-03-21 업데이트) 존재; iOS/iPad는 무선보드만 'Bluefy' 브라우저로 접속.
- 나노보드 호환 센서 39종 목록(무선 상세페이지)에는 힘 센서가 아직 없음(2026-04 기준 이미지).
- 유선보드 미니는 SD 슬롯이 없으므로 오프라인 저장은 메인보드에서만 가능.

---

## 2. 사이언스큐브 (ScienceCube / 코리아디지탈㈜)

공식 몰: https://sciencecube.kr · 회사: https://koreadigital.com · 프로그램: Science#(사이언스샵)

### 2-1. 무선 센서 가격 (몰 "무선센서" 카테고리 3페이지 전수 + 카탈로그 Ver9.0 교차 확인)

| 항목 | 원본 값 | 확인 값 | 판정 | 출처 URL |
|---|---|---|---|---|
| 온도 | 110,000 | 무선 온도센서 WL 100T 110,000 | 일치 | https://sciencecube.kr/product/무선-온도센서/431/ |
| 온습도 | 242,000 | WL 117H 242,000 | 일치 | https://sciencecube.kr/product/무선-온습도센서/450/ |
| 전압 | 187,000 | WL 101V 187,000 | 일치 | https://sciencecube.kr/product/무선-전압센서/433/ |
| 전류 | 187,000 | WL 102C 187,000 | 일치 | https://sciencecube.kr/product/무선-전류센서/434/ |
| 조도 | 220,000 | 무선 조도색도센서 WL 112LC 220,000 | 일치 | https://sciencecube.kr/product/무선-조도색도센서/444/ |
| 기체압력 | 242,000 | 무선 압력센서 A WL 103P 242,000 (압력센서 B WL 116P도 242,000) | 일치 | https://sciencecube.kr/product/무선-압력센서a/435/ |
| 대기압 | 286,000 | 무선 대기압/온도센서 WL 134APT 286,000 | 일치 | https://sciencecube.kr/product/무선-대기압온도센서/600/ |
| 힘·가속도 | 297,000 | WL 105F 297,000 | 일치 | https://sciencecube.kr/product/무선-힘가속도센서/437/ |
| CO₂ | 495,000 | WL 111CO2 495,000 | 일치 | https://sciencecube.kr/product/무선-co2센서/443/ |
| 산소 | 594,000 | WL 113O2 594,000 | 일치 | https://sciencecube.kr/product/무선-산소센서/445/ |
| pH | 242,000 | WL 104PH 242,000 | 일치 | https://sciencecube.kr/product/무선-ph센서/436/ |
| 소리 | 264,000 | 무선 사운드센서 WL 124S 264,000 | 일치 | https://sciencecube.kr/product/무선-사운드센서/531/ |
| 자기장 | 220,000 | WL 108MG 220,000 | 일치 | https://sciencecube.kr/product/무선-자기센서/440/ |
| 거리·운동 | 297,000 | 무선 운동센서 WL 106M 297,000 | 일치 | https://sciencecube.kr/product/무선-운동센서/438/ |
| 포토게이트 | 264,000 | WL 120PG 264,000 | 일치 | https://sciencecube.kr/product/무선-포토게이트/527/ |
| 심박 | 330,000 | 무선 심박계센서 WL 129HR 330,000 | 일치 | https://sciencecube.kr/product/무선-심박계센서/562/ |
| 고온 | 330,000 | 무선 열전쌍온도센서 WL 123TC 330,000 | 일치 | https://sciencecube.kr/product/무선-열전쌍온도센서/530/ |
| 전도도 | 297,000 | WL 107EC 297,000 | 일치 | https://sciencecube.kr/product/무선-전도도센서/439/ |
| 미세먼지 | 495,000 | WL 115PM 495,000 | 일치 | https://sciencecube.kr/product/무선-미세먼지센서/448/ |
| 염도 | 330,000 | WL 119S 330,000 | 일치 | https://sciencecube.kr/product/무선-염도센서/526/ |
| 용존산소 | 990,000 | 무선 광학식 DO센서 WL 118DO 990,000 | 일치 | https://sciencecube.kr/product/무선-광학식do센서/451/ |
| 방사선 | 550,000 | WL 126R 550,000 | 일치 | https://sciencecube.kr/product/무선-방사선센서/532/ |
| Free Linker2 인터페이스(유선) | 495,000 | Free Linker2 KDM-BLU02 495,000 (카탈로그 p.31 동일) | 일치 | https://sciencecube.kr/product/free-linker2/334/ |

### 2-2. 소프트웨어·기타 주장

| 항목 | 원본 값 | 확인 값 | 판정 | 출처 URL |
|---|---|---|---|---|
| 무선 센서는 인터페이스 불필요(Bluetooth) | 불필요 | 카탈로그 p.8 "인터페이스 없이 바로 스마트 기기에 연결", Bluetooth 5.0 및 2.1+EDR 듀얼모드, USB-C 유선 연결도 가능, 한 기기에 동시 4개 센서 | 일치 | 카탈로그 PDF p.8 |
| Science# 설치 필요 | 설치 필요 | Windows·Android·iOS·macOS는 설치형. 단, **웹 버전(PWA) https://on.sciencecube.com 은 설치 없이 사용 가능**(무선 센서 전용) | 부분 일치(웹 버전 있음을 병기 권고) | http://file.koreadigital.com/download.html · 카탈로그 p.6 |
| Science# 지원 OS/기기 | (확인 요청) | **Windows 7/8/10/11**(온라인 설치 15 MB, 전체 설치 250 MB, ZIP) · **Android**(Google Play "Science #", 2026-09-01 업데이트) · **Chromebook**(Android 앱 또는 PWA 사용; 기존 Chrome 앱은 2025년 구글 정책으로 단계적 종료) · **iPhone/iPad**(App Store, iOS/iPadOS 17 이상, v3.7.1; 무선 센서만 지원, 구형 MBL/SMBL 유선 센서 불가) · **macOS**(App Store, macOS 14 이상 + Apple Silicon M1 이상만; Intel Mac 불가) · **Web(PWA) on.sciencecube.com**(무선 센서 전용, Safari는 센서 연결 불가 → iOS는 Bluefy 브라우저 사용) · Excel 애드인(3.1/2.6B) | — (가이드에 위 세부 반영 권고) | http://file.koreadigital.com/download.html · https://play.google.com/store/apps/details?id=com.main.kdtesla · https://apps.apple.com/kr/app/science/id1472510070 |
| 수동 수집 모드 | 있음 | Science# Android 사용설명서: "실험방식 선택 — 자동수집(X축 시간) / 수동수집(수집 버튼을 눌러 데이터 획득)" | 일치 | https://sciencecube.kr/article/자료실/1/296/ (첨부 2025사이언스샵_안드로이드.pdf) |
| 회귀(regression) 분석 | 있음 | Android 매뉴얼 분석 항목은 "분석할 데이터 선택 → 분석할 수식 선택 → 구간 드래그"로만 기술, 회귀/곡선맞춤 용어 없음. Windows 매뉴얼은 공개 PDF 미발견 | 확인 불가 | 상동 |
| 카탈로그 "2026 SCIENCECUBE CATALOG Ver9.0 (2026.03)" | 존재 | PDF 표지 "2026 SCIENCE CUBE CATALOG Ver9.0(2026.03)", 36쪽, 자료실 게시 2026-03-26 | 일치 | https://file.koreadigital.com/url/updates/sciencesharppc/Wireless%20Sensor%20Catalog(Ver9.0).pdf · 게시글 https://sciencecube.kr/article/자료실/1/26290/ |
| 지능형 과학실 ON 연동 | 연동 | 카탈로그 표지 "지능형 과학실 ON의 오픈 API를 준수", p.7 Windows/Android Science#에서 모둠 아이디 입력으로 연동. 자료실에 "지능형과학실ON 매뉴얼(ver 231127).pdf" | 일치 | 카탈로그 p.1, p.7 · https://sciencecube.kr/article/자료실/1/315/ |

### 2-3. 가이드가 놓친 사이언스큐브 신규·변경 사항

- **Science# with AI**: 카탈로그 p.3 "2026년 7월 최초 출시", 자료실 게시(2026-04-09)는 "2026년 8월 출시 예정" — AI 오차 분석·LLM 실험 조교·소크라테스식 발문·개별 피드백. 실제 배포 여부는 공식 페이지에서 미확인.
- 신규 무선 센서: **CO₂/온습도센서 WL 133M 594,000**, **대기압/온도센서 WL 134APT 286,000**(가이드의 '대기압'은 이 제품), 연직수온센서 WL 132T 198,000, 에너지센서 WL 131J 275,000, 무선 pH 전극증폭기 165,000, 검전센서 WL 127Q 297,000, 색도탁도센서 WL 128CT 396,000, 방울계수기 WL 130DC 297,000, 기상센서 WL 125W 550,000, 심전도 WL 121E 484,000, 폐활량 550,000, 무선 카트 WL 110C 495,000.
- 신규 키트: 구름발생키트 330,000, 열평형키트 264,000, 광합성 실험장치(카탈로그) 등. 초·중등/고등/종합 무선 개정교육과정 패키지 각 4,000,000.
- 유선 인터페이스는 Free Linker2 495,000 외에 인터페이스 Pro 621,500, Smart Sensor Box 594,000(카탈로그).
- 무선센서 개별 사용설명서 PDF(2025.10 갱신) 34종이 자료실에 공개됨.
- App Store 리뷰 평점 2.7(24개), Google Play 3.7(98개) — 연결 안정성 불만 리뷰 다수(참고).

---

## 3. 유용한 공식 링크

### 이지메이커
- 공식 홈: https://haict.kr (https://ezmaker.co.kr)
- 공식 몰: https://mall.ezmaker.co.kr
  - 개별 센서(유선): https://mall.ezmaker.co.kr/user/product_list?category_no=1004
  - 무선 MBL(나노): https://mall.ezmaker.co.kr/user/product_list?category_no=1000
  - 패키지: https://mall.ezmaker.co.kr/user/product_list?category_no=1001
- EZ·ON 웹앱: https://ezon.ai (구 https://haict.onthe.live/)
- EZON Android 앱: https://play.google.com/store/apps/details?id=com.onthelive.seunghun.haictwebview
- 학습가이드(이지온 코딩/컴파일): https://haict.kr/bbs/board.php?bo_table=guide2
- 활용콘텐츠(교재 PDF, 로그인 필요): https://haict.kr/bbs/board.php?bo_table=guide
  - 중학교 30단원 교재: https://haict.kr/bbs/board.php?bo_table=guide&wr_id=124
  - 고등 25단원: https://haict.kr/bbs/board.php?bo_table=guide&wr_id=158
  - 유선MBL 기초활용법: https://haict.kr/bbs/board.php?bo_table=guide&wr_id=159
  - 무선MBL 기초활용법: https://haict.kr/bbs/board.php?bo_table=guide&wr_id=160
- 센서 연결 가이드북(2026-08): https://haict.kr/bbs/board.php?bo_table=notice&wr_id=69
- 지능형과학실 제안서(추천 제품·학년별 콘텐츠): https://haict.kr/bbs/board.php?bo_table=notice&wr_id=68
- 다운로드(드라이버 등): https://haict.kr/bbs/board.php?bo_table=down
- YouTube: https://youtube.com/@ezmaker_haict · 블로그: https://blog.naver.com/ezmaker_ · 카카오채널: https://pf.kakao.com/_xgCZxoK
- T셀파 에듀테크(EZ-ON 등재): https://mh.tsherpa.co.kr/edutech/index.html?type=mh-edutech-sc

### 사이언스큐브
- 공식 몰: https://sciencecube.kr
  - 무선센서: https://sciencecube.kr/category/무선센서/27/
  - 인터페이스: https://sciencecube.kr/category/인터페이스/29/
- Science# 다운로드(전 플랫폼 안내): http://file.koreadigital.com/download.html
  - Windows 온라인 설치: https://file.koreadigital.com/url/updates/sciencesharppc/setup.exe
  - Windows 전체 설치: https://file.koreadigital.com/url/updates/sciencesharppc/setup_full.exe
  - 웹(PWA): https://on.sciencecube.com/
  - Google Play: https://play.google.com/store/apps/details?id=com.main.kdtesla
  - App Store: https://apps.apple.com/kr/app/science/id1472510070
- 카탈로그 Ver9.0 PDF: https://file.koreadigital.com/url/updates/sciencesharppc/Wireless%20Sensor%20Catalog(Ver9.0).pdf (e-book: https://ebook36524.com/e/14.13278.33.42/)
- 자료실(매뉴얼·콘텐츠·프로그램): https://sciencecube.kr/board/자료실/1/
  - Science# 매뉴얼(Android/iOS/보고서 공유/BT 연결): https://sciencecube.kr/article/자료실/1/296/
  - 무선센서 사용설명서 34종(2025.10): https://sciencecube.kr/article/자료실/1/99/
  - 지능형과학실ON 매뉴얼·동영상: https://sciencecube.kr/article/자료실/1/315/
  - Science# with AI 안내: https://sciencecube.kr/article/자료실/1/26314/
  - 안드로이드 센서 연결 방법: https://sciencecube.kr/article/자료실/1/26312/
- YouTube: https://www.youtube.com/user/playsciencecube/videos · 네이버TV: https://tv.naver.com/sciencecube · 인스타: https://www.instagram.com/sciencecube_mbl/ · 네이버 카페: https://cafe.naver.com/sciencelover1004
- 지능형 과학실 ON: https://science-on.kofac.re.kr
- 고객센터: 02-2109-8880 / mbl@koreadigital.com

---

## 4. 요약: 수정이 필요한 항목

1. 이지메이커 **기압 센서 30,000 → 80,000** (무선 나노 기압 135,000).
2. 이지메이커 **힘 센서 있음** (88,000 / 정가 99,000, 2026-08 신규) — "힘 센서 없음" 삭제.
3. 메인보드 아날로그 포트 **A0~A4(5개)**, 미니보드는 A0~A1·D0~D1·I2C×2·UART로 **메인 대비 6포트 적음**("3개 적음" 아님).
4. 나노보드·일체형 배터리·나노 세트 가격은 **할인가 기준**(정가 66,000 / 15,000 / 유선가+66,000)임을 명시 권고.
5. **클래스보드 연동** 및 교재 『…따라하기』(111p)·『…따라잡기』(245p) 제목/쪽수는 공식 근거가 없음 — 공식 게시물 제목("[중학교 수업사례 30단원] 이지메이커를 활용한 중학교 AI 융합 과학 실험 교재", 2026-01) 등으로 교체 권고.
6. 사이언스큐브 가격 22종 + Linker2는 전부 일치. Science#는 **웹 버전(on.sciencecube.com, 무선 전용)** 이 있어 "설치 필요"를 "설치형 + 웹(PWA) 병행"으로, 지원 OS는 Windows 7~11 / Android / Chromebook(Android 앱·PWA) / iOS·iPadOS 17+ / macOS 14+(Apple Silicon만) / Web으로 구체화 권고. 회귀분석 기능은 공개 매뉴얼에서 미확인.
7. 사이언스큐브 신규: Science# with AI(2026-07/08 출시 예고), CO₂/온습도 WL 133M 594,000, 대기압/온도 WL 134APT 286,000 등.
