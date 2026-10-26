// ============================================================================
// CHƯƠNG 3: MySQL Interaction (MLBA)
// Soạn dựa trên Slide 05: Dữ liệu - MySQL Interaction
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c3-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c3-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C3 = [
// ================= 3.1 CÀI ĐẶT MYSQL =================
S("q1", 3, 1, "Cổng (Port) mặc định của MySQL Server khi cài đặt là bao nhiêu?",
  ["3306", "33060", "80", "8080"],
  "Slide 05: Cổng TCP/IP mặc định của MySQL là 3306. (33060 là X Protocol Port)."),

S("q2", 3, 2, "Trong quá trình cài đặt MySQL, phương thức xác thực nào được khuyến nghị sử dụng cho MySQL 8?",
  ["Use Strong Password Encryption for Authentication (RECOMMENDED)", "Use Legacy Authentication Method (Retain MySQL 5.x Compatibility)", "No Authentication", "Windows Authentication"],
  "Slide 05: Khuyến nghị dùng Strong Password Encryption cho bảo mật tốt hơn với MySQL 8."),

S("q3", 3, 2, "Khi cấu hình tài khoản trong MySQL, tài khoản 'root' được gán vai trò gì?",
  ["Toàn quyền quản trị (Quản trị viên cao nhất)", "Chỉ đọc dữ liệu", "Chỉ ghi dữ liệu", "Không có quyền gì"],
  "Slide 05: Root account là tài khoản quản trị cao nhất của MySQL."),

S("q4", 3, 2, "Trong slide cài đặt, User 'obama' được gán Role là gì?",
  ["DB Admin", "DB User", "Read Only", "Guest"],
  "Slide 05: User obama được gán Role DB Admin."),

// ================= 3.2 SỬ DỤNG MYSQL WORKBENCH =================
S("q5", 3, 1, "Để tạo một cơ sở dữ liệu mới trong MySQL Workbench, ta sử dụng lệnh SQL nào?",
  ["CREATE SCHEMA `ten_database`; hoặc CREATE DATABASE `ten_database`;", "CREATE TABLE `ten_database`;", "NEW DATABASE `ten_database`;", "INSERT INTO `ten_database`;"],
  "Slide 05: Tạo CSDL (Schema) bằng lệnh `CREATE SCHEMA`."),

S("q6", 3, 2, "Câu lệnh SQL nào được sử dụng để tạo bảng 'student' với các cột ID (tự tăng), Code, Name?",
  ["CREATE TABLE `student` ( `ID` INT NOT NULL AUTO_INCREMENT, `Code` VARCHAR(45) NULL, `Name` VARCHAR(45) NULL, PRIMARY KEY (`ID`))", "CREATE TABLE `student` ( `ID` INT, `Code` VARCHAR(45), `Name` VARCHAR(45) )", "INSERT INTO `student` (ID, Code, Name)", "ALTER TABLE `student` ADD (ID, Code, Name)"],
  "Slide 05 (Apply SQL Script): Lệnh tạo bảng có ID tự tăng (AUTO_INCREMENT) và khóa chính (PRIMARY KEY)."),

S("q7", 3, 2, "Trong câu lệnh INSERT, để chèn một dòng dữ liệu mới vào bảng, cú pháp nào sau đây là đúng?",
  ["INSERT INTO `student` (`Code`, `Name`) VALUES ('1001', 'Nguyen Van Teo')", "INSERT INTO `student` (Code, Name) VALUES ('1001', 'Nguyen Van Teo')", "ADD INTO `student` (Code, Name) VALUES ('1001', 'Nguyen Van Teo')", "UPDATE `student` SET Code='1001', Name='Nguyen Van Teo'"],
  "Slide 05 (Create): `INSERT INTO `studentmanagement`.`student` (`Code`, `Name`) VALUES ('1001', 'Nguyen Van Teo');`"),

S("q8", 3, 2, "Để đọc toàn bộ dữ liệu từ bảng 'student' trong MySQL, ta dùng câu lệnh nào?",
  ["SELECT * FROM student", "SELECT ALL student", "READ student", "GET * FROM student"],
  "Slide 05 (Read): `SELECT * FROM studentmanagement.student;`"),

S("q9", 3, 3, "Để cập nhật tuổi (Age) của học viên có ID = 2 thành 22, ta dùng câu lệnh SQL nào?",
  ["UPDATE `student` SET `Age` = '22' WHERE (`ID` = '2');", "UPDATE `student` SET `Age` = '22';", "UPDATE `student` WHERE `ID` = '2' SET `Age` = '22';", "INSERT INTO `student` SET `Age` = '22' WHERE `ID` = '2';"],
  "Slide 05 (Update): Cần có mệnh đề WHERE để chỉ định dòng cần cập nhật, tránh cập nhật toàn bộ bảng."),

S("q10", 3, 3, "Để xóa học viên có ID = 5 khỏi bảng 'student', ta dùng câu lệnh nào?",
  ["DELETE FROM `student` WHERE (`ID` = '5');", "DELETE `student` WHERE (`ID` = '5');", "DROP `student` WHERE (`ID` = '5');", "REMOVE FROM `student` WHERE (`ID` = '5');"],
  "Slide 05 (Delete): Sử dụng `DELETE FROM table_name WHERE condition`."),

S("q11", 3, 2, "Trong MySQL Workbench, tính năng 'Data Export' dùng để làm gì?",
  ["Xuất cấu trúc bảng và dữ liệu ra file SQL (Dump)", "Xuất dữ liệu ra file Excel", "Nhập dữ liệu từ file CSV", "Sao lưu toàn bộ ổ cứng"],
  "Slide 05: Data Export xuất dữ liệu (Dump Structure and Data) ra file `.sql`."),

S("q12", 3, 3, "Khi thực hiện Data Import trong MySQL Workbench, ta cần chọn file có định dạng gì?",
  ["File .sql chứa kịch bản (Dump)", "File .csv", "File .xlsx", "File .txt"],
  "Slide 05: Data Import sử dụng file dump `.sql` để phục hồi dữ liệu."),

// ================= 3.3 LẬP TRÌNH TƯƠNG TÁC MYSQL =================
S("q13", 3, 2, "Thư viện Python nào được sử dụng để kết nối với MySQL Server trong bài học?",
  ["mysql-connector-python", "mysql-python", "MySQLdb", "pymysql"],
  "Slide 05 (Code): `import mysql.connector`."),

S("q14", 3, 2, "Để kết nối tới MySQL trong đoạn code Python, ta cần cung cấp những thông tin cấu hình nào trong `app.config`?",
  ["MYSQL_DATABASE_USER, MYSQL_DATABASE_PASSWORD, MYSQL_DATABASE_DB, MYSQL_DATABASE_HOST", "MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, MYSQL_HOST", "DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME", "DB_USER, DB_PASS, DB_NAME, DB_HOST"],
  "Slide 05 (Code mẫu Flask): `app.config['MYSQL_DATABASE_USER'] = 'root'`, `app.config['MYSQL_DATABASE_PASSWORD'] = '@Obama123'`, v.v."),

S("q15", 3, 2, "Hàm nào được gọi để thực thi một câu lệnh SQL trong Python?",
  ["cursor.execute(sql)", "cursor.query(sql)", "cursor.run(sql)", "cursor.commit(sql)"],
  "Slide 05: `cursor.execute(sql)` dùng để thực thi câu lệnh SQL."),

S("q16", 3, 2, "Để lấy toàn bộ kết quả của câu lệnh SELECT, ta dùng phương thức nào?",
  ["cursor.fetchall()", "cursor.fetchone()", "cursor.fetchmany()", "cursor.getall()"],
  "Slide 05: `cursor.fetchall()` lấy tất cả các dòng kết quả."),

S("q17", 3, 2, "Để lấy 4 dòng đầu tiên trong kết quả truy vấn, ta dùng phương thức nào?",
  ["cursor.fetchmany(4)", "cursor.fetchall(4)", "cursor.fetchone(4)", "cursor.fetch(4)"],
  "Slide 05: `cursor.fetchmany(4)` lấy 4 dòng."),

S("q18", 3, 2, "Để chỉ lấy 1 dòng kết quả đầu tiên của câu lệnh SELECT, ta dùng phương thức nào?",
  ["cursor.fetchone()", "cursor.fetchall()", "cursor.fetchmany(1)", "cursor.getone()"],
  "Slide 05: `cursor.fetchone()` lấy 1 dòng."),

S("q19", 3, 2, "Câu lệnh SQL nào sau đây dùng để sắp xếp kết quả theo tên (Name) giảm dần?",
  ["SELECT * FROM student ORDER BY name DESC", "SELECT * FROM student ORDER BY name ASC", "SELECT * FROM student SORT BY name DESC", "SELECT * FROM student ORDER name DESC"],
  "Slide 05: `ORDER BY name DESC` dùng để sắp xếp giảm dần (Descending)."),

S("q20", 3, 3, "Để phân trang (lấy 4 bản ghi, bắt đầu từ vị trí thứ 3) trong MySQL, ta dùng câu lệnh nào?",
  ["SELECT * FROM student LIMIT 4 OFFSET 3", "SELECT * FROM student LIMIT 3 OFFSET 4", "SELECT * FROM student OFFSET 4 LIMIT 3", "SELECT * FROM student PAGE 3 LIMIT 4"],
  "Slide 05: `LIMIT 4 OFFSET 3` lấy 4 dòng, bỏ qua 3 dòng đầu tiên."),

S("q21", 3, 2, "Để chèn một học viên mới vào bảng trong Python, ta sử dụng câu lệnh nào?",
  ["sql=\"insert into student (code,name) values (%s,%s)\"; val=('SV01','Thanh Tran'); cursor.execute(sql,val)", "sql=\"insert into student values (%s,%s)\"; val=('SV01','Thanh Tran'); cursor.execute(sql,val)", "sql=\"insert into student (code,name) values (?,?)\"; val=('SV01','Thanh Tran'); cursor.execute(sql,val)", "cursor.insert('student', ('SV01','Thanh Tran'))"],
  "Slide 05 (Insert One): Sử dụng `%s` làm placeholder để tránh SQL Injection, sau đó truyền `val` vào `execute`."),

S("q22", 3, 3, "Phương thức nào được sử dụng để chèn NHIỀU dòng dữ liệu cùng lúc vào bảng?",
  ["cursor.executemany(sql, val)", "cursor.execute(sql, val)", "cursor.insert_many(sql, val)", "cursor.add_many(sql, val)"],
  "Slide 05 (Insert Many): `cursor.executemany(sql,val)` được dùng để chèn nhiều bản ghi."),

S("q23", 3, 3, "Sau khi thực hiện lệnh INSERT, UPDATE hoặc DELETE, ta cần gọi hàm gì để lưu thay đổi vào cơ sở dữ liệu?",
  ["conn.commit()", "conn.save()", "conn.close()", "conn.update()"],
  "Slide 05: Phải gọi `conn.commit()` để xác nhận thay đổi, nếu không dữ liệu sẽ không được lưu."),

S("q24", 3, 3, "Tại sao ta nên sử dụng câu lệnh tham số hóa `sql=\"update student set name=%s where Code=%s\"` thay vì nối chuỗi trực tiếp `sql=\"update student set name='...' where Code='...'\"`?",
  ["Để phòng chống lỗi SQL Injection (tấn công chèn mã SQL độc hại)", "Để câu lệnh chạy nhanh hơn", "Để code ngắn gọn hơn", "Không có sự khác biệt"],
  "Slide 05 (Update SQL Injection Student): Việc dùng `%s` (parameterized query) giúp ngăn chặn SQL Injection."),

S("q25", 3, 3, "Trong thư viện PyQt6, để hiển thị dữ liệu dạng bảng, ta sử dụng widget nào?",
  ["QTableWidget", "QListWidget", "QComboBox", "QTextEdit"],
  "Slide 05 (PyQt6): Sử dụng QTableWidget để hiển thị bảng dữ liệu."),

S("q26", 3, 3, "Đoạn code sau thực hiện việc gì?\n`df = self.connector.queryDataset(\"select * from customer\")`",
  ["Lấy toàn bộ dữ liệu bảng customer và trả về dưới dạng DataFrame", "Chỉ đếm số dòng trong bảng customer", "Xóa bảng customer", "Chèn dữ liệu vào bảng customer"],
  "Slide 05 (Connector.py): Hàm `queryDataset` thực hiện truy vấn và trả về Pandas DataFrame."),

S("q27", 3, 3, "Trong class `Connector` (PyQt6), phương thức `connect()` được sử dụng để làm gì?",
  ["Tạo kết nối đến MySQL Server bằng thông tin cấu hình (host, port, user, password)", "Đóng kết nối CSDL", "Thực thi câu lệnh SQL", "Lấy dữ liệu từ bảng"],
  "Slide 05 (Connector.py): `connect()` thiết lập kết nối CSDL."),

S("q28", 3, 3, "Trong PyQt6, để vẽ biểu đồ tròn (Pie chart) hiển thị tỷ lệ giới tính, ta sử dụng hàm nào của Matplotlib?",
  ["ax.pie()", "ax.plot()", "ax.bar()", "ax.scatter()"],
  "Slide 05 (ChartVisualizationEx.py): `ax.pie(dfGender[columnStatistic], ...)` được dùng để vẽ biểu đồ tròn."),

S("q29", 3, 3, "Để vẽ biểu đồ đường (Line chart) hiển thị phân phối độ tuổi, ta sử dụng hàm nào của thư viện Seaborn?",
  ["sns.lineplot()", "sns.pieplot()", "sns.barplot()", "sns.histplot()"],
  "Slide 05 (ChartVisualizationEx.py): `sns.lineplot(data=dfAges, x=columnLabel, y=columnStatistic, ...)` dùng để vẽ biểu đồ đường."),

S("q30", 3, 3, "Trong đoạn code lọc dữ liệu theo độ tuổi: `dfAges = df[(df.Age >= fromAge) & (df.Age <= toAge)]`, `fromAge` và `toAge` nhận giá trị từ đâu?",
  ["Từ người dùng nhập vào qua `QLineEdit`", "Từ cơ sở dữ liệu", "Từ biến toàn cục", "Từ một file text"],
  "Slide 05: Giá trị được lấy từ `self.lineEditFromAge.text()` và `self.lineEditToAge.text()`."),

S("q31", 3, 2, "Trong SQL, từ khóa `DISTINCT` được sử dụng để làm gì?",
  ["Loại bỏ các bản ghi trùng lặp trong kết quả trả về", "Sắp xếp kết quả", "Đếm số lượng bản ghi", "Nhóm các bản ghi"],
  "Slide 05 (ChartVisualizationEx.py): `SELECT distinct customer_spend_score.*, customer.Age...` dùng để lấy các bản ghi duy nhất."),

S("q32", 3, 2, "Khi tạo bảng mới trong MySQL Workbench, để đặt cột ID tự động tăng giá trị mỗi khi thêm dòng mới, ta chọn thuộc tính nào?",
  ["Auto Increment", "Primary Key", "Not Null", "Unique"],
  "Slide 05: Thuộc tính `Auto Increment` (AI) giúp ID tự tăng."),

S("q33", 3, 3, "Để lấy một kết nối MySQL trong Python thông qua Flask-MySQL, ta thường dùng câu lệnh nào?",
  ["conn = mysql.connect()", "conn = mysql.get_connection()", "conn = mysql.connect_db()", "conn = mysql.open()"],
  "Slide 05: Sử dụng `conn = mysql.connect()` sau khi đã khởi tạo `mysql.init_app(app)`."),

S("q34", 3, 3, "Để đóng kết nối cơ sở dữ liệu sau khi xử lý xong trong Python, ta dùng lệnh nào?",
  ["conn.close()", "conn.disconnect()", "conn.stop()", "conn.end()"],
  "Slide 05: `conn.close()` và `cursor.close()` được gọi trong khối `finally` để đóng kết nối."),
];
module.exports = QUESTIONS_C3;