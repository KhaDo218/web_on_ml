// ============================================================================
// Gộp tất cả file trong bank/ thành data/questions.js (file duy nhất web cần)
// Chạy từ thư mục gốc repo:  node tools/merge_questions.js
// ============================================================================
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const BANK_DIR = path.join(ROOT, "bank");
const OUT_FILE = path.join(ROOT, "data", "questions.js");
const CHAPTERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Thứ tự gộp: ngân hàng theo chương (c1..c11) -> quiz của thầy -> bổ sung
const files = fs.readdirSync(BANK_DIR).filter((f) => f.endsWith(".js")).sort((a, b) => {
  const rank = (f) => {
    const m = f.match(/^questions_c(\d+)\.js$/);
    if (m) return parseInt(m[1], 10);
    if (f.startsWith("questions_quiz")) return 100;
    return 200;
  };
  return rank(a) - rank(b) || a.localeCompare(b);
});

// Xáo đáp án cố định theo id (mỗi lần build ra cùng kết quả)
function seededShuffleIndex(id, n) {
  let h = 2166136261;
  for (const ch of id) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  const rand = () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; };
  const idx = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return idx;
}
// Không xáo những câu có phương án phụ thuộc vị trí ("Tất cả đều đúng", "câu a, c đúng"...)
const POSITIONAL = /(tất cả|cả [a-d] và [a-d]|câu [a-d]\s*[,và]|all of the above|none of the above)/i;
function shuffleOptions(q) {
  if (q.fixed || q.options.some((o) => POSITIONAL.test(o))) { const { fixed, ...rest } = q; return rest; }
  const order = seededShuffleIndex(q.id, q.options.length); // order[newPos] = oldPos
  const options = order.map((old) => q.options[old]);
  const correct = q.correct.map((c) => order.indexOf(c)).sort((a, b) => a - b);
  return { ...q, options, correct };
}

let all = [];
const errors = [];
for (const f of files) {
  const arr = require(path.join(BANK_DIR, f));
  if (!Array.isArray(arr)) { errors.push(`${f}: không export ra mảng`); continue; }
  // Mọi file trong bank/ đều đặt đáp án đúng ở đầu mảng -> xáo cố định theo id
  const needShuffle = true;
  const source = /^questions_c\d+\.js$/.test(f) ? "bo1" : f.startsWith("questions_quiz") ? "quiz" : "bosung";
  console.log(`${f}: ${arr.length} câu`);
  all = all.concat(arr.map((q) => ({ ...(needShuffle ? shuffleOptions(q) : q), source })));
}

// ---------- VALIDATE ----------
const ids = new Set();
all.forEach((q, i) => {
  const tag = `[${q.id || "câu #" + i}]`;
  if (!q.id) errors.push(`${tag} thiếu id`);
  else if (ids.has(q.id)) errors.push(`${tag} id trùng lặp`);
  ids.add(q.id);
  if (!CHAPTERS.includes(q.chapter)) errors.push(`${tag} chapter sai: ${q.chapter}`);
  if (![1, 2, 3].includes(q.difficulty)) errors.push(`${tag} difficulty sai: ${q.difficulty}`);
  if (!["single", "multiple"].includes(q.type)) errors.push(`${tag} type sai: ${q.type}`);
  if (typeof q.question !== "string" || q.question.trim().length < 10) errors.push(`${tag} question không hợp lệ`);
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${tag} options phải đúng 4 phương án`);
  else if (q.options.some((o) => typeof o !== "string" || !o.trim())) errors.push(`${tag} có option rỗng`);
  if (!Array.isArray(q.correct) || q.correct.length === 0) errors.push(`${tag} correct rỗng`);
  else {
    if (q.correct.some((c) => !Number.isInteger(c) || c < 0 || c > 3)) errors.push(`${tag} correct ngoài khoảng 0-3`);
    if (q.type === "single" && q.correct.length !== 1) errors.push(`${tag} single nhưng có ${q.correct.length} đáp án`);
    if (q.type === "multiple" && q.correct.length < 2) errors.push(`${tag} multiple nhưng chỉ có ${q.correct.length} đáp án`);
  }
  if (q.explanation !== undefined && typeof q.explanation !== "string") errors.push(`${tag} explanation phải là chuỗi`);
  // Không cho phép emoji/icon trong nội dung
  const text = [q.question, ...(q.options || []), q.explanation || ""].join(" ");
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}\u{FE0F}]/u.test(text)) errors.push(`${tag} chứa emoji/icon`);
});

if (errors.length) {
  console.error(`\n===== LỖI (${errors.length}) =====`);
  errors.slice(0, 50).forEach((e) => console.error(" -", e));
  process.exit(1);
}

// ---------- THỐNG KÊ ----------
const count = (key) => all.reduce((m, q) => ((m[q[key]] = (m[q[key]] || 0) + 1), m), {});
console.log("\nTổng số câu:", all.length);
console.log("Theo chương:", count("chapter"));
console.log("Theo độ khó (1=Dễ 2=TB 3=Khó):", count("difficulty"));
console.log("Theo loại:", count("type"));
console.log("Theo nguồn:", count("source"));
const pos = [0, 0, 0, 0];
all.forEach((q) => q.correct.forEach((c) => pos[c]++));
console.log("Phân bố vị trí đáp án đúng A/B/C/D:", pos);

// ---------- GHI FILE ----------
fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
const header = `// ============================================================================
// Ngân hàng câu hỏi ôn tập - Phát triển Web Kinh doanh (UEL)
// TỰ ĐỘNG SINH bởi tools/merge_questions.js từ thư mục bank/ - KHÔNG SỬA TAY
// Tổng: ${all.length} câu
// ============================================================================
const QUESTIONS = `;
const footer = `;\nif (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS; }\n`;
fs.writeFileSync(OUT_FILE, header + JSON.stringify(all) + footer, "utf-8");
console.log("\nĐã ghi " + path.relative(ROOT, OUT_FILE));
