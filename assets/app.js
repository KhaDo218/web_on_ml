// ============================================================================
// Web ôn tập - Phát triển Web Kinh doanh
// Dữ liệu: biến QUESTIONS (data/questions.js). Tiến độ lưu localStorage.
// ============================================================================
(function () {
  "use strict";

    const CHAPTER_NAMES = {
    1: "01 - Tổng quan về Máy học (MLBA) & Ôn tập Python",
    2: "02 - (Chương 2 - Nếu có)",
    3: "03 - MySQL Interaction",
    4: "04 - Các nhóm giải thuật máy học",
    5: "05 - Thiết kế hệ thống máy học",
    6: "06 - PyQt6 & Microsoft GUI",
    7: "07 - ML.NET Framework & Tích hợp mô hình"
  };
  const DIFF = { 1: "Dễ", 2: "Trung bình", 3: "Khó" };
  const SOURCE = { bo1: "Slide bài giảng", quiz: "Quiz trên lớp", bosung: "Câu hỏi bổ sung" };
  const LETTERS = "ABCD";

    // Biến lưu chuỗi đúng/sai liên tiếp
  let correctStreak = 0;
  let wrongStreak = 0;

  // Danh sách ảnh GIF/Webp
  const WRONG_GIFS = [
    "https://media.tenor.com/9PFhK1Tcie8AAAAm/darts.webp",
    "https://i.redd.it/1wxi2yjtxb7a1.gif",
    "https://media.tenor.com/RoMuG5SI7qQAAAAi/pokemon.gif",
    "https://media.tenor.com/FBh5dO1VGvsAAAAM/pokemon-pokemon-the-johto-journeys.gif",
    "https://media.tenor.com/OO67XnnDQ6YAAAAM/pokemon-pokemon-memes.gif"
  ];

  const CORRECT_GIFS = [
    "https://media.tenor.com/zDnuREBSTXMAAAAM/evil-smile.gif",
    "https://media.tenor.com/wvoZgGgmJ2EAAAAM/pikachu-clap.gif",
    "https://media.tenor.com/43LBBFIcdZwAAAAm/pika%C3%A7u.webp",
    "https://media.tenor.com/Vijka4gG4sUAAAAm/pikachu-meme-delight.webp",
    "https://media.tenor.com/Wv_1ETNfwU0AAAAM/pokemon-pikachu.gif"
  ];
  const PAGE_SIZE = 20;
  const STORE_KEY = "mlba_onthi_v1"; 

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const byId = new Map(QUESTIONS.map((q) => [q.id, q]));

  // ---------------------------------------------------------------- storage
  let store = { answered: {}, wrong: [] };
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) store = Object.assign(store, JSON.parse(raw));
  } catch (e) { /* trình duyệt chặn storage: vẫn chạy bình thường */ }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* bỏ qua */ }
  }
  function record(id, ok) {
    store.answered[id] = ok;
    const i = store.wrong.indexOf(id);
    if (ok && i >= 0) store.wrong.splice(i, 1);
    if (!ok && i < 0) store.wrong.unshift(id);
    save();
    updateWrongCount();
  }

  // ---------------------------------------------------------------- helpers
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function CHAPTERS_PRESENT() { return QUESTIONS.reduce((m, q) => ((m[q.chapter] = 1), m), {}); }
  // Hiển thị văn bản có code: ```khối code``` -> <pre>, `code` -> <code>. Chỉ dùng textContent nên an toàn.
  function rich(text) {
    const frag = document.createDocumentFragment();
    String(text).split("```").forEach((part, i, arr) => {
      if (i % 2 === 1) {
        const pre = el("pre", "code-block", part.replace(/^\n+|\n+$/g, ""));
        frag.append(pre);
        return;
      }
      if (i > 0) part = part.replace(/^\n+/, "");          // bỏ dòng trống ngay sau khối code
      if (i < arr.length - 1) part = part.replace(/\n+$/, ""); // bỏ dòng trống ngay trước khối code
      if (!part.trim()) return;
      part.split("`").forEach((seg, j) => {
        if (!seg) return;
        frag.append(j % 2 === 1 ? el("code", "", seg) : document.createTextNode(seg));
      });
    });
    return frag;
  }
  const looksLikeCode = (s) => /\n/.test(s) && /[<{;=]/.test(s);
  const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x));
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function normalize(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
  }
  const searchIndex = new Map(QUESTIONS.map((q) => [q.id, normalize(q.question + " " + q.options.join(" "))]));

  // ---------------------------------------------------------------- card
  // mode: "practice" (chấm ngay) | "exam" (chấm khi nộp)
  // order: thứ tự hiển thị các phương án (mảng chỉ số gốc)
  function buildCard(q, num, mode, order) {
    order = order || [0, 1, 2, 3];
    const card = el("article", "q-card");
    card.dataset.id = q.id;

    const meta = el("div", "q-meta");
    meta.append(el("span", "tag", "Chương " + q.chapter));
    meta.append(el("span", "tag d" + q.difficulty, DIFF[q.difficulty]));
    if (q.type === "multiple") meta.append(el("span", "tag multi", "Nhiều đáp án"));
    meta.append(el("span", "tag", SOURCE[q.source] || ""));
    card.append(meta);

    const text = el("p", "q-text");
    text.append(el("span", "q-num", "Câu " + num + "."), rich(q.question));
    card.append(text);

    const opts = el("div", "options");
    const name = mode + "-" + q.id;
    order.forEach((orig, pos) => {
      const lab = el("label", "option");
      lab.dataset.orig = orig;
      const input = document.createElement("input");
      input.type = q.type === "multiple" ? "checkbox" : "radio";
      input.name = name;
      input.value = orig;
      const body = el("span", "opt-text" + (looksLikeCode(q.options[orig]) ? " opt-code" : ""));
      body.append(rich(q.options[orig]));
      lab.append(input, el("span", "letter", LETTERS[pos]), body);
      input.addEventListener("change", () => {
        if (card.classList.contains("locked")) return;
        $$(".option", opts).forEach((o) => o.classList.toggle("selected", $("input", o).checked));
        if (mode === "practice" && q.type === "single") check();
        if (mode === "exam") updateExamProgress();
        if (mode === "practice" && q.type === "multiple") btn.disabled = selected().length === 0;
      });
      opts.append(lab);
    });
    card.append(opts);

    const foot = el("div", "q-foot");
    const btn = el("button", "btn primary", "Kiểm tra");
    const redo = el("button", "btn ghost hidden", "Làm lại");
    const verdict = el("span", "verdict");
    if (mode === "practice") {
      if (q.type === "multiple") { btn.disabled = true; foot.append(btn); }
      foot.append(redo);
    }
    foot.append(verdict);
    card.append(foot);

    function selected() {
      return $$("input", opts).filter((i) => i.checked).map((i) => +i.value).sort((a, b) => a - b);
    }
    function reveal(sel, triggerGif = true) {
      const ok = sameSet(sel, q.correct);
      card.classList.add("locked", ok ? "is-right" : "is-wrong");

      if (triggerGif) showReaction(ok, -1, card);  

      $$("input", opts).forEach((i) => (i.disabled = true));
      $$(".option", opts).forEach((o) => {
        const orig = +o.dataset.orig;
        if (q.correct.includes(orig)) o.classList.add("correct");
        else if (sel.includes(orig)) o.classList.add("wrong");
      });
      const letters = order.map((orig, pos) => (q.correct.includes(orig) ? LETTERS[pos] : null)).filter(Boolean);
      verdict.className = "verdict " + (ok ? "right" : "wrong");
      verdict.textContent = ok ? "Chính xác" : sel.length ? "Chưa đúng. Đáp án: " + letters.join(", ") : "Chưa trả lời. Đáp án: " + letters.join(", ");
      if (q.explanation) {
        const ex = el("div", "explain");
        ex.append(el("b", "", "Giải thích: "), rich(q.explanation));
        card.append(ex);
      }
      btn.classList.add("hidden");
      if (mode === "practice") redo.classList.remove("hidden");
      return ok;
    }
    function check() {
      const sel = selected();
      if (!sel.length) return;
      record(q.id, reveal(sel));
      updatePracticeStats();
    }
    btn.addEventListener("click", check);
    redo.addEventListener("click", () => {
      const fresh = buildCard(q, num, mode, order);
      card.replaceWith(fresh);
    });

    card._grade = (triggerGif = true) => { const sel = selected(); return { ok: reveal(sel, triggerGif), answered: sel.length > 0 }; };
    card._answered = () => selected().length > 0;
    return card;
  }

  // ---------------------------------------------------------------- tabs
  $$(".tab-btn").forEach((b) => b.addEventListener("click", () => {
    $$(".tab-btn").forEach((x) => x.classList.toggle("active", x === b));
    $$(".tab-content").forEach((t) => t.classList.toggle("active", t.id === b.dataset.tab + "-tab"));
    if (b.dataset.tab === "review") renderReview();
    window.scrollTo({ top: 0 });
  }));

  function updateWrongCount() { $("#wrong-count").textContent = store.wrong.length; }

  // ---------------------------------------------------------------- practice
  const chSel = $("#f-chapter");
  chSel.append(new Option("Tất cả chương (" + QUESTIONS.length + " câu)", "all"));
  Object.keys(CHAPTER_NAMES).forEach((ch) => {
    const n = QUESTIONS.filter((q) => String(q.chapter) === ch).length;
    if (n) chSel.append(new Option("Chương " + ch + ": " + CHAPTER_NAMES[ch] + " (" + n + ")", ch));
  });
  $("#brand-sub").textContent = QUESTIONS.length + " câu hỏi · " + Object.keys(CHAPTERS_PRESENT()).length + " chương";

  let practiceList = [];
  let practicePage = 0;
  let shuffledOrder = null;

  function filtered() {
    const ch = chSel.value, d = $("#f-diff").value, src = $("#f-source").value, st = $("#f-status").value;
    const kw = normalize($("#f-search").value.trim());
    return QUESTIONS.filter((q) =>
      (ch === "all" || String(q.chapter) === ch) &&
      (d === "all" || String(q.difficulty) === d) &&
      (src === "all" || q.source === src) &&
      (st === "all" || (st === "todo" && !(q.id in store.answered)) ||
        (st === "wrong" && store.answered[q.id] === false) || (st === "right" && store.answered[q.id] === true)) &&
      (!kw || searchIndex.get(q.id).includes(kw))
    );
  }
  function applyFilters() {
    let list = filtered();
    if ($("#f-shuffle").checked) {
      if (!shuffledOrder) shuffledOrder = new Map(shuffle(QUESTIONS).map((q, i) => [q.id, i]));
      list.sort((a, b) => shuffledOrder.get(a.id) - shuffledOrder.get(b.id));
    } else {
      list.sort((a, b) => a.chapter - b.chapter || a.difficulty - b.difficulty);
    }
    practiceList = list;
    practicePage = 0;
    renderPractice();
  }
  function renderPractice() {
    const box = $("#practice-list");
    box.innerHTML = "";
    if (!practiceList.length) { box.append(el("div", "empty", "Không có câu hỏi nào phù hợp bộ lọc.")); }
    const start = practicePage * PAGE_SIZE;
    practiceList.slice(start, start + PAGE_SIZE).forEach((q, i) => box.append(buildCard(q, start + i + 1, "practice")));
    renderPager($("#practice-pager"), practiceList.length, practicePage, (p) => { practicePage = p; renderPractice(); $("#practice-list").scrollIntoView({ behavior: "smooth" }); });
    updatePracticeStats();
  }
  function renderPager(box, total, page, go) {
    box.innerHTML = "";
    const pages = Math.ceil(total / PAGE_SIZE);
    if (pages <= 1) return;
    const prev = el("button", "btn ghost", "Trang trước");
    const next = el("button", "btn ghost", "Trang sau");
    prev.disabled = page === 0;
    next.disabled = page >= pages - 1;
    prev.onclick = () => go(page - 1);
    next.onclick = () => go(page + 1);
    const sel = document.createElement("select");
    for (let i = 0; i < pages; i++) sel.append(new Option("Trang " + (i + 1) + " / " + pages, i));
    sel.value = page;
    sel.onchange = () => go(+sel.value);
    box.append(prev, sel, next);
  }
  function updatePracticeStats() {
    const ids = practiceList.map((q) => q.id);
    const done = ids.filter((id) => id in store.answered).length;
    const right = ids.filter((id) => store.answered[id] === true).length;
    $("#practice-stats").textContent = "Đang lọc: " + ids.length + " câu  |  Đã làm: " + done + "  |  Đúng: " + right +
      (done ? " (" + Math.round((right / done) * 100) + "%)" : "");
    $("#practice-bar").style.width = ids.length ? (done / ids.length) * 100 + "%" : "0";
  }
  ["#f-chapter", "#f-diff", "#f-source", "#f-status", "#f-shuffle"].forEach((s) => $(s).addEventListener("change", applyFilters));
  let searchTimer;
  $("#f-search").addEventListener("input", () => { clearTimeout(searchTimer); searchTimer = setTimeout(applyFilters, 250); });
  $("#reset-practice-btn").addEventListener("click", () => {
    if (!confirm("Xóa toàn bộ tiến độ đã làm và danh sách câu sai?")) return;
    store = { answered: {}, wrong: [] };
    save();
    updateWrongCount();
    applyFilters();
  });

  // ---------------------------------------------------------------- exam
  const examChBox = $("#exam-chapters");
  Object.keys(CHAPTER_NAMES).forEach((ch) => {
    const n = QUESTIONS.filter((q) => String(q.chapter) === ch).length;
    const lab = el("label");
    const cb = document.createElement("input");
    cb.type = "checkbox"; cb.value = ch; cb.checked = true;
    lab.append(cb, el("span", "", ch + ". " + CHAPTER_NAMES[ch]), el("span", "cnt", n + " câu"));
    examChBox.append(lab);
  });
  $("#exam-all-ch").onclick = () => $$("input", examChBox).forEach((c) => (c.checked = true));
  $("#exam-none-ch").onclick = () => $$("input", examChBox).forEach((c) => (c.checked = false));

  let examCards = [];
  let timer = null;
  let secondsLeft = 0;
  let examQs = [];

  $("#start-exam-btn").addEventListener("click", () => {
    const chs = $$("input:checked", examChBox).map((c) => +c.value);
    const d = $("#exam-diff").value;
    const pool = QUESTIONS.filter((q) => chs.includes(q.chapter) && (d === "all" || String(q.difficulty) === d));
    if (!pool.length) { alert("Hãy chọn ít nhất một chương có câu hỏi."); return; }
    let n = parseInt($("#exam-count").value, 10);
    if (!(n > 0)) n = 40;
    n = Math.min(n, pool.length);
    let minutes = parseInt($("#exam-minutes").value, 10);
    if (!(minutes > 0)) minutes = 45;

    examQs = shuffle(pool).slice(0, n);
    const box = $("#exam-list");
    box.innerHTML = "";
    examCards = examQs.map((q, i) => {
      const c = buildCard(q, i + 1, "exam", shuffle([0, 1, 2, 3]));
      box.append(c);
      return c;
    });
    $("#exam-setup").classList.add("hidden");
    $("#exam-running").classList.remove("hidden");
    $("#exam-summary").classList.add("hidden");
    $("#retry-exam-btn").classList.add("hidden");
    $("#submit-exam-btn").classList.remove("hidden");
    secondsLeft = minutes * 60;
    tick();
    clearInterval(timer);
    timer = setInterval(tick, 1000);
    updateExamProgress();
    window.scrollTo({ top: 0 });
  });

  function tick() {
    const m = Math.floor(secondsLeft / 60), s = secondsLeft % 60;
    const t = $("#exam-timer");
    t.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    t.classList.toggle("urgent", secondsLeft <= 60);
    if (secondsLeft <= 0) { submitExam(true); return; }
    secondsLeft--;
  }
  function updateExamProgress() {
    const done = examCards.filter((c) => c._answered()).length;
    $("#exam-progress").textContent = "Đã trả lời " + done + " / " + examCards.length;
  }
  function submitExam(auto) {
    if (!auto) {
      const left = examCards.filter((c) => !c._answered()).length;
      if (left && !confirm("Còn " + left + " câu chưa trả lời. Vẫn nộp bài?")) return;
    }
    clearInterval(timer);
    const byCh = {};
    let right = 0;
    examCards.forEach((c, i) => {
      const q = examQs[i];
      const r = c._grade(false); // không hiện gif khi nộp bài
      if (r.ok) right++;
      record(q.id, r.ok);
      byCh[q.chapter] = byCh[q.chapter] || [0, 0];
      byCh[q.chapter][1]++;
      if (r.ok) byCh[q.chapter][0]++;
    });
    const total = examCards.length;
    const sum = $("#exam-summary");
    sum.innerHTML = "";

    const scoreRatio = right / total;
    if (scoreRatio >= 0.5) {
        showReaction(true, 4); // Điểm >= 50%: Hiện ảnh Pikachu vui vẻ (ảnh số 5)
    } else {
        showReaction(false, 4); // Điểm < 50%: Hiện ảnh Pokemon chán nản (ảnh số 5)
    }
    // ----------------------------------------------------

    sum.className = "card score";
    sum.append(el("div", "muted", auto ? "Hết giờ, bài đã được nộp tự động." : "Kết quả bài thi"));
    sum.append(el("div", "big", right + " / " + total));
    sum.append(el("div", "", "Điểm thang 10: " + ((right / total) * 10).toFixed(2)));
    const tb = el("table");
    const head = el("tr");
    head.append(el("th", "", "Chương"), el("th", "", "Đúng"));
    tb.append(head);
    Object.keys(byCh).sort((a, b) => a - b).forEach((ch) => {
      const tr = el("tr");
      tr.append(el("td", "", ch + ". " + CHAPTER_NAMES[ch]), el("td", "", byCh[ch][0] + " / " + byCh[ch][1]));
      tb.append(tr);
    });
    sum.append(tb);
    $("#submit-exam-btn").classList.add("hidden");
    $("#retry-exam-btn").classList.remove("hidden");
    $("#exam-progress").textContent = "Đã nộp bài";
    window.scrollTo({ top: 0, behavior: "smooth" });
    updatePracticeStats();
  }
  $("#submit-exam-btn").addEventListener("click", () => submitExam(false));
  $("#retry-exam-btn").addEventListener("click", () => {
    $("#exam-running").classList.add("hidden");
    $("#exam-setup").classList.remove("hidden");
    window.scrollTo({ top: 0 });
  });

  // ---------------------------------------------------------------- review
  let reviewPage = 0;
  function renderReview() {
    const box = $("#review-list");
    box.innerHTML = "";
    const list = store.wrong.map((id) => byId.get(id)).filter(Boolean);
    if (!list.length) { box.append(el("div", "empty", "Chưa có câu nào làm sai.")); return; }
    const pages = Math.ceil(list.length / PAGE_SIZE);
    if (reviewPage >= pages) reviewPage = pages - 1;
    const start = reviewPage * PAGE_SIZE;
    list.slice(start, start + PAGE_SIZE).forEach((q, i) => box.append(buildCard(q, start + i + 1, "practice")));
    const pager = el("div", "pager");
    box.append(pager);
    renderPager(pager, list.length, reviewPage, (p) => { reviewPage = p; renderReview(); window.scrollTo({ top: 0 }); });
  }
  $("#clear-wrong-btn").addEventListener("click", () => {
    if (!confirm("Xóa danh sách câu làm sai?")) return;
    store.wrong = [];
    save();
    updateWrongCount();
    renderReview();
  });
  // ---------------------------------------------------------------- hiệu ứng gif
  function showReaction(isCorrect, forceIndex = -1, targetElement = null) {
    let imgUrl = "";
    let currentIndex = 0;

    if (isCorrect) {
      correctStreak++;
      wrongStreak = 0;
      currentIndex = (forceIndex !== -1) ? forceIndex : Math.min(correctStreak - 1, CORRECT_GIFS.length - 1);
      imgUrl = CORRECT_GIFS[currentIndex];
    } else {
      wrongStreak++;
      correctStreak = 0;
      currentIndex = (forceIndex !== -1) ? forceIndex : Math.min(wrongStreak - 1, WRONG_GIFS.length - 1);
      imgUrl = WRONG_GIFS[currentIndex];
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    img.className = "reaction-gif";
    
    // Sửa đoạn này: Nếu có targetElement (thẻ câu hỏi) thì gắn vào đó, nếu không thì gắn vào body
    if (targetElement) {
        targetElement.appendChild(img);
    } else {
        document.body.appendChild(img);
    }

    // Tự động xóa sau 3 giây
    setTimeout(() => {
      img.remove();
    }, 3000);
  }
  // ---------------------------------------------------------------- init
  updateWrongCount();
  applyFilters();
})();
