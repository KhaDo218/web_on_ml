// Kiểm tra các đáp án JavaScript trong bank/questions_bosung.js bằng cách chạy thật.
// Chạy: node tools/verify_bosung.js
const assert = require("assert");
let pass = 0;
const t = (name, actual, expected) => { assert.deepStrictEqual(actual, expected, name); pass++; };

t("c8-01", (() => { var a = "5"; var b = 2; return a + b; })(), "52");
t("c8-02", "10" - 3 + "2", "72");
t("c8-03", "3" + "4", "34");
t("c8-04", Number("999") + Number(false), 999);
t("c8-05", isNaN(parseInt("abc123")), true);
t("c8-06", (() => { var x = 3, s = ""; switch (x) { case 1: s += "A"; default: s += "D"; case 2: s += "B"; break; case 4: s += "C"; } return s; })(), "DB");
t("c8-08", (() => { var gt = 1, i = 1; while (i <= 4) { gt = gt * i; i += 2; } return gt; })(), 3);
t("c8-09", (() => { var s = 0; for (var i = 1; i <= 10; i++) { if (i % 2 != 0) continue; s += i; } return s; })(), 30);
t("c8-10", (() => { var s = 0; for (var i = 1; i <= 10; i++) { if (i == 4) break; s += i; } return s; })(), 6);
t("c8-11", (() => { var i = 10; do { i++; } while (i < 5); return i; })(), 11);
t("c8-12", (() => { var dem = 0; for (var i = 1; i <= 3; i++) for (var j = 1; j <= i; j++) dem++; return dem; })(), 6);
t("c8-13", (() => { var d = 7; return d >= 8 ? "Giỏi" : d >= 6.5 ? "Khá" : "Trung bình"; })(), "Khá");
t("c8-14", (() => { var x = 6, y = 3; return (x > 5 && y > 5) || !(x == y); })(), true);
t("c8-15", (() => { var x = 10; x += 5; x *= 2; x %= 7; return x; })(), 2);
t("c8-16", (() => { var a = 5; var b = ++a + a++; return [a, b]; })(), [7, 12]);
const leap = (y) => (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
t("c8-17", [2000, 1900, 2024, 2026].map(leap), [true, false, true, false]);
t("c8-18", (() => { var a = 1, b = -3, c = 2, delta = b * b - 4 * a * c; return [(-b + Math.sqrt(delta)) / (2 * a), -b + Math.sqrt(delta) / 2 * a]; })(), [2, 3.5]);
t("c8-19", (function () { function nhanDoi(x) { x * 2; } return nhanDoi(3); })(), undefined);
t("c8-20", (function gt(n) { if (n <= 1) return 1; return n * gt(n - 1); })(4), 24);
t("c8-21", (() => { var a = "9", b = "10"; return a > b ? a : b; })(), "9");
t("c8-23", (() => { var Java = 1; var java = 2; return Java + java; })(), 3);
t("c8-24", "Tôi nói \"Xin chào\"", 'Tôi nói "Xin chào"');
t("c8-25", (() => { var tong = 0; tong = tong + "30000"; tong = tong + "45000"; return tong; })(), "03000045000");

t("c9-01", "time and tide wait for no man".indexOf("tide"), 9);
t("c9-02", "Apple, Banana, Kiwi".slice(-4), "Kiwi");
t("c9-03", "Apple, Banana, Kiwi".slice(-4, -1), "Kiw");
t("c9-04", "Apple, Banana, Kiwi".substr(15, 4), "Kiwi");
const s5 = "SV1;Tèo Mộng Mơ;teo@uel.edu.vn";
t("c9-05", s5.substring(s5.lastIndexOf(";") + 1), "teo@uel.edu.vn");
t("c9-06", "Please visit Microsoft!".replace("MICROSOFT", "W3Schools"), "Please visit Microsoft!");
function chuanHoa(s) { var arr = s.trim().split(" "); var kq = []; for (var i = 0; i < arr.length; i++) { if (arr[i] == "") continue; kq.push(arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase()); } return kq.join(" "); }
t("c9-07", chuanHoa("  nGUYỄN   văn  tèo "), "Nguyễn Văn Tèo");
t("c9-08", "a,b,,c".split(",").length, 4);
t("c9-10", Math.floor(-4.7), -5);
t("c9-11", (() => { for (let k = 0; k < 10000; k++) { const v = Math.floor(Math.random() * 6) + 1; if (v < 1 || v > 6) return false; } return true; })(), true);
t("c9-12", Math.round(Math.sin(90 * Math.PI / 180)), 1);
t("c9-13", (() => { var d = new Date(2026, 9, 21); return [d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(), d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear()]; })(), ["21/10/2026", "21/91/2026"]);
t("c9-14", new Date(2026, 9, 21).getDay(), 3);
t("c9-15", Math.ceil((new Date(2026, 11, 25) - new Date(2026, 9, 21)) / (1000 * 60 * 60 * 24)), 65);
t("c9-16", (() => { var a = [1, 2, 3]; a.unshift(0); a.pop(); a.push(9); a.shift(); return a; })(), [1, 2, 9]);
t("c9-17", (() => { var w = new Array(2); w[0] = "Sunday"; w[1] = "Monday"; w[3] = "Wednesday"; return w.length; })(), 4);
t("c9-18", ["ghe", "ban", "tu"].indexOf("giuong"), -1);
t("c9-19", (() => { var person = { firstName: "John", lastName: "Doe", fullName: function () { return firstName + " " + lastName; } }; try { person.fullName(); return "chạy"; } catch (e) { return e.name; } })(), "ReferenceError");
t("c9-21", ({ type: "Fiat", model: "500" }).Model, undefined);
t("c9-22", (() => { var email = "teo@uel"; return email.indexOf("@") > 0 && email.lastIndexOf(".") > email.indexOf("@"); })(), false);
t("c9-23", "Trần".concat(" ", "Duy", " ", "Thanh"), "Trần Duy Thanh");

const dm = { Sanphams: [{ MaSP: "sp_1xxx", TenSP: "DELL Inspiron 14NR", SoLuong: 100, DonGia: 150000 }, { MaSP: "sp_2yyyy", TenSP: "HP Inspiron 113", SoLuong: 130, DonGia: 140000 }] };
t("c11-01", (() => { const ok = []; for (const s of ['{"ma": "sp1", "gia": 15000}', "{'ma': 'sp1', 'gia': 15000}", '{ma: "sp1", gia: 15000}', '{"ma": "sp1", "gia": 15000,}']) { try { JSON.parse(s); ok.push(true); } catch (e) { ok.push(false); } } return ok; })(), [true, false, false, false]);
t("c11-03", dm.Sanphams[1].TenSP, "HP Inspiron 113");
t("c11-04", dm.Sanphams.reduce((s, p) => s + p.SoLuong, 0), 230);
t("c11-05", dm.Sanphams.reduce((s, p) => s + p.SoLuong * p.DonGia, 0), 33200000);
const trang = [100, 200, 90, 70, 1000, 500, 600, 400, 300, 700];
t("c11-06", trang.filter((x) => x >= 500).length, 4);
t("c11-09", JSON.stringify({ ma: "sp1", gia: 15000 }), '{"ma":"sp1","gia":15000}');
t("c11-11", ({ "first-name": "Thanh" })["first-name"], "Thanh");
t("c11-13", [[1, 2], [3, 4]][1][0], 3);

// Bảng màu
const hex = (r, g, b) => "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0").toUpperCase()).join("");
t("c3-12", hex(0, 128, 255), "#0080FF");
t("qz-2-36", parseInt("88", 16), 136);
// Box model
t("c6-08", 200 + 20 * 2 + 5 * 2 + 10 * 2, 270);

console.log("Tất cả " + pass + " phép kiểm tra đều đúng.");
