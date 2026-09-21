'use strict';
/* 센서 선택 가이드 — 동작부
   데이터는 lessons.js · prices.js 에 있습니다. 가격이 바뀌면 그 파일만 고치면 됩니다. */

const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const won = n => n.toLocaleString('ko-KR');

/* ══ 1. 히어로 — 업체별 센서 단가 범위 ══════════════════ */
(() => {
  const host = document.getElementById('spanRows'); if (!host) return;
  const MAX = 1000000;                       // 가로축 상한 100만원
  const man = n => (n / 10000).toFixed(1).replace(/\.0$/, '') + '만';

  VENDORS.forEach((v, i) => {
    const vals = PRICES.map(r => r[2 + i]).filter(x => x != null);
    const lo = Math.min(...vals), hi = Math.max(...vals);

    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'span__row';
    row.title = `${v.name} — 중학교에서 쓰는 센서 ${vals.length}종 취급`;
    row.setAttribute('aria-label',
      `${v.name}, 센서 ${vals.length}종, 단가 ${won(lo)}원부터 ${won(hi)}원까지. 가격표로 이동`);
    row.addEventListener('click', () =>
      document.getElementById('prices').scrollIntoView({ block: 'start' }));

    row.innerHTML = `
      <span class="span__name vend vend--${v.key}">${v.name}</span>
      <span class="span__track">
        <span class="span__bar" style="
          inset-inline-start:${(lo / MAX * 100).toFixed(2)}%;
          inline-size:${((hi - lo) / MAX * 100).toFixed(2)}%;
          background:${v.pen}"></span>
      </span>
      <span class="span__val">${man(lo)}~${man(hi)}</span>`;
    host.appendChild(row);
  });
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
  const foot = $('#priceFoot'), calc = $('#calcNote');
  const picked = new Set();

  /* 모둠당 개수의 처음 값 = 수업 26건에서 "동시에 쓰는 개수"의 최댓값.
     선생님이 칸에서 직접 바꾸실 수 있습니다. */
  const per = {}, used = {};
  LESSONS.forEach(l => Object.entries(l.sensors).forEach(([k, n]) => {
    per[k] = Math.max(per[k] || 1, n);
    used[k] = (used[k] || 0) + 1;
  }));
  PRICES.forEach(([k]) => { if (!per[k]) per[k] = 1; });

  const N = () => +$('#groups').value;

  function rows() {
    const q = $('#q').value.trim();
    const coreOnly = $('#coreOnly').checked;
    return PRICES.filter(r =>
      (!coreOnly || CORE_KEYS.includes(r[0])) && (!q || r[1].includes(q)));
  }

  function render() {
    body.textContent = '';

    rows().forEach(([key, name, ...p]) => {
      /* 최저가 표시는 「무선끼리 견줬을 때 사이언스큐브가 아닌 곳」에만 붙입니다.
         이지메이커 유선은 취급 항목 전부에서 최저가라 행마다 표시해 봐야 알려 주는 게 없습니다. */
      const wire = [1, 2, 3].filter(i => p[i] != null);
      const wMin = wire.length > 1 ? Math.min(...wire.map(i => p[i])) : null;
      const mark = wMin != null && p[1] !== wMin ? wire.filter(i => p[i] === wMin) : [];
      const tr = document.createElement('tr');

      const tdPick = document.createElement('td');
      tdPick.className = 'pick';
      const cb = document.createElement('input');
      cb.type = 'checkbox'; cb.checked = picked.has(key);
      cb.setAttribute('aria-label', `${name} 담기`);
      cb.addEventListener('change', () => {
        cb.checked ? picked.add(key) : picked.delete(key);
        tr.classList.toggle('on', cb.checked);
        total();
      });
      tdPick.appendChild(cb);
      tr.appendChild(tdPick);

      const th = document.createElement('th');
      th.scope = 'row';
      th.innerHTML = name + (used[key]
        ? ` <span class="tag">수업 ${used[key]}건</span>` : '');
      tr.appendChild(th);

      const tdQty = document.createElement('td');
      tdQty.className = 'qty';
      const num = document.createElement('input');
      num.type = 'number'; num.min = '1'; num.max = '20'; num.step = '1';
      num.value = per[key];
      num.setAttribute('aria-label', `${name} 모둠당 개수`);
      num.addEventListener('input', () => {
        const v = Math.min(20, Math.max(1, +num.value || 1));
        per[key] = v; total();
      });
      tdQty.appendChild(num);
      tr.appendChild(tdQty);

      p.forEach((v, i) => {
        const td = document.createElement('td');
        td.className = 'p' + (v == null ? ' na' : mark.includes(i) ? ' low' : '');
        td.textContent = v == null ? '—' : won(v);
        const tip = [];
        if (mark.includes(i)) tip.push('무선 중에서는 여기가 가장 쌉니다');
        if (i === 2 && PASCO_MODEL[key])
          tip.push(`${PASCO_MODEL[key][0]} · 학교장터 ${PASCO_MODEL[key][1]}`);
        if (tip.length) td.title = tip.join(' / ');
        tr.appendChild(td);
      });

      if (picked.has(key)) tr.classList.add('on');
      body.appendChild(tr);
    });
    total();
  }

  function total() {
    const n = N(), sums = [0, 0, 0, 0], have = [0, 0, 0, 0], lines = [];
    const missing = [[], [], [], []];

    PRICES.forEach(([key, name, ...p]) => {
      if (!picked.has(key)) return;
      const units = per[key] * n;
      p.forEach((v, i) => {
        if (v != null) { sums[i] += v * units; have[i]++; }
        else missing[i].push(name);
      });
      lines.push(`${name} <span class="num">${per[key]}</span>개 ×
        <span class="num">${n}</span>모둠 = <span class="num">${units}</span>개`);
    });

    // 이지메이커 센서를 하나라도 담았을 때만 보드가 필요합니다
    const boards = sums[0] > 0 ? BOARD.main.price * n : 0;
    foot.textContent = '';

    if (!lines.length) {
      foot.innerHTML = `<tr><td colspan="7" class="empty">왼쪽 칸을 체크하면
        ${n}모둠 기준 업체별 합계가 여기에 나옵니다.</td></tr>`;
      calc.innerHTML = `<strong>모둠당 개수</strong>는 수업 26건에서 한 모둠이
        <em>동시에</em> 쓰는 개수의 최댓값을 넣어 두었습니다. 그 실험을 하지 않으시면 칸에서 줄이세요.
        온도 센서가 5개인 것은 「수권의 층상 구조」가 한 번에 5개를 쓰기 때문입니다.`;
      return;
    }

    /* 그 업체가 취급하지 않는 항목이 섞이면 합계를 그대로 견줄 수 없습니다.
       하나도 취급하지 않으면 「—」, 일부만 취급하면 ✽ 를 붙입니다. */
    const cells = (a, flag) => a.map((v, i) => {
      if (v == null) return '<td class="p na">—</td>';
      if (flag && have[i] === 0) return '<td class="p na">—</td>';
      const part = flag && have[i] < lines.length;
      return `<td class="p${part ? ' part' : ''}"${
        part ? ` title="${missing[i].join(', ')} 미취급 — 나머지만 더한 값입니다"` : ''
      }>${won(v)}${part ? '<span class="mark">✽</span>' : ''}</td>`;
    }).join('');

    let html = `<tr><td></td><th scope="row" colspan="2">센서 합계 · ${n}모둠</th>` +
               cells(sums, true) + '</tr>';
    if (boards) {
      html += `<tr class="add"><td></td><th scope="row" colspan="2">+ 메인보드 ${n}개
        <span class="tag">이지메이커는 보드가 있어야 동작합니다</span></th>` +
        cells([boards, null, null, null]) + '</tr>';
    }
    html += `<tr class="sum"><td></td><th scope="row" colspan="2">합계</th>` +
            cells(sums.map((v, i) => i === 0 ? v + boards : v), true) + '</tr>';
    foot.innerHTML = html;

    const partial = have.map((h, i) => h > 0 && h < lines.length ? VENDORS[i].name : null).filter(Boolean);
    const none = have.map((h, i) => h === 0 ? VENDORS[i].name : null).filter(Boolean);

    calc.innerHTML = `<strong>이렇게 셌습니다.</strong> ` + lines.join(' · ') +
      (boards ? `. 이지메이커는 모둠마다 메인보드 <span class="num">${won(BOARD.main.price)}</span>원짜리가
       1개씩 있어야 해서 ${n}개를 더했습니다.
       무선(나노)으로 쓰시려면 센서 1개마다 나노보드 <span class="num">${won(BOARD.nano.price)}</span>원과
       배터리 <span class="num">${won(BOARD.battery.price)}</span>원이 대신 붙습니다.` : '.') +
      (partial.length ? ` <strong class="warn">✽ ${partial.join('·')}</strong>는 고르신 센서 중 일부를
        취급하지 않아, 취급하는 것만 더한 값입니다. 다른 업체와 그대로 견주시면 안 됩니다.` : '') +
      (none.length ? ` <strong class="warn">${none.join('·')}</strong>는 고르신 센서를 하나도 취급하지 않습니다.` : '');
  }

  $('#groups').addEventListener('input', () => {
    $('#groupsOut').textContent = $('#groups').value + '모둠';
    total();
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

/* ══ 7. 탭 ══════════════════════════════════════════════ */
(() => {
  const tabs = $$('[role="tab"]');
  if (!tabs.length) return;
  const panelOf = t => document.getElementById(t.getAttribute('aria-controls'));

  function show(tab, { focus = false, scroll = true } = {}) {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      panelOf(t).hidden = !on;
    });
    const id = tab.getAttribute('aria-controls');
    history.replaceState(null, '', '#' + id);
    if (focus) tab.focus();
    if (scroll) {
      const top = panelOf(tab).getBoundingClientRect().top + window.scrollY
                - ($('.topbar').offsetHeight || 52);
      window.scrollTo({ top: Math.max(0, top),
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  }

  tabs.forEach(t => t.addEventListener('click', () => show(t)));

  // ← → Home End 로도 옮겨 다닐 수 있게
  $('[role="tablist"]').addEventListener('keydown', e => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    const to = { ArrowLeft: i - 1, ArrowRight: i + 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (to === undefined) return;
    e.preventDefault();
    show(tabs[(to + tabs.length) % tabs.length], { focus: true, scroll: false });
  });

  // 히어로 버튼과 본문 안의 절 링크
  $$('[data-tab]').forEach(b => b.addEventListener('click', () =>
    show(document.getElementById('tab-' + b.dataset.tab))));

  // 주소에 #가격 같은 조각이 있으면 그 탭으로 엽니다
  const first = tabs.find(t => '#' + t.getAttribute('aria-controls') === location.hash);
  if (first) show(first, { scroll: false });

  addEventListener('hashchange', () => {
    const t = tabs.find(x => '#' + x.getAttribute('aria-controls') === location.hash);
    if (t && t.getAttribute('aria-selected') !== 'true') show(t);
  });
})();
