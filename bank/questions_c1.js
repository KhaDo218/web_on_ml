// ============================================================================
// CHƯƠNG 1: Tổng quan về Máy học (MLBA) - Bao gồm Ôn tập Python
// Nguồn: Slide 01, 02, 03 (TS. Trần Duy Thanh)
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// C(code) tạo khối code nhiều dòng.
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c1-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c1-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });
const C = (code) => "\n```\n" + code + "\n```\n";

const QUESTIONS_C1 = [
// ================= GIỚI THIỆU MÔN HỌC =================
M("q52", 1, 1, "Những phương pháp học nào được nêu trong mục tiêu phân loại và lựa chọn phương pháp học của môn Học máy trong phân tích kinh doanh?",
  ["Học có giám sát", "Học không giám sát", "Học bán giám sát", "Học tăng cường"], 4,
  "Mục tiêu CO3: phân loại và lựa chọn các phương pháp học riêng biệt như học có giám sát, không giám sát, bán giám sát, học tăng cường."),

M("q53", 1, 1, "Những công cụ lập trình nào được sử dụng trong môn Học máy trong phân tích kinh doanh?",
  ["Anaconda, Spyder, Jupyter Notebook", "PyCharm", "Visual Studio", "Adobe Photoshop"], 3,
  "Công cụ: Anaconda/Spyder/Jupyter Notebook, PyCharm, Visual Studio, MySQL Workbench, Microsoft SQL Server, SQLite."),

S("q54", 1, 1, "Trong môn Học máy trong phân tích kinh doanh, phần mềm tích hợp máy học được triển khai chủ yếu bằng framework giao diện nào của Python?",
  ["PyQt6", "Django", "Flask", "Tkinter"],
  "Môn học hướng tới triển khai phần mềm tích hợp máy học thông qua học theo dự án, ứng dụng PyQt6 và các framework khác (ML.NET)."),

// ================= PHẦN 0: ÔN TẬP PYTHON - HÀM =================
S("q1", 1, 1, "Trong Python, từ khóa nào được sử dụng để định nghĩa một hàm?",
  ["def", "function", "fun", "define"],
  "Cú pháp: `def name(parameter list):` rồi đến block lệnh thụt lề."),

S("q55", 1, 1, "Hàm (function) còn được gọi bằng tên nào khác?",
  ["Chương trình con (Subroutine)", "Chương trình chính (Main program)", "Biến toàn cục (Global variable)", "Thư viện (Library)"],
  "Hàm là một khối lệnh thực hiện một công việc hoàn chỉnh (module), được đặt tên và gọi nhiều lần; còn gọi là chương trình con (Subroutine)."),

S("q56", 1, 1, "Hàm trong Python được phân thành hai loại nào?",
  ["Hàm thư viện và hàm do người dùng tự định nghĩa", "Hàm tĩnh và hàm động", "Hàm có tham số và hàm không tham số", "Hàm toàn cục và hàm cục bộ"],
  "Hàm thư viện phải import trước khi dùng (`from ... import`), hàm người dùng tự định nghĩa bằng `def`."),

S("q57", 1, 2, "Đoạn code sau in ra kết quả gì?" + C(`from decimal import *
x = 6.6789
y = Decimal(x)
print(type(x))
print(type(y))`),
  ["<class 'float'> và <class 'decimal.Decimal'>", "<class 'float'> và <class 'float'>", "<class 'decimal.Decimal'> và <class 'float'>", "Lỗi vì chưa import Decimal"],
  "`from decimal import *` nạp lớp Decimal. x vẫn là float, y = Decimal(x) có kiểu decimal.Decimal."),

S("q58", 1, 1, "Đoạn code sau in ra gì?" + C(`def Tong(x, y):
    return x + y
a = 8
b = 9
c = Tong(a, b)
print(f"Tong = {c}")`),
  ["Tong = 17", "Tong = {c}", "Tong = 89", "Tong = c"],
  "Hàm trả về 8 + 9 = 17; chuỗi f-string thay `{c}` bằng giá trị 17."),

S("q59", 1, 2, "Cho hàm:" + C(`def phepChia(sobichia, sochia):
    return sobichia / sochia`) + "Lời gọi `phepChia(sochia=2, sobichia=9)` trả về giá trị nào?",
  ["4.5", "0.2222222222222222", "4", "Lỗi vì sai thứ tự đối số"],
  "Truyền theo tên tham số (keyword argument) thì không cần đúng thứ tự: sobichia = 9, sochia = 2 nên kết quả 9 / 2 = 4.5."),

S("q60", 1, 1, "Hàm `sayWelcome()` chỉ in ra lời chào và không có lệnh return. Cách gọi hàm nào đúng?",
  ["sayWelcome()", "result = sayWelcome", "call sayWelcome()", "sayWelcome[]"],
  "Hàm không có kết quả trả về được gọi bằng `FunctionName([parameter])`; hàm có kết quả trả về thường gán `result = FunctionName([parameter])`."),

S("q61", 1, 2, "Hàm kiểm tra số chẵn nào sau đây viết đúng?",
  ["def isEven(x):\n    if x % 2 == 0:\n        return True\n    return False", "def isEven(x)\n    if x % 2 == 0:\n        return True\n    return False", "function isEven(x):\n    if x % 2 == 0:\n        return True\n    return False", "def isEven(x):\n    if x / 2 == 0:\n        return True\n    return False"],
  "Cần từ khóa `def`, dấu `:` sau phần khai báo và phép chia lấy dư `%`."),

S("q2", 1, 2, "Hàm trong Python hoạt động theo cơ chế nào?",
  ["LIFO (Last In First Out)", "FIFO (First In First Out)", "LILO (Last In Last Out)", "Round Robin"],
  "Hàm trong Python cũng như các ngôn ngữ khác hoạt động theo cơ chế LIFO (giống ngăn xếp): hàm được gọi sau sẽ kết thúc trước."),

S("q62", 1, 2, "Trong Python, cách nào dùng để tạo tài liệu (docstring) mô tả cho một hàm?",
  ["Viết chuỗi trong cặp ba dấu nháy kép \"\"\" ... \"\"\" ngay dòng đầu thân hàm", "Viết chú thích bằng // trước tên hàm", "Viết chú thích trong cặp /* ... */", "Đặt chuỗi mô tả sau lệnh return"],
  "Ví dụ hàm USLN có dòng đầu `\"\"\" Hàm tìm ước số chung lớn nhất của 2 số x, y \"\"\"`; khi gọi help hoặc rê chuột vào hàm sẽ thấy mô tả này."),

S("q63", 1, 2, "Đoạn code sau in ra gì?" + C(`def USLN(x, y):
    us = 1
    sobe = x if x < y else y
    for i in range(1, sobe + 1):
        if x % i == 0 and y % i == 0:
            us = i
    return us
print(USLN(12, 18))`),
  ["6", "3", "12", "36"],
  "Hàm duyệt i từ 1 đến số bé (12) và giữ lại ước chung lớn nhất: 6."),

S("q64", 1, 2, "Đoạn code sau in ra gì?" + C(`x = 8
def increment():
    x = 6
    x = x + 1
increment()
print(x)`),
  ["8", "7", "6", "Lỗi UnboundLocalError"],
  "Biến x trong hàm là biến local, chỉ có phạm vi trong hàm. Biến x toàn cục không đổi nên in ra 8."),

S("q3", 1, 2, "Đoạn code sau in ra gì?" + C(`x = 8
def increment():
    global x
    x = 6
    x = x + 1
increment()
print(x)`),
  ["7", "8", "6", "Lỗi cú pháp"],
  "Từ khóa `global x` cho phép hàm thay đổi biến toàn cục: x = 6, rồi x = 7, nên in ra 7."),

S("q65", 1, 3, "Đoạn code sau cho kết quả gì?" + C(`x = 8
def increment():
    x = x + 1
increment()
print(x)`),
  ["Báo lỗi UnboundLocalError vì x trong hàm là biến local chưa được gán giá trị", "In ra 9", "In ra 8", "In ra 1"],
  "Phép gán `x = ...` trong hàm làm x thành biến local; vế phải đọc x trước khi gán nên Python báo lỗi. Muốn sửa biến toàn cục phải khai báo `global x`."),

S("q66", 1, 1, "Muốn thay đổi giá trị một biến toàn cục từ bên trong hàm, ta làm thế nào?",
  ["Khai báo `global <tên biến>` trong hàm trước khi gán", "Khai báo `static <tên biến>` trong hàm", "Đặt tên biến bằng chữ in hoa", "Truyền biến bằng từ khóa `ref`"],
  "Biến khai báo trong hàm mặc định là local; dùng `global x` để hàm truy xuất và gán biến x toàn cục."),

S("q4", 1, 3, "Cho hàm:" + C(`def lastItem(m, n=0):
    last = 0
    for i in range(1, m+n, 1):
        last = i
    return last
x = lastItem(8)
print("x = {0}".format(x))`) + "Kết quả in ra là gì?",
  ["x = 7", "x = 8", "x = 0", "x = {0}"],
  "n là tham số mặc định = 0 nên range(1, 8) chạy i = 1..7 (cận trên bị loại trừ). last cuối cùng bằng 7."),

S("q67", 1, 3, "Với hàm `lastItem(m, n=0)` như sau, lệnh `print(f\"y = {lastItem(8, 2)}\")` in ra gì?" + C(`def lastItem(m, n=0):
    last = 0
    for i in range(1, m+n, 1):
        last = i
    return last`),
  ["y = 9", "y = 10", "y = 8", "y = 7"],
  "Truyền n = 2 thì giá trị mặc định bị ghi đè: range(1, 10) chạy đến 9."),

S("q68", 1, 2, "Khai báo hàm có tham số mặc định nào sau đây là hợp lệ trong Python?",
  ["def lastItem(m, n=0):", "def lastItem(m=0, n):", "def lastItem(m, n:=0):", "def lastItem(m, default n=0):"],
  "Tham số mặc định được gán bằng `=` trong danh sách tham số và phải đứng sau các tham số không có giá trị mặc định."),

// ================= PHẦN 0: ÔN TẬP PYTHON - LIST =================
S("q5", 1, 1, "Đặc điểm nào đúng với List trong Python?",
  ["Là collection lưu trữ các phần tử theo thứ tự, các phần tử có thể thuộc nhiều kiểu dữ liệu khác nhau", "Là mảng chỉ chứa các số nguyên", "Là tập hợp không có thứ tự và không thể thay đổi", "Là từ điển lưu trữ cặp key-value"],
  "Ví dụ `['Java', 1, 'Swift', 2]` hay list lồng `[['React native', 'Ionic', 'Flutter'], [1, 2, 3]]` đều hợp lệ."),

S("q69", 1, 2, "Lệnh nào sau đây tạo ra list `[0, 2]`?",
  ["[i for i in range(4) if i % 2 == 0]", "[i for i in range(4)]", "[0]*2", "list(range(0, 2))"],
  "List comprehension có điều kiện lọc giữ lại số chẵn trong 0..3: [0, 2]. `[i for i in range(4)]` cho [0, 1, 2, 3]."),

S("q70", 1, 1, "Lệnh `list_5 = [6]*3` tạo ra list nào?",
  ["[6, 6, 6]", "[18]", "[6, 3]", "[[6], [6], [6]]"],
  "Toán tử `*` lặp lại các phần tử của list 3 lần."),

M("q71", 1, 2, "Những lệnh nào sau đây đều tạo ra list `[1, 2, 3]`?",
  ["list_1 = [1, 2, 3]", "list_2 = list([1, 2, 3])", "list_3 = [i for i in range(1, 4)]", "list_4 = [1]*3"], 3,
  "`[1]*3` cho [1, 1, 1]."),

S("q72", 1, 1, "Với `my_list = [1, 2, 3, 4]`, lệnh `print(my_list[2])` in ra gì?",
  ["3", "2", "4", "[1, 2]"],
  "Chỉ mục (index) của list bắt đầu từ 0 nên my_list[2] là phần tử thứ ba: 3."),

S("q73", 1, 2, "Hai cách duyệt list sau cho cùng kết quả gì?" + C(`my_list = [1, 2, 3, 4]
for i in my_list:
    print(i, end=' ')
print()
for i in range(len(my_list)):
    print(my_list[i], end=' ')`),
  ["Cả hai dòng đều in 1 2 3 4", "Dòng đầu in 1 2 3 4, dòng sau in 0 1 2 3", "Dòng đầu in 0 1 2 3, dòng sau in 1 2 3 4", "Lỗi vì end=' ' không hợp lệ"],
  "Cách 1 duyệt theo tập hợp (lấy trực tiếp phần tử), cách 2 duyệt theo chỉ mục rồi truy xuất my_list[i]. `end=' '` in cách nhau bằng khoảng trắng thay vì xuống dòng."),

S("q6", 1, 2, "Cho `my_list = ['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']`. Lệnh `my_list[3:6]` trả về gì?",
  ["['Golang', 'C#', 'Java']", "['Perl', 'Ruby', 'Golang']", "['C#', 'Java', 'Swift']", "['Golang', 'C#', 'Java', 'Swift']"],
  "Lấy index 3 đến 5 (cận trên 6 bị loại trừ)."),

S("q7", 1, 2, "Cho `my_list = ['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']`. Lệnh `my_list[-2:]` trả về gì?",
  ["['Java', 'Swift']", "['C#', 'Java']", "['Python', 'Perl']", "['Swift']"],
  "Index âm đếm từ cuối: -2 là 'Java', lấy đến hết list."),

S("q74", 1, 2, "Cho `my_list = ['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']`. Lệnh `my_list[None:1]` trả về gì?",
  ["['Python']", "[]", "['Python', 'Perl']", "Lỗi vì None không phải số"],
  "None ở vị trí start tương đương bỏ trống, tức là bắt đầu từ đầu list: giống `my_list[:1]`."),

S("q75", 1, 2, "Cho `my_list = ['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']`. Lệnh `my_list[4:None]` trả về gì?",
  ["['C#', 'Java', 'Swift']", "['Golang', 'C#', 'Java', 'Swift']", "['C#']", "[]"],
  "None ở vị trí end nghĩa là lấy đến hết list, giống `my_list[4:]`."),

M("q76", 1, 2, "Cho `my_list = ['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']`. Những lệnh nào trả về `['Python', 'Perl']`?",
  ["my_list[:2]", "my_list[0:2]", "my_list[None:2]", "my_list[1:3]"], 3,
  "Ba cách đầu cùng lấy index 0 và 1. `my_list[1:3]` cho ['Perl', 'Ruby']."),

S("q77", 1, 1, "Đoạn code sau in ra gì ở lệnh print cuối?" + C(`list_2 = ["Python", "Angular", "Ruby"]
list_2[1] = "Golang"
print(list_2)`),
  ["['Python', 'Golang', 'Ruby']", "['Golang', 'Angular', 'Ruby']", "['Python', 'Angular', 'Golang']", "Lỗi vì list không cho sửa phần tử"],
  "List cho phép cập nhật giá trị phần tử qua chỉ mục: list_2[1] là phần tử thứ hai."),

S("q8", 1, 3, "Đoạn code sau in ra gì ở hai dòng cuối?" + C(`list_1 = [1, 2, 3, 4]
list_2 = list_1
list_1[0] = 9
list_1[1] = 8
print(list_1)
print(list_2)`),
  ["[9, 8, 3, 4] và [9, 8, 3, 4]", "[9, 8, 3, 4] và [1, 2, 3, 4]", "[1, 2, 3, 4] và [9, 8, 3, 4]", "Lỗi"],
  "`list_2 = list_1` chỉ gán tham chiếu: hai biến cùng trỏ một vùng nhớ nên sửa list_1 thì list_2 cũng thay đổi."),

S("q78", 1, 3, "Đoạn code sau in ra gì ở hai dòng cuối?" + C(`list_1 = [1, 2, 3, 4]
list_2 = list(list_1)
list_1[0] = 9
list_1[1] = 8
print(list_1)
print(list_2)`),
  ["[9, 8, 3, 4] và [1, 2, 3, 4]", "[9, 8, 3, 4] và [9, 8, 3, 4]", "[1, 2, 3, 4] và [1, 2, 3, 4]", "[1, 2, 3, 4] và [9, 8, 3, 4]"],
  "`list(list_1)` tạo một list mới ở vùng nhớ khác, nên thay đổi list_1 không ảnh hưởng list_2. `list_1.copy()` cũng cho kết quả tương tự."),

S("q9", 1, 2, "Muốn tạo bản sao độc lập của `list_1` (sửa list_1 không làm thay đổi list_2), ta dùng lệnh nào?",
  ["list_2 = list(list_1) hoặc list_2 = list_1.copy()", "list_2 = list_1", "list_2 = list_1[]", "list_2 = &list_1"],
  "Phép gán trực tiếp chỉ copy tham chiếu; `list()` và `.copy()` tạo list mới."),

S("q79", 1, 2, "Đoạn code sau in ra gì?" + C(`my_list = ["Python", "Angular", "Ruby"]
my_list.insert(1, "Perl")
print(my_list)`),
  ["['Python', 'Perl', 'Angular', 'Ruby']", "['Perl', 'Python', 'Angular', 'Ruby']", "['Python', 'Angular', 'Ruby', 'Perl']", "['Python', 'Perl', 'Ruby']"],
  "`insert(index, value)` chèn value vào vị trí index, các phần tử phía sau dịch sang phải."),

S("q80", 1, 2, "Đoạn code sau in ra gì?" + C(`my_list = ["Python", "Ruby"]
my_list.append(["Perl", "Golang"])
print(my_list)`),
  ["['Python', 'Ruby', ['Perl', 'Golang']]", "['Python', 'Ruby', 'Perl', 'Golang']", "['Perl', 'Golang', 'Python', 'Ruby']", "Lỗi vì append chỉ nhận một chuỗi"],
  "`append(value)` thêm nguyên đối tượng vào cuối, nên list truyền vào trở thành một phần tử lồng bên trong."),

S("q81", 1, 2, "Đoạn code sau in ra gì?" + C(`my_list = ["Python", "Ruby"]
my_list.extend(["Perl", "Golang"])
print(my_list)`),
  ["['Python', 'Ruby', 'Perl', 'Golang']", "['Python', 'Ruby', ['Perl', 'Golang']]", "['Perl', 'Golang']", "['Python', 'Ruby']"],
  "`extend(value)` bóc từng phần tử của iterable truyền vào và nối vào cuối list."),

S("q10", 1, 2, "Khác biệt giữa `append()` và `extend()` của List là gì?",
  ["`append()` thêm 1 phần tử (kể cả một list) vào cuối; `extend()` thêm từng phần tử của iterable vào cuối", "`append()` thêm nhiều phần tử, `extend()` chỉ thêm 1 phần tử", "Hai phương thức hoàn toàn giống nhau", "`append()` thêm vào đầu, `extend()` thêm vào cuối"],
  "append một list sẽ tạo list lồng nhau; extend thì nối các phần tử."),

S("q82", 1, 3, "Đoạn code sau in ra gì ở hai dòng?" + C(`my_list = ["Python", "Angular", "Ruby"]
print(my_list.__add__(["Perl"]))
print(my_list)`),
  ["['Python', 'Angular', 'Ruby', 'Perl'] và ['Python', 'Angular', 'Ruby']", "['Python', 'Angular', 'Ruby', 'Perl'] ở cả hai dòng", "['Perl', 'Python', 'Angular', 'Ruby'] và ['Python', 'Angular', 'Ruby']", "Lỗi vì __add__ là phương thức ẩn"],
  "`__add__(value)` (tương đương toán tử +) trả về một list mới đã nối, không thay đổi list gốc."),

S("q83", 1, 2, "Đoạn code sau in ra gì ở hai dòng?" + C(`my_list = ["Python", "Angular", "Ruby", "Golang"]
my_list.pop()
print(my_list)
my_list.pop(1)
print(my_list)`),
  ["['Python', 'Angular', 'Ruby'] và ['Python', 'Ruby']", "['Angular', 'Ruby', 'Golang'] và ['Angular', 'Golang']", "['Python', 'Angular', 'Ruby'] và ['Angular', 'Ruby']", "['Python', 'Ruby', 'Golang'] và ['Python', 'Golang']"],
  "`pop()` không tham số xóa phần tử cuối ('Golang'); `pop(1)` xóa phần tử tại index 1 ('Angular')."),

S("q11", 1, 1, "Phương thức `pop()` của List khi không truyền tham số làm gì?",
  ["Xóa và trả về phần tử cuối cùng", "Xóa và trả về phần tử đầu tiên", "Xóa toàn bộ list", "Sắp xếp lại list"],
  "Truyền `pop(index)` thì xóa phần tử tại vị trí index."),

S("q84", 1, 2, "Đoạn code sau in ra gì?" + C(`my_list = ["Python", "Angular", "Ruby", "Angular", "Golang"]
my_list.remove('Angular')
print(my_list)`),
  ["['Python', 'Ruby', 'Angular', 'Golang']", "['Python', 'Ruby', 'Golang']", "['Python', 'Angular', 'Ruby', 'Golang']", "Lỗi vì có hai phần tử 'Angular'"],
  "`remove(value)` chỉ xóa phần tử tìm thấy đầu tiên có giá trị bằng value."),

S("q85", 1, 2, "Với `my_list = [\"Python\", \"Angular\", \"Ruby\"]`, lệnh nào xóa phần tử tại index 1 mà không cần biết giá trị của nó?",
  ["del my_list[1]", "my_list.remove(1)", "my_list.delete(1)", "my_list.pop('Angular')"],
  "`del my_list[1]` hoặc `my_list.pop(1)` xóa theo vị trí; `remove()` xóa theo giá trị."),

S("q86", 1, 1, "Đoạn code sau in ra gì?" + C(`my_list = [3, 9, 7, 9, 5, 9, 8]
print(my_list.count(9))`),
  ["3", "9", "1", "7"],
  "`count(value)` đếm số lần value xuất hiện trong list: số 9 xuất hiện 3 lần."),

S("q87", 1, 2, "Đoạn code sau in ra gì ở hai dòng?" + C(`my_list = [3, 9, 7, 9, 5, 9, 8]
print(my_list.__contains__(2))
print(my_list.__contains__(7))`),
  ["False và True", "True và False", "0 và 1", "False và False"],
  "`__contains__(x)` trả về True/False tùy x có trong list; tương đương toán tử `in`."),

S("q12", 1, 1, "Để kiểm tra phần tử `7` có nằm trong list `my_list` hay không, ta dùng cú pháp nào?",
  ["7 in my_list", "my_list.contains(7)", "my_list.indexOf(7)", "7 exists my_list"],
  "Toán tử `in` trả về True hoặc False (hoặc `my_list.__contains__(7)`)."),

S("q14", 1, 2, "Sự khác nhau giữa `my_list.sort()` và `sorted(my_list)` là gì?",
  ["`sort()` sắp xếp trực tiếp trên list gốc; `sorted()` trả về list mới đã sắp xếp", "`sort()` trả về list mới; `sorted()` sắp xếp trên list gốc", "Cả hai đều trả về list mới", "Cả hai đều thay đổi list gốc và trả về None"],
  "`sorted_list = sorted(my_list_2)` giữ nguyên my_list_2."),

S("q88", 1, 2, "Đoạn code sau in ra gì?" + C(`my_list = [3, 2, 7, 5, 9, 8]
my_list.sort()
my_list.reverse()
print(my_list)`),
  ["[9, 8, 7, 5, 3, 2]", "[8, 9, 5, 7, 2, 3]", "[2, 3, 5, 7, 8, 9]", "[3, 2, 7, 5, 9, 8]"],
  "sort() sắp tăng dần thành [2, 3, 5, 7, 8, 9], reverse() đảo ngược thứ tự thành giảm dần."),

S("q89", 1, 2, "Đoạn code sau in ra gì?" + C(`my_list_2 = [4, 2, 5, 7, 3, 6]
my_list_2.sort(reverse=True)
print(my_list_2)`),
  ["[7, 6, 5, 4, 3, 2]", "[6, 3, 7, 5, 2, 4]", "[2, 3, 4, 5, 6, 7]", "None"],
  "`sort(reverse=True)` sắp xếp giảm dần ngay trên list."),

S("q13", 1, 2, "Đoạn code sau in ra gì?" + C(`my_list = ['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']
print(my_list[::-1])`),
  ["['Swift', 'Java', 'C#', 'Golang', 'Ruby', 'Perl', 'Python']", "['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']", "['Swift']", "Lỗi cú pháp"],
  "Slicing với step = -1 duyệt từ cuối về đầu, trả về list đảo ngược (list gốc không đổi)."),

S("q15", 1, 2, "Lệnh `reverse()` khác `sort(reverse=True)` ở điểm nào?",
  ["`reverse()` chỉ đảo ngược thứ tự hiện có; `sort(reverse=True)` sắp xếp giảm dần theo giá trị", "Hai lệnh luôn cho cùng kết quả", "`reverse()` sắp xếp giảm dần; `sort(reverse=True)` đảo thứ tự hiện có", "`reverse()` trả về list mới; `sort(reverse=True)` không đổi list"],
  "Với [3, 2, 7]: reverse() cho [7, 2, 3], còn sort(reverse=True) cho [7, 3, 2]."),

S("q16", 1, 2, "Đoạn code sau in ra gì ở hai dòng cuối?" + C(`s1 = 'madam'
s_list = list(s1)
print(s_list)
s2 = ''.join(s_list)
print("s2: {0}".format(s2))`),
  ["['m', 'a', 'd', 'a', 'm'] và s2: madam", "['madam'] và s2: madam", "['m', 'a', 'd', 'a', 'm'] và s2: m a d a m", "madam và s2: ['m', 'a', 'd', 'a', 'm']"],
  "`list(string)` tách chuỗi thành list ký tự; `''.join(list)` nối các ký tự lại thành chuỗi."),

S("q90", 1, 1, "Với `matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`, lệnh `print(matrix[1])` in ra gì?",
  ["[4, 5, 6]", "[1, 2, 3]", "2", "[2, 5, 8]"],
  "matrix là list đa chiều; matrix[1] là hàng thứ hai."),

S("q17", 1, 2, "Đoạn code sau in ra gì?" + C(`row = 3
col = 4
matrix = [[0]*col]*row
print(matrix)`),
  ["[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]", "[[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]", "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]", "Lỗi cú pháp"],
  "`[0]*col` tạo một hàng 4 số 0, nhân với row = 3 tạo 3 hàng."),

S("q91", 1, 3, "Đoạn code sau in ra gì?" + C(`matrix = [[0]*4]*3
matrix[0][0] = 1
print(matrix)`),
  ["[[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]]", "[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]", "[[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]]", "Lỗi vì không gán được phần tử"],
  "`[[0]*4]*3` nhân bản tham chiếu của cùng một hàng, nên 3 hàng là cùng một list; sửa một hàng thì cả 3 hàng đều đổi."),

// ================= PHẦN 0: ÔN TẬP PYTHON - CLASS & SERIALIZE =================
S("q18", 1, 1, "Phương thức nào được gọi tự động khi tạo một đối tượng từ class trong Python?",
  ["__init__", "__str__", "__main__", "__del__"],
  "`__init__` là hàm khởi tạo (constructor); `__str__` định nghĩa chuỗi biểu diễn khi in đối tượng."),

S("q92", 1, 2, "Cho class:" + C(`class Product:
    def __init__(self, ProductId, ProductName, Price):
        self.ProductId = ProductId
        self.ProductName = ProductName
        self.Price = Price
    def __str__(self):
        return str(self.ProductId) + " - " + self.ProductName + "-" + str(self.Price)`) + "Lệnh `print(Product(1, \"Coca\", 15))` in ra gì?",
  ["1 - Coca-15", "1 - Coca - 15", "<__main__.Product object at ...>", "Lỗi vì không thể cộng số với chuỗi"],
  "print gọi `__str__`. Các giá trị số được ép sang chuỗi bằng `str()` nên nối chuỗi được."),

S("q93", 1, 2, "Trong phương thức `__str__` của class Product, vì sao phải viết `str(self.ProductId)` và `str(self.Price)`?",
  ["Vì ProductId và Price là số, không thể nối trực tiếp với chuỗi bằng toán tử +", "Vì `__str__` chỉ nhận tham số kiểu chuỗi", "Để làm tròn giá trị số", "Để chuyển giá trị sang kiểu JSON"],
  "Python không tự ép kiểu khi cộng int với str; nếu không dùng str() sẽ gặp TypeError."),

S("q94", 1, 1, "Trong các phương thức của một class Python, tham số đầu tiên `self` đại diện cho gì?",
  ["Chính đối tượng (instance) đang gọi phương thức", "Tên của class", "Lớp cha của class", "Biến toàn cục của module"],
  "Ví dụ `self.ProductId = ProductId` gán thuộc tính cho chính đối tượng đang được khởi tạo."),

S("q95", 1, 2, "Khai báo class `SpecialProduct` kế thừa từ class `Product` trong Python viết như thế nào?",
  ["class SpecialProduct(Product):", "class SpecialProduct extends Product:", "class SpecialProduct : Product", "class SpecialProduct inherits Product:"],
  "Python đặt tên lớp cha trong cặp ngoặc tròn sau tên lớp con."),

S("q96", 1, 2, "Để khai báo một static method trong class Python, ta dùng decorator nào?",
  ["@staticmethod", "@static", "@classmethod_static", "static def"],
  "Static method không nhận `self`, được gọi trực tiếp qua tên lớp, ví dụ `Product.method()`."),

S("q97", 1, 1, "Serialize dữ liệu là gì?",
  ["Chuyển đối tượng trong bộ nhớ thành dạng lưu trữ hoặc truyền được (ví dụ chuỗi JSON ghi ra file)", "Đọc dữ liệu từ file JSON để tạo lại đối tượng", "Sắp xếp dữ liệu theo thứ tự tăng dần", "Mã hóa dữ liệu để bảo mật"],
  "Serialize: đối tượng -> JSON/file. Deserialize: file/JSON -> đối tượng."),

S("q19", 1, 2, "Hàm nào của module `json` chuyển một đối tượng Python (list, dict) thành chuỗi JSON?",
  ["json.dumps()", "json.loads()", "json.load()", "json.parse()"],
  "`dumps` trả về chuỗi; `dump` ghi thẳng vào file; `loads` chuyển chuỗi JSON thành đối tượng; `load` đọc từ file."),

S("q98", 1, 2, "Khác biệt giữa `json.dump(datasets, file)` và `json.dumps(datasets)` là gì?",
  ["`dump` ghi trực tiếp dữ liệu JSON vào đối tượng file; `dumps` trả về chuỗi JSON", "`dump` đọc file; `dumps` ghi file", "`dumps` ghi vào file; `dump` trả về chuỗi", "Hai hàm giống hệt nhau"],
  "Hàm saveJson dùng `json.dump(datasets, file)` trong khối `with open(fileName, \"w\") as file`."),

S("q20", 1, 3, "Trong lệnh Serialize sau, vì sao dùng `item.__dict__`?" + C(`jsonString = json.dumps([item.__dict__ for item in arrData], default=str)`),
  ["Để lấy toàn bộ thuộc tính của đối tượng item dưới dạng dict, vì json không serialize trực tiếp đối tượng của class tự định nghĩa", "Để lấy tên class của item", "Để chuyển item thành chuỗi string", "Để gọi hàm khởi tạo của item"],
  "`__dict__` chứa các biến instance dạng dictionary. Tham số `default=str` chuyển các giá trị không serialize được sang chuỗi."),

S("q99", 1, 2, "Trong lệnh `json.dumps([...], default=str)`, tham số `default=str` có tác dụng gì?",
  ["Chuyển các giá trị không serialize được (như datetime) thành chuỗi thay vì báo lỗi", "Mặc định chỉ ghi kiểu chuỗi", "Bỏ qua các thuộc tính kiểu chuỗi", "Thiết lập bảng mã UTF-8"],
  "Khi gặp kiểu dữ liệu json không hỗ trợ, hàm được truyền vào default (ở đây là str) sẽ được gọi."),

S("q21", 1, 3, "Trong hàm `readData(self, path, ClassName)` của class FileFactory, đối số nào của `json.loads` giúp chuyển JSON trở lại thành các đối tượng của ClassName?",
  ["object_hook=lambda d: ClassName(**d)", "default=str", "indent=4", "ensure_ascii=False"],
  "object_hook nhận từng dict d đọc được và gọi constructor `ClassName(**d)`, với `**d` bung các cặp key-value thành tham số tên."),

S("q100", 1, 2, "Trong hàm `readData` của FileFactory, câu lệnh `if os.path.isfile(path) == False: return []` dùng để làm gì?",
  ["Trả về list rỗng nếu file chưa tồn tại, tránh lỗi khi mở file", "Xóa file nếu tồn tại", "Tạo file mới nếu chưa có", "Kiểm tra file có đúng định dạng JSON"],
  "`os.path.isfile` kiểm tra đường dẫn có phải file đang tồn tại hay không."),

S("q101", 1, 2, "Cho đoạn code:" + C(`datasets = []
datasets.append({"id": 1, "name": "Cocacola", "price": 15})
datasets.append({"id": 2, "name": "Pepsi", "price": 20})
saveJson("dataset.json", datasets)
x = openJson("dataset.json")
print(x[0]["name"])`) + "Biết saveJson ghi list ra file bằng json.dump và openJson đọc lại bằng json.load. Kết quả in ra là gì?",
  ["Cocacola", "Pepsi", "1", "{'id': 1, 'name': 'Cocacola', 'price': 15}"],
  "x là list các dict; x[0] là dict đầu tiên, lấy khóa \"name\"."),

S("q102", 1, 2, "Hàm openJson được viết như sau. Nếu file không tồn tại thì hàm trả về gì?" + C(`def openJson(fileName):
    try:
        with open(fileName, "r") as file:
            datasets = json.load(file)
            return datasets
    except:
        pass`),
  ["None", "List rỗng []", "Chuỗi rỗng ''", "Chương trình dừng với lỗi FileNotFoundError"],
  "Lỗi bị bắt bởi except và lệnh pass không làm gì, hàm kết thúc mà không return nên trả về None."),

S("q103", 1, 2, "Lợi ích của việc mở file bằng `with open(fileName, \"w\") as file:` là gì?",
  ["File tự động được đóng khi ra khỏi khối with, kể cả khi có lỗi", "File được mở ở chế độ chỉ đọc", "Dữ liệu tự động được mã hóa", "Không cần chỉ định tên file"],
  "Cách viết thủ công cần gọi `jsonFile.close()` như trong hàm writeData."),

// ================= 1.1: TRÍ TUỆ NHÂN TẠO VÀ MÁY HỌC =================
S("q22", 1, 1, "Trí tuệ nhân tạo (AI) được hiểu là gì?",
  ["Trí thông minh được thể hiện bằng máy móc, bắt chước các chức năng nhận thức như học tập và giải quyết vấn đề", "Hệ thống tự động hóa mọi công việc văn phòng", "Một loại cơ sở dữ liệu thông minh", "Một ngôn ngữ lập trình mới"],
  "AI trái ngược với trí thông minh tự nhiên của con người, mô phỏng các chức năng 'nhận thức'."),

S("q23", 1, 2, "Máy học (Machine Learning) là gì?",
  ["Môn khoa học phát triển thuật toán và mô hình thống kê để máy tính thực hiện tác vụ dựa vào khuôn mẫu và suy luận mà không cần hướng dẫn cụ thể", "Việc lập trình các quy tắc if-else thật chi tiết cho máy tính", "Công nghệ chế tạo phần cứng máy tính", "Phương pháp lưu trữ dữ liệu trên đám mây"],
  "Hệ thống dùng thuật toán ML xử lý khối lượng lớn dữ liệu quá khứ, xác định khuôn mẫu để dự đoán chính xác hơn."),

S("q104", 1, 1, "Ví dụ nào minh họa đúng cách đào tạo một ứng dụng máy học?",
  ["Lưu trữ hàng triệu ảnh X-quang cùng chẩn đoán tương ứng để huấn luyện ứng dụng chẩn đoán ung thư", "Viết sẵn mọi luật chẩn đoán cho từng trường hợp bệnh", "Nhập thủ công từng ảnh X-quang mới vào phần mềm vẽ", "Mua thêm máy chụp X-quang"],
  "ML học khuôn mẫu từ dữ liệu quá khứ có kết quả tương ứng."),

S("q24", 1, 1, "Học sâu (Deep Learning) xử lý dữ liệu theo cách được lấy cảm hứng từ đâu?",
  ["Bộ não con người", "Máy tính lượng tử", "Cấu trúc của Internet", "Cách hoạt động của động cơ"],
  "Mô hình học sâu nhận diện các hình mẫu phức tạp trong hình ảnh, văn bản, âm thanh, ví dụ mô tả hình ảnh, chép lời file âm thanh."),

S("q25", 1, 1, "Quan hệ bao hàm giữa AI, Machine Learning (ML) và Deep Learning (DL) là gì?",
  ["AI bao trùm ML, ML bao trùm DL", "DL bao trùm ML, ML bao trùm AI", "ML bao trùm AI, AI bao trùm DL", "Ba khái niệm hoàn toàn độc lập"],
  "ML là một phương pháp của AI; DL là một phương thức trong ML."),

M("q105", 1, 1, "Những lĩnh vực nào được nêu là có thể áp dụng máy học?",
  ["Sản xuất", "Chăm sóc sức khỏe và khoa học đời sống", "Dịch vụ tài chính", "Bán lẻ"], 4,
  "Năm lĩnh vực: Sản xuất; Chăm sóc sức khỏe và khoa học đời sống; Dịch vụ tài chính; Bán lẻ; Truyền thông và giải trí."),

S("q106", 1, 2, "Ứng dụng bảo trì dự đoán, kiểm soát chất lượng, quản lý tài sản, chuỗi cung ứng và kho hàng thuộc lĩnh vực nào?",
  ["Sản xuất", "Bán lẻ", "Dịch vụ tài chính", "Truyền thông và giải trí"],
  "Máy học hỗ trợ bảo trì dự đoán, kiểm soát chất lượng, nghiên cứu đổi mới và cải thiện hậu cần trong sản xuất."),

S("q107", 1, 2, "Nguồn dữ liệu nào giúp máy học hỗ trợ bác sĩ chẩn đoán và điều trị trong thời gian thực?",
  ["Dữ liệu sức khỏe từ cảm biến và thiết bị đeo được", "Dữ liệu giao dịch chứng khoán", "Dữ liệu lượt xem trailer phim", "Dữ liệu kho hàng"],
  "Lĩnh vực chăm sóc sức khỏe và khoa học đời sống."),

M("q26", 1, 2, "Trong dịch vụ tài chính, máy học được dùng để làm gì?",
  ["Cải thiện khả năng phân tích rủi ro và quy định", "Phân tích hoạt động thị trường chứng khoán để tìm cơ hội đầu tư", "Đánh giá quỹ phòng hộ, hiệu chỉnh danh mục tài chính", "Thiết kế trailer phim"], 3,
  "Thiết kế trailer và quảng cáo thuộc lĩnh vực truyền thông và giải trí."),

S("q108", 1, 2, "Nhà bán lẻ thường dùng máy học cho mục đích nào?",
  ["Cải thiện dịch vụ khách hàng, quản lý tồn kho, bán hàng gia tăng, tiếp thị đa kênh, dự báo doanh thu và nhu cầu", "Bảo trì dự đoán dây chuyền sản xuất", "Chẩn đoán bệnh từ ảnh X-quang", "Hiệu chỉnh danh mục quỹ phòng hộ"],
  "Lĩnh vực bán lẻ còn dùng máy học dự báo xu hướng tiêu dùng."),

S("q109", 1, 2, "Thiết kế trailer, đề xuất nội dung cá nhân hóa và hợp lý hóa quy trình sản xuất nội dung là ứng dụng máy học của lĩnh vực nào?",
  ["Truyền thông và giải trí", "Bán lẻ", "Sản xuất", "Dịch vụ tài chính"],
  "Các công ty giải trí dùng ML để hiểu đối tượng mục tiêu và cá nhân hóa nội dung."),

S("q27", 1, 2, "Phát biểu nào về quan hệ AI và ML là ĐÚNG?",
  ["Mọi giải pháp ML đều là giải pháp AI, nhưng không phải giải pháp AI nào cũng là ML", "Mọi giải pháp AI đều là ML", "AI và ML là một", "ML không thể xác định mẫu hình trong dữ liệu lớn"],
  "AI là thuật ngữ rộng; ML là một phương pháp của AI."),

S("q110", 1, 2, "Khi so sánh AI và ML về trường hợp sử dụng phù hợp nhất, phát biểu nào đúng?",
  ["AI phù hợp để hoàn thành hiệu quả một tác vụ phức tạp của con người; ML phù hợp để xác định mẫu hình trong tập dữ liệu lớn nhằm giải quyết vấn đề cụ thể", "AI chỉ dùng cho dữ liệu nhỏ; ML chỉ dùng cho robot", "AI phù hợp để xác định mẫu hình dữ liệu; ML phù hợp cho tác vụ phức tạp của con người", "Cả hai chỉ dùng để thay thế cơ sở dữ liệu"],
  "Đây là tiêu chí 'Trường hợp sử dụng phù hợp nhất' trong bảng so sánh của AWS."),

S("q111", 1, 2, "Về phương pháp (Methods), điểm khác nhau giữa AI và ML là gì?",
  ["AI dùng nhiều phương pháp như dựa trên quy tắc, mạng nơ-ron, thị giác máy tính; ML thì chọn và trích xuất tính năng từ dữ liệu thô, gán trọng số để đào tạo mô hình", "AI chỉ dùng mạng nơ-ron; ML chỉ dùng luật if-else", "AI không cần dữ liệu; ML không cần thuật toán", "Không có khác biệt"],
  "Tiêu chí Methods trong bảng so sánh AI và ML."),

S("q112", 1, 2, "Về cách triển khai (Implements), phát biểu nào đúng?",
  ["AI thường được xây dựng sẵn và truy cập qua API; với ML ta đào tạo mô hình mới hoặc có sẵn cho trường hợp cụ thể (cũng có API ML dựng sẵn)", "AI luôn phải tự huấn luyện từ đầu; ML luôn mua sẵn", "Cả AI và ML đều không thể truy cập qua API", "ML chỉ triển khai trên phần cứng chuyên dụng"],
  "Tiêu chí Implements trong bảng so sánh AI và ML."),

S("q113", 1, 2, "Điều kiện tiên quyết khi muốn ứng dụng máy học trong doanh nghiệp là gì?",
  ["Phải có hệ thống quản trị tốt trước và dữ liệu được cấu trúc phù hợp", "Phải mua siêu máy tính", "Phải thay toàn bộ nhân sự bằng robot", "Phải dùng Deep Learning cho mọi bài toán"],
  "Không nên thần thánh hóa AI/ML; chúng chỉ đóng một vai trò nhất định giúp nhà quản trị ra quyết định nhanh và phù hợp hơn."),

S("q28", 1, 2, "Quan điểm đúng về việc AI/máy học thay thế con người là gì?",
  ["Công nghệ mới tạo ra nhiều ngành nghề mới; AI chỉ thay thế những công việc nhàm chán (STUPID JOB)", "AI sẽ sớm thay thế hoàn toàn con người trong mọi lĩnh vực", "AI không bao giờ ảnh hưởng đến việc làm", "Chỉ nên học AI khi bị buộc phải học"],
  "Ta học để hiểu biết, ứng dụng thực tiễn và thích ứng với sự phát triển của công nghệ."),

S("q29", 1, 1, "Từ lóng 'Lùa gà' trong bối cảnh đào tạo AI/ML chỉ hành vi gì?",
  ["Cố tình tạo nỗi sợ hoang đường để học viên đăng ký học hoặc mua sản phẩm", "Dạy kiến thức không đúng sự thật", "Bán phần mềm độc hại", "Tuyển dụng nhân sự không đủ trình độ"],
  "Một số trung tâm, chuyên gia cố tình tạo nỗi sợ AI thay thế con người để trục lợi."),

// ================= 1.2: PHÂN LOẠI BÀI TOÁN ML =================
S("q30", 1, 1, "Bài toán Classification (phân loại, phân lớp) yêu cầu chương trình làm gì?",
  ["Chỉ ra nhãn (label) hay lớp của một điểm dữ liệu", "Dự đoán một giá trị số thực", "Phân nhóm dữ liệu không có nhãn", "Điền giá trị còn thiếu"],
  "Đây là một trong những bài toán được nghiên cứu và ứng dụng nhiều nhất trong Machine Learning."),

M("q114", 1, 1, "Những bài toán nào là ví dụ của Classification?",
  ["Phân loại nợ xấu ngân hàng", "Phân loại hình ảnh", "Phân loại khách hàng", "Ước lượng giá một căn nhà"], 3,
  "Ước lượng giá nhà ra giá trị thực nên là Regression."),

S("q31", 1, 1, "Bài toán Clustering khác Classification ở điểm nào?",
  ["Clustering phân nhóm toàn bộ dữ liệu thành các nhóm nhỏ dựa trên sự liên quan giữa dữ liệu, không cần biết trước nhãn", "Clustering cần nhãn dữ liệu, Classification thì không", "Clustering dự đoán số, Classification dự đoán chữ", "Hai bài toán hoàn toàn giống nhau"],
  "Ví dụ: phân nhóm khách hàng dựa trên hành vi mua hàng, vị trí địa lý, độ tuổi."),

S("q115", 1, 1, "Phân nhóm khách hàng dựa trên hành vi mua hàng, vị trí địa lý hoặc độ tuổi là bài toán gì?",
  ["Clustering", "Regression", "Machine Translation", "Ranking"],
  "Clustering gom dữ liệu thành các nhóm có liên quan với nhau."),

S("q32", 1, 1, "Bài toán được gọi là Regression (hồi quy) khi nào?",
  ["Khi nhãn không chia thành các nhóm mà là các giá trị thực (có thể vô hạn)", "Khi nhãn được chia thành các nhóm hữu hạn", "Khi không có dữ liệu đầu vào", "Khi cần gom cụm khách hàng"],
  "Ví dụ: ước lượng giá nhà 50m2, 2 phòng ngủ, 1 phòng khách, 1 bếp, gần trường đại học 2km."),

S("q116", 1, 1, "Ước lượng giá một căn nhà khi biết diện tích 50m2, có 2 phòng ngủ, 1 phòng khách, 1 bếp, cách trường đại học 2km là bài toán gì?",
  ["Regression", "Classification", "Clustering", "Completion"],
  "Kết quả là một giá trị thực (giá tiền)."),

S("q33", 1, 2, "Trên sơ đồ chọn thuật toán (cheat-sheet) của scikit-learn, nếu dữ liệu có nhãn, ít hơn 100K mẫu và cần dự đoán một danh mục (predicting a category), ta đi theo nhánh nào?",
  ["Classification (Linear SVC, KNeighbors Classifier, Naive Bayes...)", "Regression (Lasso, Ridge...)", "Clustering (KMeans, GMM...)", "Dimensionality reduction (PCA, Isomap...)"],
  "Dữ liệu có nhãn + dự đoán danh mục -> Classification."),

S("q34", 1, 2, "Trên sơ đồ chọn thuật toán của scikit-learn, nếu cần dự đoán một giá trị số lượng (predicting a quantity) với ít hơn 100K mẫu, ta đi theo nhánh nào?",
  ["Regression (Lasso, ElasticNet, RidgeRegression, SVR...)", "Classification (SVC...)", "Clustering (KMeans...)", "Dimensionality reduction (PCA...)"],
  "Dự đoán số lượng -> Regression."),

S("q117", 1, 2, "Trên sơ đồ chọn thuật toán của scikit-learn, nếu dữ liệu KHÔNG có nhãn và cần dự đoán danh mục, ta đi theo nhánh nào?",
  ["Clustering (KMeans, MiniBatch KMeans, MeanShift, GMM...)", "Classification", "Regression", "Không có thuật toán nào phù hợp"],
  "Không có nhãn thì không thể huấn luyện phân loại có giám sát, ta dùng nhóm gom cụm."),

// ================= 1.2.4: COMPLETION =================
S("q35", 1, 1, "Bài toán Completion là gì?",
  ["Điền những giá trị còn thiếu của một điểm dữ liệu dựa trên mối tương quan giữa các điểm dữ liệu", "Xóa các dòng dữ liệu bị thiếu", "Dịch văn bản sang ngôn ngữ khác", "Dự đoán nhãn phân loại"],
  "Trong thực tế, thu thập toàn bộ thông tin của một điểm dữ liệu thường không khả thi."),

S("q118", 1, 2, "Vì sao các hệ thống thương mại điện tử cần giải pháp Completion?",
  ["Tỉ lệ khách hàng để lại đánh giá rất ít, thông tin khách hàng thường thiếu hoặc nhập đại, nên ra quyết định chỉ dựa trên dữ liệu có sẵn chưa hiệu quả", "Vì dữ liệu thương mại điện tử luôn đầy đủ", "Vì cần dịch đánh giá sang nhiều ngôn ngữ", "Vì khách hàng bắt buộc phải nhập đầy đủ mọi thông tin"],
  "Hệ thống còn phải bỏ bớt yêu cầu nhập liệu vì nếu quá phức tạp người dùng sẽ rời bỏ."),

S("q119", 1, 1, "Hai cách xử lý dữ liệu thiếu (Missing Data) với pandas là gì?",
  ["Lọc dữ liệu bị thiếu (Filtering Out) và điền dữ liệu còn thiếu (Filling In)", "Mã hóa và giải mã dữ liệu", "Chuẩn hóa và chia tỉ lệ", "Sắp xếp và nhóm dữ liệu"],
  "Filtering Out dùng `dropna()`, Filling In dùng `fillna()`."),

S("q120", 1, 1, "Dòng lệnh `from numpy import nan as NA` có tác dụng gì?",
  ["Nạp giá trị nan của numpy và đặt tên ngắn là NA để biểu diễn ô dữ liệu bị thiếu", "Xóa các giá trị NA trong DataFrame", "Cài đặt thư viện numpy", "Đổi tên thư viện numpy thành NA"],
  "Sau đó có thể viết `[1., NA, NA]` để tạo dòng có giá trị thiếu."),

S("q121", 1, 3, "Cho DataFrame:" + C(`data = pd.DataFrame([[1., 6.5, 3.],
                     [1., NA, NA],
                     [NA, NA, NA],
                     [NA, 6.5, 3.]])
cleaned = data.dropna()`) + "DataFrame `cleaned` còn lại những dòng nào?",
  ["Chỉ dòng 0", "Dòng 0, 1 và 3", "Dòng 0 và 3", "Chỉ dòng 2"],
  "`dropna()` mặc định xóa mọi dòng có ít nhất một giá trị NA; chỉ dòng 0 đầy đủ."),

S("q37", 1, 3, "Với cùng DataFrame:" + C(`data = pd.DataFrame([[1., 6.5, 3.],
                     [1., NA, NA],
                     [NA, NA, NA],
                     [NA, 6.5, 3.]])
cleaned2 = data.dropna(how='all')`) + "DataFrame `cleaned2` còn lại những dòng nào?",
  ["Dòng 0, 1 và 3", "Chỉ dòng 0", "Chỉ dòng 2", "Cả 4 dòng"],
  "`how='all'` chỉ xóa dòng mà TẤT CẢ các cột đều NA (dòng 2)."),

S("q36", 1, 1, "Trong pandas, hàm nào dùng để LỌC BỎ các dòng chứa giá trị thiếu?",
  ["data.dropna()", "data.fillna()", "data.remove_na()", "data.delete_missing()"],
  "`dropna()` lọc bỏ; `fillna()` điền giá trị."),

S("q38", 1, 2, "Trong pandas, lệnh nào điền giá trị thiếu bằng giá trị trung bình của từng cột?",
  ["data.fillna(data.mean())", "data.dropna(data.mean())", "data.replace_na(data.mean())", "data.fill(data.mean())"],
  "`data.mean()` tính trung bình từng cột, `fillna` điền vào các ô NA tương ứng."),

S("q122", 1, 3, "Cho DataFrame:" + C(`data = pd.DataFrame([[1., 6.5, 3.],
                     [1., NA, NA],
                     [NA, NA, NA],
                     [NA, 6.5, 3.]])
cleaned = data.fillna(data.mean())`) + "Dòng 2 (toàn NA) của `cleaned` trở thành gì?",
  ["[1.0, 6.5, 3.0]", "[0.0, 0.0, 0.0]", "[0.5, 3.25, 1.5]", "Dòng 2 bị xóa"],
  "Trung bình bỏ qua NA: cột 0 = (1+1)/2 = 1.0, cột 1 = 6.5, cột 2 = 3.0."),

M("q39", 1, 2, "Những bài toán nào liên quan tới Completion?",
  ["Hệ thống khuyến nghị (Recommendation System)", "Xếp hạng (Ranking)", "Truy xuất thông tin (Information Retrieval)", "Khử nhiễu (Denoising)"], 4,
  "Cả bốn bài toán đều liên quan tới Completion."),

S("q123", 1, 1, "Hệ thống khuyến nghị (Recommendation System) là gì?",
  ["Hệ thống lọc thông tin để dự đoán sở thích của người dùng với mặt hàng họ quan tâm, rồi đưa ra đề xuất hợp lý", "Hệ thống lưu trữ đánh giá sản phẩm", "Hệ thống dịch tự động mô tả sản phẩm", "Hệ thống chống gian lận thanh toán"],
  "Ví dụ: YouTube giới thiệu video, Netflix đề xuất phim (Netflix contest), Shopee/Tiki/Amazon gợi ý sản phẩm, Facebook/Zalo gợi ý bạn bè."),

S("q124", 1, 2, "Trong mô hình khuyến nghị ML.Recommend cho website thương mại điện tử, khi khách hàng CHƯA đăng nhập thì hệ thống hiển thị gì?",
  ["Toàn bộ sản phẩm, sản phẩm trong cache hoặc sản phẩm bán chạy", "Danh sách sản phẩm được mô hình gợi ý riêng cho khách", "Trang báo lỗi yêu cầu đăng nhập", "Không hiển thị sản phẩm nào"],
  "Chỉ khi khách đăng nhập, mô hình ML.Recommend mới được dùng (load model) để đưa ra Recommended Products dựa trên Review & Rating."),

M("q125", 1, 2, "Trong quy trình xây dựng mô hình ML.Recommend cho thương mại điện tử, những bước nào thuộc giai đoạn xây dựng mô hình?",
  ["Lọc theo thời gian và làm sạch dữ liệu (Time Filtering, Cleaning Data)", "Chọn thuật toán (Pick Algorithms) và huấn luyện (Train Model)", "Đánh giá, cải thiện (Evaluate and Improve) và lưu mô hình (Save Model)", "Thiết kế logo cho website"], 3,
  "Quy trình: e-Commerce Database -> Class Modeling -> Filtering/Cleaning -> Pick Algorithms -> Train -> Evaluate & Improve -> Save -> Load Model -> Recommend."),

S("q126", 1, 2, "Vì sao nên dùng kỹ thuật xếp hạng (ranking) thay vì chỉ dùng mô hình hồi quy dự đoán xác suất người dùng nhấp vào từng mặt hàng?",
  ["Xếp hạng sắp xếp các mặt hàng để tối đa hóa cơ hội được nhấp hoặc mua, vì mức độ ưu tiên hiển thị ảnh hưởng đến quyết định người dùng", "Vì hồi quy không thể dự đoán xác suất", "Vì xếp hạng không cần dữ liệu", "Vì xếp hạng chỉ dùng cho mạng xã hội"],
  "Ranking (một kỹ thuật học máy hồi quy) hữu ích cho thương mại điện tử, mạng xã hội, hệ thống gợi ý."),

S("q127", 1, 1, "Kỹ thuật xếp hạng (Learning to Rank) xếp hạng các Item bằng cách nào?",
  ["Huấn luyện mô hình để dự đoán thứ hạng của Item này so với Item khác", "Sắp xếp theo thứ tự chữ cái tên Item", "Chọn ngẫu nhiên thứ tự hiển thị", "Xếp theo ngày đăng Item"],
  "Ba phương pháp: Pointwise, Pairwise, Listwise."),

S("q40", 1, 3, "Phương pháp xếp hạng nào xét từng ứng viên đơn lẻ và biến bài toán xếp hạng thành bài toán Hồi quy?",
  ["Pointwise", "Pairwise", "Listwise", "Clustering"],
  "Pointwise: input là một ứng viên, loss so sánh điểm dự đoán s_i với nhãn y_i."),

S("q41", 1, 3, "Phương pháp xếp hạng nào xét từng cặp ứng viên và biến bài toán thành Phân loại nhị phân?",
  ["Pairwise", "Pointwise", "Listwise", "Regression"],
  "Pairwise: input là cặp ứng viên, mô hình học xem ứng viên nào nên xếp trên."),

S("q42", 1, 3, "Phương pháp xếp hạng Listwise có đặc điểm gì?",
  ["Đầu vào là toàn bộ danh sách ứng viên; hàm loss tính đến vị trí của mọi tài liệu được truy xuất (ví dụ DCG)", "Chỉ xét từng ứng viên đơn lẻ", "So sánh từng cặp ứng viên", "Không cần hàm loss"],
  "Listwise tối ưu trực tiếp trên cả danh sách."),

S("q128", 1, 2, "Truy xuất thông tin (Information Retrieval) trong học máy nhằm mục tiêu gì?",
  ["Giúp người dùng tìm thấy thông tin liên quan dựa trên truy vấn hoặc nhu cầu của họ một cách hiệu quả nhất, từ tập dữ liệu lớn phi cấu trúc hoặc bán cấu trúc", "Sao lưu dữ liệu sang ổ cứng khác", "Mã hóa dữ liệu trước khi lưu", "Xóa dữ liệu trùng lặp"],
  "Dữ liệu có thể là văn bản, hình ảnh, nội dung đa phương tiện."),

S("q43", 1, 2, "Khác biệt chính giữa Data Retrieval và Information Retrieval là gì?",
  ["Information Retrieval dùng nhiều mô hình để truy xuất kết quả LIÊN QUAN cho một yêu cầu cụ thể; Data Retrieval chỉ tìm và thu thập dữ liệu từ các nguồn", "Data Retrieval dùng AI, Information Retrieval không dùng AI", "Hai khái niệm giống nhau", "Data Retrieval chỉ dùng cho hình ảnh, Information Retrieval chỉ dùng cho văn bản"],
  "Information Retrieval dùng được khi có truy vấn do con người tạo ra: thu thập thông tin trên web, trả lời câu hỏi..."),

S("q129", 1, 2, "Tesseract là công cụ nhận dạng ký tự quang học (OCR) mã nguồn mở. Khử nhiễu ảnh bằng máy học giúp gì cho Tesseract?",
  ["Tăng độ chính xác của OCR khi đọc văn bản từ ảnh bị nhiễu", "Tăng độ phân giải màn hình", "Dịch văn bản trong ảnh sang ngôn ngữ khác", "Nén ảnh để giảm dung lượng"],
  "Đây là ví dụ của bài toán khử nhiễu (denoising) thuộc nhóm Completion."),

M("q44", 1, 3, "Bài toán khử nhiễu (Denoising) được ứng dụng trong những trường hợp nào?",
  ["Khử nhiễu hình ảnh để tăng độ chính xác OCR", "Khử nhiễu dữ liệu tài chính, mã hóa tự động khử nhiễu để phân tích rủi ro tín dụng", "Dự báo chỉ số thị trường chứng khoán bằng mô hình khử nhiễu Fourier và học sâu chuỗi thời gian", "Tăng tốc độ kết nối mạng Internet"], 3,
  "Ba ứng dụng được nêu: OCR, tài chính/rủi ro tín dụng, dự báo chứng khoán."),

// ================= 1.2.5: MACHINE TRANSLATION =================
S("q45", 1, 1, "Dịch máy (Machine Translation) là gì?",
  ["Quá trình dùng trí tuệ nhân tạo để tự động dịch văn bản từ ngôn ngữ này sang ngôn ngữ khác mà không cần sự tham gia của con người", "Dịch văn bản bằng cách thuê người nước ngoài", "Chuyển định dạng file từ PDF sang Word", "Dịch chuyển dữ liệu giữa các máy chủ"],
  "Dịch máy hiện đại còn phân tích mọi thành phần văn bản và cách các từ ảnh hưởng đến nhau."),

S("q130", 1, 2, "Điểm khác của phương pháp dịch máy hiện đại so với cách dịch bám sát bản gốc là gì?",
  ["Phân tích mọi thành phần của văn bản và nhận biết cách các từ ảnh hưởng đến nhau", "Dịch từng từ một theo từ điển", "Chỉ dịch được tiếng Anh", "Luôn cần biên dịch viên dịch trước"],
  "Mục tiêu là truyền đạt đầy đủ ý nghĩa văn bản gốc bằng ngôn ngữ đích."),

M("q46", 1, 2, "Những đóng góp của Machine Translation là gì?",
  ["Hỗ trợ dịch tự động", "Tốc độ và khối lượng", "Nhiều lựa chọn ngôn ngữ", "Dịch vụ dịch tiết kiệm chi phí"], 4,
  "Bốn đóng góp được nêu đều đúng."),

S("q131", 1, 2, "Đóng góp 'Hỗ trợ dịch tự động' của dịch máy được thể hiện như thế nào?",
  ["Dịch máy tạo điểm khởi đầu: hệ thống quản lý dịch thuật chạy bản dịch tự động rồi gửi cho biên dịch viên chỉnh sửa", "Dịch máy thay thế hoàn toàn biên dịch viên", "Dịch máy chỉ chạy khi không có mạng", "Dịch máy chỉ dùng cho tài liệu dưới 100 từ"],
  "Nhiều hệ thống quản lý dịch thuật tích hợp một hoặc nhiều mô hình dịch máy vào quy trình."),

S("q132", 1, 2, "Các nhà cung cấp dịch vụ dịch máy lớn thường hỗ trợ khoảng bao nhiêu ngôn ngữ?",
  ["Từ 50 đến hơn 100 ngôn ngữ", "Từ 2 đến 5 ngôn ngữ", "Đúng 10 ngôn ngữ", "Hơn 10.000 ngôn ngữ"],
  "Dịch đồng thời nhiều ngôn ngữ hữu ích cho phát hành sản phẩm toàn cầu và cập nhật tài liệu."),

S("q133", 1, 2, "Ví dụ nào minh họa đóng góp 'Dịch vụ dịch tiết kiệm chi phí' của dịch máy?",
  ["Tích hợp dịch máy với hệ thống quản lý nội dung để tự động gắn thẻ, sắp xếp nội dung trước khi dịch sang ngôn ngữ khác", "Thuê thêm nhiều biên dịch viên", "Dịch từng tài liệu bằng tay để đảm bảo chính xác", "Chỉ dịch tiêu đề tài liệu"],
  "Ít sự tham gia của con người hơn giúp giảm cả chi phí và thời gian trả dự án."),

S("q134", 1, 2, "Đóng góp 'Tốc độ và khối lượng' của dịch máy KHÔNG bao gồm nội dung nào?",
  ["Luôn cho bản dịch chính xác tuyệt đối không cần kiểm tra", "Dịch hàng triệu từ gần như ngay lập tức", "Dịch lượng lớn dữ liệu như hội thoại thời gian thực, vụ án tố tụng quy mô lớn", "Ghi nhớ các thuật ngữ liên quan cho ứng dụng trong tương lai"],
  "Dịch máy cung cấp bản dịch cơ bản nhưng có giá trị; vẫn cần biên dịch viên chỉnh sửa khi cần."),

S("q47", 1, 3, "Dịch vụ Amazon Translate nhận dữ liệu đầu vào từ đâu?",
  ["Tài liệu lưu trên Amazon S3 hoặc văn bản (Text)", "Chỉ âm thanh (Audio)", "Chỉ hình ảnh (Image)", "Chỉ video"],
  "Mô hình Amazon Translate: input là Amazon S3 (tài liệu UTF-8) hoặc Text."),

S("q48", 1, 3, "Trong kiến trúc Google Translate, thành phần nào đảm nhận việc dịch văn bản chính?",
  ["Neural Machine Translation (NMT)", "Handwriting OCR", "Scene Text OCR", "Text-to-Speech Synthesis"],
  "NMT (dịch máy nơ-ron) là lõi xử lý văn bản."),

S("q49", 1, 3, "Trong kiến trúc Google Translate, thành phần 'Handwriting OCR' có chức năng gì?",
  ["Nhận dạng chữ viết tay", "Chuyển văn bản thành giọng nói", "Nhận dạng văn bản trong ảnh chụp từ camera", "Dịch giọng nói trực tiếp"],
  "Scene Text OCR nhận diện chữ trong ảnh; Speech Recognition nhận diện giọng nói; Text-to-Speech đọc kết quả."),

// ================= 1.3: MÁY HỌC TRONG PHÂN TÍCH KINH DOANH =================
S("q135", 1, 1, "Phân tích kinh doanh giúp nhà quản lý điều gì?",
  ["Phác họa tình hình phát triển kinh tế, nắm bắt điểm mạnh, điểm yếu để định hướng tương lai doanh nghiệp", "Thay thế toàn bộ bộ phận kế toán", "Thiết kế giao diện phần mềm", "Tự động tuyển dụng nhân sự"],
  "Đây là công việc quan trọng, ảnh hưởng đến sự thành công hay thất bại của tổ chức kinh doanh."),

S("q136", 1, 2, "Ứng dụng công nghệ trong phân tích kinh doanh đem lại lợi ích gì?",
  ["Độ chính xác cao, đánh giá toàn diện, giúp công ty kiểm soát khối dữ liệu khổng lồ và xác định giải pháp cần thiết", "Loại bỏ hoàn toàn nhu cầu thu thập dữ liệu", "Giảm số lượng khách hàng", "Không cần nguồn dữ liệu"],
  "Phân tích kinh doanh cần phương tiện thông tin và nguồn dữ liệu để quá trình phân tích nhanh chóng, chuẩn xác."),

M("q51", 1, 2, "Những công cụ nào là công cụ phân tích kinh doanh (Business Analytics Tools) phổ biến?",
  ["Microsoft Power BI", "Tableau", "Qlik", "Apache Spark"], 4,
  "Danh sách gồm: Power BI, Tableau, Qlik, Domo, Oracle Analytics Cloud, Looker, Apache Spark, JMP PRO."),

S("q137", 1, 2, "Công cụ nào sau đây KHÔNG nằm trong nhóm công cụ phân tích kinh doanh phổ biến (Power BI, Tableau, Qlik, Domo, Oracle Analytics Cloud, Looker, Apache Spark, JMP PRO)?",
  ["Adobe Premiere", "Looker", "Domo", "JMP PRO"],
  "Adobe Premiere là phần mềm dựng video."),

S("q138", 1, 2, "Hai hình thức triển khai máy học trong phân tích kinh doanh là gì?",
  ["Dịch vụ riêng cho từng công ty (Private service) và dịch vụ đám mây (Cloud service)", "Dịch vụ miễn phí và dịch vụ trả phí", "Cài trên điện thoại và cài trên máy in", "Dịch vụ offline và dịch vụ fax"],
  "Ứng dụng ML trong BA có thể triển khai riêng cho doanh nghiệp hoặc dùng dịch vụ cloud."),

S("q50", 1, 2, "Học máy trong phân tích giúp các nhà phân tích kinh doanh theo hai cách nào?",
  ["Providing analytics-driven insights và Boosting analyst productivity", "Tự động ra mọi quyết định và cắt giảm nhân viên", "Giảm chi phí phần cứng và tăng tốc độ mạng", "Viết báo cáo và trả lời email thay con người"],
  "1. Cung cấp thông tin chi tiết dựa trên phân tích. 2. Tăng năng suất của nhà phân tích."),

S("q139", 1, 2, "'Providing analytics-driven insights' nghĩa là gì?",
  ["Kết quả do ML tạo ra hoặc phân tích dự đoán được lấy từ dữ liệu và điều khiển bởi phân tích, không dựa trên trải nghiệm của con người", "Nhà phân tích tự đưa ra nhận định dựa trên kinh nghiệm", "Tăng số giờ làm việc của nhà phân tích", "Mua thêm công cụ báo cáo"],
  "Insight được rút ra từ dữ liệu."),

S("q140", 1, 2, "'Boosting analyst productivity' nghĩa là gì?",
  ["Các khả năng do ML hỗ trợ trong nền tảng phân tích hiện đại giúp rút ngắn thời gian từ lấy dữ liệu đến ra quyết định", "Thay thế nhà phân tích bằng phần mềm", "Tăng lương cho nhà phân tích", "Cung cấp dữ liệu thô cho nhà phân tích"],
  "Tăng năng suất của nhà phân tích."),

S("q141", 1, 2, "Khi thảo luận ưu điểm của máy học trong lĩnh vực kinh tế, kinh doanh, quản lý, tài chính, phần ưu điểm tập trung trả lời câu hỏi nào?",
  ["Why use machine learning with analytics?", "How to install Python?", "What is a database?", "Who invented AI?"],
  "Ưu điểm cần chỉ ra lý do nên kết hợp máy học với phân tích."),
];
module.exports = QUESTIONS_C1;
