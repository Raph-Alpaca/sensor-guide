'use strict';
/* 센서 선택 가이드 — 동작부
   데이터는 lessons.js · prices.js 에 있습니다. 가격이 바뀌면 그 파일만 고치면 됩니다. */

const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const won = n => n.toLocaleString('ko-KR');

/* ══ 1. 보일의 법칙 계측기 ═══════════════════════════════ */
(() => {
  const svg = $('.rig__plot'); if (!svg) return;
  const K = 101.3 * 30;                       // P·V = 일정 (V=30 mL 에서 대기압)
  const L = 46, R = 424, T = 14, B = 206;     // 그래프 영역
  const PMAX = 320;
  const range = $('#vol'), trace = $('#trace'), dot = $('#dot'),
        ticks = $('#ticks'), xlab = $('#xlab'), btn = $('#axisBtn');
  let byInvV = false;

  const P  = v => K / v;
  const xOf = v => { const t = byInvV ? (1/v - 1/50) / (1/10 - 1/50) : (v - 10) / 40;
                     return L + t * (R - L); };
  const yOf = p => B - Math.min(p, PMAX) / PMAX * (B - T);

  function axes() {
    ticks.textContent = '';
    const add = (x, y, s, anchor) => {
      const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      t.setAttribute('x', x); t.setAttribute('y', y);
      t.setAttribute('text-anchor', anchor || 'middle');
      t.textContent = s; ticks.appendChild(t);
    };
    [0, 80, 160, 240, 320].forEach(p => add(L - 7, yOf(p) + 3.5, p, 'end'));
    (byInvV ? [50, 25, 16.7, 12.5, 10] : [10, 20, 30, 40, 50])
      .forEach(v => add(xOf(v), B + 15, byInvV ? (1/v).toFixed(2) : v));
    xlab.textContent = byInvV ? '1/V  (1/mL)' : '부피 V (mL)';
  }

  function draw(v) {
    let d = '';
    for (let i = 0; i <= 80; i++) {
      const vv = 10 + 40 * i / 80;
      d += `${xOf(vv).toFixed(1)},${yOf(P(vv)).toFixed(1)} `;
    }
    trace.setAttribute('points', d.trim());
    trace.setAttribute('stroke', 'var(--pen-pasco)');
    dot.setAttribute('cx', xOf(v)); dot.setAttribute('cy', yOf(P(v)));
    dot.setAttribute('fill', 'var(--signal)');
    $('#vOut').textContent = v.toFixed(1);
    $('#pOut').textContent = Math.round(P(v));
    $('#kOut').textContent = Math.round(P(v) * v);
  }

  axes(); draw(30);
  range.addEventListener('input', () => draw(+range.value));

  btn.addEventListener('click', () => {
    byInvV = !byInvV;
    btn.setAttribute('aria-pressed', String(byInvV));
    btn.textContent = byInvV ? 'V로 보기' : '1/V로 보기';
    axes(); draw(+range.value);
  });
  btn.textContent = '1/V로 보기';
})();

/* ══ 2. 30초 선택 ════════════════════════════════════════ */
(() => {
  const pick = { budget: 'low', device: 'win', goal: 'all' };
  const box = $('#result'); if (!box) return;

  function decide() {
    const { budget, device, goal } = pick;
    const chromebook = device === 'book';

    // 센서가 전무한 학교 — 예산 규모와 무관하게 "쓰게 되는가"가 먼저입니다.
    if (budget === 'none') {
      return {
        name: '이지메이커 + 압력·힘 센서부터',
        tag: '첫 도입',
        why: '첫 도입에서 가장 흔한 실패는 사놓고 안 쓰는 것입니다. 센서가 없으면 아예 못 하는 실험(보일의 법칙·마찰력)부터 갖추고, 한글 수업자료가 있는 업체를 고르시는 편이 활용률이 높습니다.',
        alt: '예산이 1천만원 이상이면 사이언스큐브·파스코·버니어를 함께 검토하세요. 그래도 첫해에는 종류를 늘리기보다 한 실험을 전 모둠이 돌려 보는 쪽이 낫습니다.'
      };
    }

    if (goal === 'all') {
      if (budget === 'high') {
        return {
          name: chromebook ? '사이언스큐브 또는 파스코' : '사이언스큐브',
          tag: '무선 · 전 모둠',
          why: '전 모둠에 무선을 돌리려면 1천만원대 예산이 필요합니다. 보드와 배선이 없어 수업 준비가 가장 단순하고, 국내 A/S가 안정적입니다.',
          alt: chromebook
            ? 'Science#는 크롬북에서 웹 버전(on.sciencecube.com)이나 안드로이드 앱으로 씁니다. 학교 관리자 정책으로 Play 스토어가 막혀 있으면 웹 버전을 먼저 확인하세요.'
            : '분석 기능을 더 쓰고 싶으시면 핵심 센서만 파스코로 섞는 구성도 좋습니다. 단, 같은 종류는 한 업체로 통일하세요.'
        };
      }
      return {
        name: '이지메이커',
        tag: '유선 · 모둠 수만큼',
        why: '400만원 안팎에서 전 모둠 보급이 가능한 유일한 가격대입니다. 보드 1개에 센서를 여러 개 꽂을 수 있어 모둠당 장비 수도 적습니다.',
        alt: chromebook
          ? 'EZON이 설치가 필요 없는 웹앱이라 크롬북에 특히 잘 맞습니다. 다만 유선은 블록 코딩 과정이 있어 첫 차시에 시간이 걸립니다.'
          : '분석 기능이 꼭 필요한 한두 종목만 사이언스큐브 무선으로 확보하는 혼합 구성이 현실적입니다. 센서 종류 단위로 업체를 배정하세요.'
      };
    }

    if (goal === 'demo') {
      return {
        name: budget === 'high' ? '파스코' : '사이언스큐브',
        tag: '정밀 측정 · 시연',
        why: budget === 'high'
          ? '센서 라인업이 가장 넓고 SPARKvue의 분석 기능이 강합니다. 스마트카트처럼 기존 도구로는 얻기 어려운 데이터를 바로 뽑을 수 있어 시연용으로 강합니다.'
          : '전원만 켜면 연결되어 시연 준비가 빠르고, 같은 값이면 국내 단가가 낮아 종목을 더 넣을 수 있습니다.',
        alt: '시연용은 수량이 적으니 정밀도와 실험 종목을 우선하세요. 대신 학생이 직접 만지는 시간이 줄어든다는 점은 감안하셔야 합니다.'
      };
    }

    // 영재 · 자율 탐구
    return {
      name: budget === 'high' ? '버니어 또는 파스코' : '이지메이커',
      tag: '탐구 설계',
      why: budget === 'high'
        ? '정밀도와 특수 센서가 필요한 연구·대회 활동에 유리합니다. 국제 표준이라 참고할 실험 프로토콜도 많습니다.'
        : '블록 코딩으로 수집 주기·조건·데이터 형식을 학생이 직접 정하고, 센서를 조합해 자기만의 측정 장치를 만드는 과정 자체가 탐구가 됩니다.',
      alt: '정해진 실험을 정밀하게 재현할지, 실험 자체를 설계하게 할지에 따라 갈립니다. 앞쪽이면 버니어·파스코, 뒤쪽이면 이지메이커입니다.'
    };
  }

  function render() {
    const r = decide();
    $('#rName').textContent = r.name;
    $('#rTag').textContent  = r.tag;
    $('#rWhy').textContent  = r.why;
    $('#rAlt').textContent  = r.alt;
  }

  $$('.seg').forEach(seg => seg.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('button', seg).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    pick[seg.dataset.q] = b.dataset.v;
    render();
  }));
  render();
})();

/* ══ 3. 업체 비교표 · 상세 ═══════════════════════════════ */
(() => {
  const tb = $('#vendorTable'); if (!tb) return;

  const head = $('thead tr', tb);
  VENDORS.forEach(v => {
    const th = document.createElement('th');
    th.scope = 'col';
    th.innerHTML = `<span class="vend vend--${v.key}">${v.name}</span>` +
      (v.key === 'pasco' ? ' <span class="mine">강사 사용</span>' : '');
    th.style.borderTop = `3px solid ${v.pen}`;
    head.appendChild(th);
  });

  const rows = [
    ['무선 센서 가격대', {
      ez:'유선 1.5만~9.9만 (보드 별도)', cube:'11만~99만',
      pasco:'20.7만~87.5만', vern:'20.7만~67.8만' }],
    ['보드·인터페이스', {
      ez:'필요 — 모둠당 메인보드 6만원', cube:'불필요',
      pasco:'불필요', vern:'불필요' }],
    ['전용 프로그램', {
      ez:'EZON — 설치 없는 웹앱', cube:'Science# — 설치형 + 웹',
      pasco:'SPARKvue(무료) · Capstone', vern:'Graphical Analysis(무료)' }],
    ['크롬북에서', {
      ez:'그대로 동작', cube:'웹 버전 또는 안드로이드 앱',
      pasco:'앱 또는 웹 버전', vern:'앱으로 지원' }],
    ['한글 수업자료', {
      ez:'중학교 실험 30단원 교재', cube:'서울시교육청 자료집 수록',
      pasco:'중학 실험 29종 E-BOOK', vern:'한국어 영상 90여 편' }],
    ['학교장터(S2B)', {
      ez:'품목 확인 필요', cube:'무선 22종 물품번호 있음',
      pasco:'카탈로그에 번호 수록', vern:'유통사 문의' }]
  ];

  const body = $('tbody', tb);
  rows.forEach(([label, vals]) => {
    const tr = document.createElement('tr');
    const th = document.createElement('th'); th.scope = 'row'; th.textContent = label;
    tr.appendChild(th);
    VENDORS.forEach(v => {
      const td = document.createElement('td');
      td.textContent = vals[v.key] || '—';
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });

  const host = $('#vendorDetails');
  VENDORS.forEach(v => {
    const info = VENDOR_INFO[v.key];
    const d = document.createElement('details');
    d.className = 'vdetail';
    d.style.setProperty('--pen', v.pen);
    d.innerHTML = `
      <summary>
        <span class="vend vend--${v.key} vdetail__name">${v.name}</span>
        <span class="vdetail__tag">${v.tag}</span>
      </summary>
      <div class="vdetail__body">
        <div class="pros">
          <div><h4>좋은 점</h4><ul>${info.pro.map(t => `<li>${t}</li>`).join('')}</ul></div>
          <div><h4>감안할 점</h4><ul class="pros--con">${info.con.map(t => `<li>${t}</li>`).join('')}</ul></div>
        </div>
      </div>`;
    host.appendChild(d);
  });
})();

/* ══ 4. 가격표 ═══════════════════════════════════════════ */
(() => {
  const body = $('#priceBody'); if (!body) return;
  const foot = $('#priceFoot');
  const picked = new Set();

  // 모둠당 필요 개수 = 수업 26건에서 "동시에 쓰는 개수"의 최댓값
  const qty = {};
  LESSONS.forEach(l => Object.entries(l.sensors).forEach(([k, n]) => {
    qty[k] = Math.max(qty[k] || 1, n);
  }));

  function rows() {
    const q = $('#q').value.trim();
    const coreOnly = $('#coreOnly').checked;
    return PRICES.filter(r =>
      (!coreOnly || CORE_KEYS.includes(r[0])) &&
      (!q || r[1].includes(q))
    );
  }

  function render() {
    const N = +$('#groups').value;
    body.textContent = '';

    rows().forEach(([key, name, ...p]) => {
      const min = Math.min(...p.filter(x => x != null));
      const per = qty[key] || 1;
      const tr = document.createElement('tr');

      const tdPick = document.createElement('td');
      tdPick.className = 'pick';
      const cb = document.createElement('input');
      cb.type = 'checkbox'; cb.checked = picked.has(key);
      cb.setAttribute('aria-label', `${name} 담기`);
      cb.addEventListener('change', () => {
        cb.checked ? picked.add(key) : picked.delete(key);
        total();
      });
      tdPick.appendChild(cb); tr.appendChild(tdPick);

      const th = document.createElement('th');
      th.scope = 'row';
      th.innerHTML = name + (per > 1
        ? ` <span class="tag" title="한 모둠이 동시에 쓰는 개수">모둠당 ${per}개</span>` : '');
      tr.appendChild(th);

      p.forEach(v => {
        const td = document.createElement('td');
        td.className = 'p' + (v == null ? ' na' : v === min ? ' low' : '');
        td.textContent = v == null ? '—' : won(v);
        if (v != null) td.title = `${N}모둠이면 ${won(v * per * N)}원 (${per * N}개)`;
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
    total();
  }

  function total() {
    const N = +$('#groups').value;
    const sums = [0, 0, 0, 0];
    let any = false;
    PRICES.forEach(([key, , ...p]) => {
      if (!picked.has(key)) return;
      any = true;
      const per = qty[key] || 1;
      p.forEach((v, i) => { if (v != null) sums[i] += v * per * N; });
    });

    const boards = BOARD.main.price * N;
    foot.textContent = '';
    if (!any) {
      foot.innerHTML = `<tr><td colspan="6" style="color:var(--ink-soft);font-weight:400">
        왼쪽 칸을 체크하면 ${N}모둠 기준 업체별 합계가 여기에 나옵니다.</td></tr>`;
      $('#boardNote').innerHTML = `이지메이커로 가실 때는 모둠마다 메인보드
        <span class="num">${won(BOARD.main.price)}</span>원이 따로 필요합니다
        (${N}모둠 <span class="num">${won(boards)}</span>원). ${BOARD.main.desc}`;
      return;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `<td></td><th scope="row">선택한 센서 합계 · ${N}모둠</th>` +
      sums.map((s, i) => `<td class="p">${won(i === 0 ? s + boards : s)}</td>`).join('');
    foot.appendChild(tr);

    $('#boardNote').innerHTML = `합계는 <strong>모둠당 동시 사용 개수 × ${N}모둠</strong>으로 계산했습니다.
      이지메이커 합계에는 모둠당 메인보드
      <span class="num">${won(BOARD.main.price)}</span>원
      (${N}모둠 <span class="num">${won(boards)}</span>원)을 포함했습니다.
      무선(나노)으로 쓰시려면 센서 1개마다 나노보드 <span class="num">${won(BOARD.nano.price)}</span>원과
      배터리 <span class="num">${won(BOARD.battery.price)}</span>원이 추가로 필요합니다.`;
  }

  $('#groups').addEventListener('input', () => {
    $('#groupsOut').textContent = $('#groups').value + '모둠';
    render();
  });
  $('#q').addEventListener('input', render);
  $('#coreOnly').addEventListener('change', render);
  $('#clearPick').addEventListener('click', () => { picked.clear(); render(); });

  $('#groupsOut').textContent = $('#groups').value + '모둠';
  render();
})();

/* ══ 5. 단원별 수업 ══════════════════════════════════════ */
(() => {
  const host = $('#lessonList'); if (!host) return;
  let filter = 'all', showStd = false;

  function render() {
    host.textContent = '';
    LESSONS.filter(l => filter === 'all' ? true : filter === 'core' ? l.core : l.grade === filter)
      .forEach(l => {
        const el = document.createElement('article');
        el.className = 'lesson';

        const sensors = Object.entries(l.sensors)
          .map(([k, n]) => `<span class="tag">${SENSOR_LABEL[k]}${n > 1 ? ' ×' + n : ''}</span>`).join('');

        const links = [];
        if (l.seoul) links.push(`<span>서울시교육청 자료집 ${l.seoul}쪽</span>`);
        if (l.ez)    links.push(`<span>이지메이커 교재 ${l.ez}쪽</span>`);
        l.pasco.forEach(([t, id]) =>
          links.push(`<a href="${PASCO_BASE}${id}" target="_blank" rel="noopener">${t} ↗</a>`));

        el.innerHTML = `
          <div class="lesson__g">${l.grade}</div>
          <div>
            <h3 class="lesson__t">${l.title}</h3>
            <p class="lesson__m">${l.unit} · <span class="std">[${l.std}]</span>${
              l.core ? ' <span class="tag tag--core">먼저 할 것</span>' : ''}</p>
            ${showStd && STD_TEXT[l.std]
              ? `<p class="lesson__note">${STD_TEXT[l.std]}</p>` : ''}
            <div class="lesson__s">${sensors}</div>
            ${l.note ? `<p class="lesson__note">${l.note}</p>` : ''}
          </div>
          <div class="lesson__links">${links.join('')}</div>`;
        host.appendChild(el);
      });
  }

  $('#gradeChips').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.id === 'stdToggle') {
      showStd = !showStd;
      b.setAttribute('aria-pressed', String(showStd));
      b.textContent = showStd ? '성취기준 본문 접기' : '성취기준 본문 보기';
      return render();
    }
    $$('button[data-g]', $('#gradeChips')).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    filter = b.dataset.g;
    render();
  });
  render();
})();

/* ══ 6. 연계 사이트 ══════════════════════════════════════ */
(() => {
  const host = $('#linkGroups'); if (!host) return;
  LINK_GROUPS.forEach(g => {
    const el = document.createElement('div');
    el.className = 'linkgrp';
    el.innerHTML = `<h3>${g.title}</h3><ul>` + g.items.map(([label, url, desc]) =>
      `<li><a href="${url}" target="_blank" rel="noopener">${label}</a><small>${desc}</small></li>`
    ).join('') + '</ul>';
    host.appendChild(el);
  });
})();

/* ══ 7. 차례 표시 ════════════════════════════════════════ */
(() => {
  const links = $$('.topbar nav a');
  const secs = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
  if (!secs.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.setAttribute('aria-current',
        String(a.getAttribute('href') === '#' + e.target.id)));
    });
  }, { rootMargin: '-52px 0px -70% 0px' });
  secs.forEach(s => io.observe(s));
})();
