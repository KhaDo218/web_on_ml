// ============================================================================
// CHƯƠNG 3: MySQL Interaction (MLBA)
// Nguồn: Slide 05 - Dữ liệu - MySQL Interaction
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// C(code) tạo khối code nhiều dòng.
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c3-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c3-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });
const C = (code) => "\n```\n" + code + "\n```\n";

// Đoạn khung chung của các ví dụ Flask-MySQL
const FLASK_HEAD = `from flask import Flask, render_template
from flaskext.mysql import MySQL
import mysql.connector
app = Flask(__name__)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = '@Obama123'
app.config['MYSQL_DATABASE_DB'] = 'studentmanagement'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)
conn = mysql.connect()
cursor = conn.cursor()`;

const QUESTIONS_C3 = [
// ================= 3.1 CÀI ĐẶT MYSQL SERVER =================
S("q37", 3, 1, "Bộ cài đặt nào được dùng để cài MySQL Server trên Windows?",
  ["MySQL Installer Community (ví dụ mysql-installer-community-8.0.32.0)", "MySQL Router", "MongoDB Compass", "DB Browser for SQLite"],
  "Tải tại dev.mysql.com/downloads/installer; có thể chọn 'No thanks, just start my download' để tải mà không cần đăng nhập tài khoản Oracle."),

M("q38", 3, 2, "Những sản phẩm nào nằm trong danh sách cài đặt của MySQL Installer Community?",
  ["MySQL Server", "MySQL Workbench", "MySQL Shell, MySQL Router, các Connector (ODBC, C++, J, NET, Python)", "Microsoft Power BI"], 3,
  "Danh sách còn có MySQL for Visual Studio, MySQL Documentation, Samples and Examples."),

S("q1", 3, 1, "Cổng (Port) TCP/IP mặc định của MySQL Server là bao nhiêu?",
  ["3306", "1433", "8080", "27017"],
  "Ở bước Type and Networking, Port = 3306, X Protocol Port = 33060. 1433 là SQL Server, 27017 là MongoDB."),

S("q39", 3, 2, "Ở bước Type and Networking khi cài MySQL 8, X Protocol Port mặc định là bao nhiêu?",
  ["33060", "3306", "6446", "80"],
  "X Protocol dùng cho MySQL Shell/Document Store."),

S("q2", 3, 2, "Khi cài MySQL Server trên máy tính cá nhân để học và phát triển, Config Type nào được chọn?",
  ["Development Computer", "Server Computer", "Dedicated Computer", "Cloud Computer"],
  "Development Computer dùng ít tài nguyên, phù hợp máy cá nhân chạy nhiều ứng dụng khác."),

S("q3", 3, 2, "Phương thức xác thực (Authentication Method) nào được khuyến nghị (RECOMMENDED) khi cài MySQL 8?",
  ["Use Strong Password Encryption for Authentication", "Use Legacy Authentication Method (MySQL 5.x)", "No Password", "Windows Authentication only"],
  "Phương thức mới dùng mã hóa SHA256; Legacy chỉ dùng khi ứng dụng/connector cũ chưa hỗ trợ."),

S("q4", 3, 1, "Ở bước Accounts and Roles, tài khoản `root` có vai trò gì?",
  ["Tài khoản quản trị cao nhất của MySQL Server, phải đặt mật khẩu (MySQL Root Password)", "Tài khoản khách chỉ đọc", "Tài khoản dành cho Windows Service", "Tài khoản tạm sẽ bị xóa sau khi cài"],
  "Ví dụ trong bài: tài khoản root với mật khẩu @Obama123."),

S("q5", 3, 2, "Ở bước Accounts and Roles, nút Add User dùng để làm gì?",
  ["Tạo thêm tài khoản người dùng MySQL và gán vai trò (ví dụ user obama với role DB Admin)", "Thêm người dùng vào Windows", "Đổi mật khẩu root", "Tạo cơ sở dữ liệu mới"],
  "Role DB Admin cho phép quản trị cơ sở dữ liệu với đầy đủ quyền."),

S("q6", 3, 2, "Ở bước Windows Service, tên Windows Service mặc định của MySQL Server 8.0 là gì?",
  ["MySQL80", "MySQLService", "MySQLServer8", "mysqld"],
  "Có thể chọn 'Start the MySQL Server at System Startup' và chạy dưới Standard System Account."),

S("q40", 3, 2, "Ở bước Windows Service, tùy chọn tài khoản chạy dịch vụ nào được khuyến nghị cho đa số trường hợp?",
  ["Standard System Account", "Custom User", "Guest Account", "Root Account"],
  "Custom User chỉ dùng cho kịch bản nâng cao."),

S("q7", 3, 3, "Ở bước Server File Permissions, lựa chọn mặc định là gì?",
  ["Cấp toàn quyền cho user chạy Windows Service và nhóm administrators trên thư mục dữ liệu, các user khác không có quyền", "Cho mọi user toàn quyền thư mục dữ liệu", "Không thay đổi quyền", "Xóa thư mục dữ liệu cũ"],
  "Thư mục dữ liệu nằm tại C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Data."),

M("q41", 3, 2, "Ở bước Apply Configuration (nhấn Execute), MySQL Installer thực hiện những việc nào?",
  ["Ghi file cấu hình, cập nhật Windows Firewall", "Khởi tạo database, khởi động server", "Áp dụng thiết lập bảo mật, tạo tài khoản người dùng", "Cài Visual Studio"], 3,
  "Sau khi tất cả bước có dấu tích xanh, nhấn Finish."),

S("q42", 3, 2, "Ở bước Connect To Server của phần Samples and Examples, cần làm gì?",
  ["Nhập user root và mật khẩu rồi nhấn Check để kiểm tra kết nối", "Nhập địa chỉ email Oracle", "Chọn cổng 80", "Tạo bảng mới"],
  "Credentials hợp lệ thì mới Next để cài dữ liệu mẫu (sakila, world)."),

// ================= 3.2 MYSQL WORKBENCH =================
S("q43", 3, 1, "MySQL Workbench là gì?",
  ["Công cụ đồ họa (GUI) chính thức để thiết kế CSDL, làm việc với đối tượng CSDL, chạy truy vấn và di chuyển dữ liệu của MySQL", "Trình điều khiển kết nối cho Python", "Hệ quản trị CSDL NoSQL", "Thư viện vẽ biểu đồ"],
  "Màn hình Welcome có mục MySQL Connections với dấu (+) để tạo kết nối mới."),

S("q9", 3, 1, "Khi tạo kết nối (Setup New Connection) tới MySQL Server trên cùng máy, Hostname thường là gì?",
  ["127.0.0.1 (localhost)", "0.0.0.0", "192.168.1.1", "mysql.com"],
  "Connection Method: Standard (TCP/IP), Port 3306, Username root."),

M("q44", 3, 2, "Trong hộp thoại Setup New Connection của MySQL Workbench, cần khai báo những thông tin nào?",
  ["Connection Name", "Hostname và Port", "Username (Password có thể lưu bằng Store in Vault)", "Đường dẫn file Excel"], 3,
  "Default Schema có thể để trống. Nhấn Test Connection để kiểm tra trước khi OK."),

S("q45", 3, 1, "Nút nào trong hộp thoại Setup New Connection dùng để kiểm tra thông tin kết nối có đúng không?",
  ["Test Connection", "Configure Server Management", "Store in Vault", "Clear"],
  "Store in Vault dùng để lưu mật khẩu."),

S("q8", 3, 1, "Khi tạo schema mới tên studentmanagement trong MySQL Workbench, câu lệnh SQL nào được sinh ra?",
  ["CREATE SCHEMA `studentmanagement` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;", "NEW DATABASE studentmanagement;", "INSERT SCHEMA studentmanagement;", "MAKE SCHEMA studentmanagement;"],
  "Workbench hiển thị bước Review SQL Script trước khi Apply."),

S("q46", 3, 2, "Đặt tên schema là StudentManagement nhưng Workbench báo schema sẽ được tạo là 'studentmanagement'. Nguyên nhân là gì?",
  ["Server cấu hình lower_case_table_names=1 nên tên schema và bảng được chuyển thành chữ thường", "Workbench lỗi font chữ", "MySQL không cho đặt tên có chữ hoa vì lý do bảo mật", "Do Charset/Collation là utf8"],
  "Đây là thông báo 'Apply Changes to Object' khi tạo schema/bảng."),

S("q47", 3, 2, "Thứ tự thao tác tạo schema hoặc bảng trong MySQL Workbench là gì?",
  ["Khai báo -> Apply -> xem lại script (Review SQL Script) -> Apply -> Finish", "Finish -> Apply -> Review", "Viết code Python -> chạy", "Export -> Import"],
  "Mọi thay đổi trên giao diện đều được chuyển thành script SQL để xem lại trước khi chạy."),

S("q48", 3, 1, "Để tạo bảng mới trong một schema bằng MySQL Workbench, ta làm thế nào?",
  ["Mở schema, nhấn chuột phải vào Tables và chọn Create Table...", "Nhấn chuột phải vào schema và chọn Data Export", "Chọn Server > Startup/Shutdown", "Chọn File > New Model Diagram rồi Export"],
  "Sau đó khai báo Table Name, Charset/Collation, Engine (InnoDB) và các cột."),

S("q10", 3, 2, "Câu lệnh nào tạo bảng student có cột ID là khóa chính và tự động tăng?",
  ["CREATE TABLE `student` (`ID` INT NOT NULL AUTO_INCREMENT, `Code` VARCHAR(45) NULL, `Name` NVARCHAR(45) NULL, PRIMARY KEY (`ID`));", "CREATE TABLE student (ID INT PRIMARY, Code TEXT AUTO);", "NEW TABLE student (ID AUTO_INCREMENT);", "CREATE student TABLE (ID INT KEY);"],
  "Workbench sinh script với ENGINE = InnoDB, DEFAULT CHARACTER SET = utf8."),

S("q35", 3, 2, "Trong lưới khai báo cột của Workbench (PK, NN, UQ, B, UN, ZF, AI, G), cờ nào làm cột tự động tăng giá trị?",
  ["AI (Auto Increment)", "PK (Primary Key)", "NN (Not Null)", "UQ (Unique)"],
  "PK: khóa chính; NN: không null; UQ: duy nhất; UN: unsigned; ZF: zero fill; B: binary; G: generated."),

S("q49", 3, 2, "Trong lưới khai báo cột của Workbench, cờ NN có ý nghĩa gì?",
  ["Not Null: cột bắt buộc phải có giá trị", "No Number: cột không chứa số", "New Name: đổi tên cột", "Next Node: liên kết bảng"],
  "Cột ID khóa chính thường được tick PK, NN, AI."),

S("q50", 3, 1, "Engine lưu trữ mặc định được dùng khi tạo bảng student trong MySQL Workbench là gì?",
  ["InnoDB", "MyISAM", "Memory", "CSV"],
  "InnoDB hỗ trợ giao dịch và khóa ngoại."),

S("q51", 3, 1, "Để xem nhanh dữ liệu của bảng student trong Workbench, ta nhấn chuột phải vào bảng và chọn mục nào?",
  ["Select Rows - Limit 1000", "Table Inspector", "Drop Table", "Truncate Table"],
  "Workbench sinh câu `SELECT * FROM studentmanagement.student;` và hiển thị Result Grid."),

S("q11", 3, 2, "Trong Workbench, nhập dòng mới qua Form Editor (Code = 1001, Name = Nguyen Van Teo) rồi Apply. Script nào được sinh ra?",
  ["INSERT INTO `studentmanagement`.`student` (`Code`, `Name`) VALUES ('1001', 'Nguyen Van Teo');", "UPDATE student SET Code='1001', Name='Nguyen Van Teo';", "ADD student VALUES (1001, Nguyen Van Teo);", "INSERT student (ID, Code, Name) VALUES (NULL);"],
  "Không cần nhập ID vì ID là AUTO_INCREMENT."),

S("q52", 3, 1, "Nhập nhiều dòng trực tiếp trên Result Grid của Workbench xong, cần làm gì để dữ liệu được ghi vào CSDL?",
  ["Nhấn Apply, xem script rồi Apply và Finish", "Nhấn Revert", "Đóng tab truy vấn", "Nhấn Ctrl+S"],
  "Revert hủy các thay đổi chưa áp dụng."),

S("q12", 3, 1, "Câu lệnh nào đọc toàn bộ dữ liệu của bảng student?",
  ["SELECT * FROM student;", "GET * FROM student;", "READ ALL student;", "SHOW DATA student;"],
  "Trong Workbench có thể viết đầy đủ `studentmanagement.student`."),

S("q53", 3, 1, "Câu lệnh nào lấy sinh viên có ID = 1 trong bảng student?",
  ["SELECT * FROM studentmanagement.student WHERE id=1;", "SELECT * FROM studentmanagement.student IF id=1;", "SELECT id=1 FROM studentmanagement.student;", "FIND studentmanagement.student BY id=1;"],
  "Điều kiện lọc đặt sau WHERE."),

S("q13", 3, 2, "Sửa tuổi của sinh viên có ID = 2 thành 22 trên Result Grid rồi Apply. Script nào được sinh ra?",
  ["UPDATE `studentmanagement`.`student` SET `Age` = '22' WHERE (`ID` = '2');", "UPDATE student SET Age = 22;", "MODIFY student Age = 22 WHERE ID = 2;", "INSERT INTO student (Age) VALUES (22);"],
  "Thiếu WHERE sẽ cập nhật toàn bộ bảng."),

S("q14", 3, 2, "Trên Result Grid của Workbench, cách xóa một dòng là gì?",
  ["Chọn dòng, nhấn nút Delete selected rows rồi Apply", "Chọn dòng rồi nhấn Revert", "Nhấn chuột phải vào bảng chọn Truncate Table", "Xóa giá trị của ô ID"],
  "Workbench sinh câu `DELETE FROM ... WHERE (ID = ...)`. Truncate Table xóa toàn bộ dữ liệu bảng."),

S("q54", 3, 2, "Câu lệnh nào xóa sinh viên có Code = '456' khỏi bảng student?",
  ["DELETE FROM student WHERE Code='456'", "DELETE * student WHERE Code='456'", "REMOVE FROM student WHERE Code='456'", "DROP student WHERE Code='456'"],
  "DROP dùng để xóa cả bảng hoặc schema."),

S("q15", 3, 2, "Để sao lưu dữ liệu ra file bằng MySQL Workbench, ta vào menu nào?",
  ["Server > Data Export", "Server > Data Import", "File > Save Script", "Database > Reverse Engineer"],
  "Data Export xuất ra các file dump .sql (ví dụ studentmanagement_student.sql)."),

M("q55", 3, 2, "Ở màn hình Data Export, có những lựa chọn nội dung xuất nào?",
  ["Dump Structure and Data", "Dump Data Only", "Dump Structure Only", "Dump Password Only"], 3,
  "Chọn schema, các bảng cần xuất và kiểu dump."),

S("q56", 3, 2, "Khác biệt giữa 'Export to Dump Project Folder' và 'Export to Self-Contained File' là gì?",
  ["Dump Project Folder xuất mỗi bảng ra một file .sql riêng (cho phép khôi phục chọn lọc); Self-Contained File gom mọi bảng vào một file", "Dump Project Folder chỉ xuất cấu trúc; Self-Contained File chỉ xuất dữ liệu", "Hai lựa chọn giống nhau", "Self-Contained File xuất sang Excel"],
  "Tùy chọn Include Create Schema thêm câu lệnh tạo schema vào file dump."),

S("q57", 3, 2, "Khi Data Export, tick tùy chọn 'Include Create Schema' có tác dụng gì?",
  ["Thêm câu lệnh CREATE SCHEMA vào file dump để khi import có thể tạo lại schema", "Chỉ xuất cấu trúc schema", "Nén file dump", "Tạo bảng mới trong schema hiện tại"],
  "Hữu ích khi khôi phục sang máy chưa có schema."),

S("q16", 3, 2, "Để khôi phục dữ liệu từ file dump .sql trong MySQL Workbench, ta dùng chức năng nào?",
  ["Server > Data Import", "Server > Data Export", "File > Open Model", "Database > Synchronize Model"],
  "Chọn Import from Dump Project Folder hoặc Import from Self-Contained File, chọn schema đích rồi Start Import."),

S("q58", 3, 1, "Sau khi Data Import thành công, muốn danh sách SCHEMAS trong Navigator hiện schema mới, ta làm gì?",
  ["Nhấn nút Refresh (biểu tượng làm mới) trong Navigator", "Khởi động lại máy", "Gỡ cài đặt Workbench", "Chạy Data Export"],
  "Navigator không tự cập nhật ngay sau khi import."),

// ================= 3.3 LẬP TRÌNH TƯƠNG TÁC MYSQL (FLASK) =================
M("q59", 3, 2, "Những lệnh cài đặt nào được dùng cho ví dụ lập trình CRUD MySQL bằng Flask?",
  ["pip install flask", "pip install flask-mysql", "pip install markupsafe==2.0.1", "pip install pyqt-mysql"], 3,
  "Sau đó import: `from flask import Flask, render_template` và `from flaskext.mysql import MySQL`."),

S("q17", 3, 2, "Trong lớp Connector dùng cho ứng dụng PyQt6, thư viện nào được dùng để kết nối MySQL?",
  ["mysql.connector (cài bằng pip install mysql-connector-python)", "sqlite3", "pymongo", "pyodbc"],
  "`self.conn = mysql.connector.connect(host=..., port=..., database=..., user=..., password=...)`."),

M("q18", 3, 2, "Khi cấu hình Flask-MySQL, những khóa nào được khai báo trong `app.config`?",
  ["MYSQL_DATABASE_USER", "MYSQL_DATABASE_PASSWORD", "MYSQL_DATABASE_DB và MYSQL_DATABASE_HOST", "MYSQL_DATABASE_TABLE"], 3,
  "Sau khi cấu hình gọi `mysql.init_app(app)` rồi `conn = mysql.connect()`."),

S("q60", 3, 2, "Thứ tự đúng để thực thi một truy vấn bằng Flask-MySQL là gì?",
  ["mysql.init_app(app) -> conn = mysql.connect() -> cursor = conn.cursor() -> cursor.execute(sql)", "cursor.execute(sql) -> conn = mysql.connect() -> mysql.init_app(app)", "conn.cursor() -> mysql.init_app(app) -> cursor.execute(sql)", "app.run() -> cursor.fetchall()"],
  "Cần khởi tạo extension với app, mở kết nối, tạo cursor rồi mới thực thi."),

S("q19", 3, 1, "Phương thức nào của `cursor` thực thi một câu lệnh SQL?",
  ["execute()", "run()", "query()", "commit()"],
  "commit() là phương thức của connection để xác nhận thay đổi."),

S("q20", 3, 1, "Sau khi thực thi SELECT, phương thức nào lấy tất cả các dòng kết quả?",
  ["fetchall()", "fetchone()", "fetchmany(4)", "getall()"],
  "fetchall trả về danh sách các tuple."),

S("q21", 3, 2, "Đoạn code sau lấy bao nhiêu dòng?" + C(`cursor.execute("select ID,Code,Name from student")
data = cursor.fetchmany(4)`),
  ["Tối đa 4 dòng đầu của kết quả", "Toàn bộ các dòng", "Đúng 1 dòng", "4 cột của bảng"],
  "fetchmany(n) lấy n dòng tiếp theo."),

S("q22", 3, 2, "Đoạn code sau in ra gì?" + C(`cursor.execute("select * from student")
data = cursor.fetchone()
print(data)`),
  ["Một tuple chứa dòng đầu tiên của kết quả, ví dụ (1, 'sv01', 'Mẫn Nhi')", "Danh sách mọi dòng", "Số dòng trong bảng", "Tên các cột"],
  "fetchone() trả về một dòng duy nhất (hoặc None nếu hết dữ liệu)."),

S("q23", 3, 1, "Câu SQL nào sắp xếp sinh viên theo tên giảm dần?",
  ["select * from student order by name desc", "select * from student sort by name desc", "select * from student order name down", "select * from student group by name desc"],
  "ASC tăng dần (mặc định), DESC giảm dần."),

S("q61", 3, 1, "Câu SQL nào lấy sinh viên có Code = '789'?",
  ["select * from student where Code='789'", "select * from student having Code='789'", "select Code='789' from student", "select * from student filter Code='789'"],
  "Ví dụ 'Select Where Student'."),

S("q24", 3, 2, "Bảng student có 10 dòng. Câu `SELECT * FROM student LIMIT 4 OFFSET 3` trả về những dòng nào?",
  ["Dòng thứ 4 đến dòng thứ 7", "Dòng thứ 3 đến dòng thứ 6", "Dòng thứ 1 đến dòng thứ 4", "Dòng thứ 4 đến dòng thứ 10"],
  "OFFSET 3 bỏ qua 3 dòng đầu, LIMIT 4 lấy 4 dòng tiếp theo. Đây là kỹ thuật phân trang (paging)."),

S("q62", 3, 2, "Mỗi trang hiển thị 4 sinh viên. Câu SQL nào lấy trang thứ 3?",
  ["SELECT * FROM student LIMIT 4 OFFSET 8", "SELECT * FROM student LIMIT 4 OFFSET 12", "SELECT * FROM student LIMIT 3 OFFSET 4", "SELECT * FROM student LIMIT 12"],
  "OFFSET = (số trang - 1) * kích thước trang = 2 * 4 = 8."),

S("q25", 3, 2, "Đoạn code sau làm gì?" + C(`sql = "insert into student (code,name) values (%s,%s)"
val = ("SV01", "Thanh Tran")
cursor.execute(sql, val)
conn.commit()
print(cursor.rowcount, " record inserted")`),
  ["Thêm một sinh viên SV01 - Thanh Tran bằng câu lệnh tham số hóa và in số dòng đã thêm (1)", "Cập nhật tên sinh viên SV01", "Xóa sinh viên SV01", "Tìm sinh viên SV01"],
  "%s là chỗ giữ tham số, giá trị truyền qua tuple val."),

S("q26", 3, 2, "Phương thức nào của cursor chèn NHIỀU dòng cùng lúc với một câu SQL có tham số?",
  ["executemany(sql, val) với val là list các tuple", "execute(sql, val) với val là list", "insertmany(sql, val)", "fetchmany(sql, val)"],
  "Ví dụ val = [(\"SV03\",\"Pham Dieu\"), (\"SV04\",\"Thanh Tran\"), (\"SV05\",\"Man Nhi\")]."),

S("q63", 3, 2, "Đoạn code sau in ra gì nếu chèn thành công?" + C(`sql = "insert into student (code,name) values (%s,%s)"
val = [("SV03", "Pham Dieu"),
       ("SV04", "Thanh Tran"),
       ("SV05", "Man Nhi")]
cursor.executemany(sql, val)
conn.commit()
print(cursor.rowcount, " record inserted")`),
  ["3  record inserted", "1  record inserted", "0  record inserted", "Lỗi vì val là list"],
  "rowcount là số dòng bị tác động bởi lệnh vừa thực thi."),

S("q27", 3, 2, "Vì sao sau INSERT, UPDATE, DELETE phải gọi `conn.commit()`?",
  ["Để xác nhận và lưu vĩnh viễn thay đổi vào CSDL; không commit thì thay đổi không được ghi", "Để đóng kết nối", "Để lấy kết quả truy vấn", "Để tạo cursor mới"],
  "SELECT không cần commit."),

S("q64", 3, 2, "Thuộc tính `cursor.rowcount` cho biết điều gì?",
  ["Số dòng bị tác động (thêm, sửa, xóa) bởi lệnh vừa thực thi", "Tổng số dòng của bảng", "Số cột của bảng", "Số kết nối đang mở"],
  "Ví dụ `print(cursor.rowcount, \" record(s) affected\")`."),

S("q65", 3, 2, "Đoạn code sau làm gì?" + C(`sql = "update student set name='Pham Tang' where Code='456'"
cursor.execute(sql)
conn.commit()`),
  ["Đổi tên sinh viên có Code '456' thành Pham Tang", "Thêm sinh viên Pham Tang", "Xóa sinh viên có Code '456'", "Đổi Code của Pham Tang thành 456"],
  "UPDATE ... SET ... WHERE ..."),

S("q28", 3, 3, "Vì sao nên viết `sql = \"update student set name=%s where Code=%s\"` và truyền `val = ('Pham Tang','789')` thay vì ghép chuỗi trực tiếp?",
  ["Để chống tấn công SQL Injection: giá trị được truyền như tham số, không bị hiểu là một phần câu lệnh SQL", "Để câu lệnh chạy nhanh gấp đôi", "Vì MySQL không cho dùng dấu nháy đơn", "Để tự động commit"],
  "Các ví dụ 'Update SQL Injection Student' minh họa cách tham số hóa."),

S("q66", 3, 3, "Trong ví dụ xóa có tham số dưới đây, vì sao `val = (\"789\")` vẫn chạy được dù không phải tuple?" + C(`sql = "DELETE from student where Code=%s"
val = ("789")
cursor.execute(sql, val)
conn.commit()`),
  ["Vì (\"789\") chỉ là chuỗi '789'; với một tham số duy nhất, thư viện chấp nhận giá trị đơn. Cách viết tuple chuẩn là (\"789\",)", "Vì (\"789\") luôn là tuple", "Vì DELETE không cần tham số", "Đoạn code này luôn báo lỗi"],
  "Tuple một phần tử trong Python cần dấu phẩy: (\"789\",)."),

S("q67", 3, 2, "Trong các ví dụ CRUD với Flask-MySQL, khối `finally` chứa những lệnh nào?",
  ["conn.close(), cursor.close() và in 'Mysql is closed'", "conn.commit()", "cursor.execute(sql)", "mysql.init_app(app)"],
  "finally luôn chạy dù có lỗi hay không, giúp giải phóng kết nối."),

S("q36", 3, 1, "Lệnh nào đóng kết nối CSDL sau khi xử lý xong?",
  ["conn.close()", "conn.exit()", "cursor.stop()", "mysql.end()"],
  "cursor cũng nên được đóng bằng `cursor.close()`."),

S("q68", 3, 2, "Trong khối `except mysql.connector.Error as e:` của ví dụ CRUD, ta cần import gì?",
  ["import mysql.connector", "import traceback", "from flask import Error", "import sqlite3"],
  "mysql.connector.Error là lớp lỗi của thư viện MySQL Connector."),

S("q69", 3, 2, "Cho đoạn mã:" + C(FLASK_HEAD + `
cursor.execute("select * from student")
data = cursor.fetchall()
for item in data:
    print(item[0], "\\t", item[1], "\\t", item[2])`) + "Vòng lặp in ra gì cho mỗi sinh viên?",
  ["ID, Code và Name, cách nhau bằng ký tự tab", "Chỉ cột ID", "Toàn bộ bảng dưới dạng DataFrame", "Tên cột của bảng"],
  "item là một tuple (ID, Code, Name)."),

// ================= MYSQL + PYQT6 =================
S("q70", 3, 2, "Trong project DemoMySqlPyQt6, lớp Connector (Connectors/Connector.py) có vai trò gì?",
  ["Đóng gói thông tin kết nối và các hàm connect, disConnect, queryDataset để dùng lại cho các màn hình", "Vẽ giao diện bằng Qt Designer", "Chạy ứng dụng PyQt6", "Lưu file .ui"],
  "Đây là thư viện tương tác MySQL phục vụ cho mô hình máy học và giao diện."),

S("q71", 3, 2, "Hàm khởi tạo của lớp Connector được khai báo như thế nào?",
  ["def __init__(self, server=None, port=None, database=None, username=None, password=None):", "def __init__(server, port, database):", "def Connector(self):", "def __init__(self, *conn):"],
  "Các tham số có giá trị mặc định None, sau đó được gán lại trong connectDatabase của màn hình."),

S("q72", 3, 3, "Hàm queryDataset của lớp Connector như sau. Dòng `df.columns = cursor.column_names` có tác dụng gì?" + C(`def queryDataset(self, sql):
    try:
        cursor = self.conn.cursor()
        cursor.execute(sql)
        df = pd.DataFrame(cursor.fetchall())
        df.columns = cursor.column_names
        return df
    except:
        traceback.print_exc()
    return None`),
  ["Đặt tên cột của DataFrame bằng tên cột trong kết quả truy vấn (thay cho 0, 1, 2...)", "Lấy danh sách bảng trong CSDL", "Sắp xếp các cột", "Xóa các cột trống"],
  "Nếu không gán, DataFrame chỉ có tên cột là chỉ số 0, 1, 2..."),

S("q73", 3, 2, "Trong lớp Connector, lệnh `traceback.print_exc()` trong khối except dùng để làm gì?",
  ["In chi tiết lỗi (stack trace) ra console để dễ gỡ lỗi mà chương trình không bị dừng", "Thử kết nối lại", "Đóng kết nối", "Ghi log vào CSDL"],
  "Sau đó hàm trả về None."),

S("q74", 3, 2, "Hàm disConnect của lớp Connector viết như thế nào?",
  ["if self.conn != None: self.conn.close()", "self.conn = None", "self.conn.commit()", "del self"],
  "Chỉ đóng khi đã có kết nối."),

S("q75", 3, 2, "Trong MainWindowEx, hàm connectDatabase gán các thuộc tính nào trước khi gọi `self.connector.connect()`?",
  ["server = \"localhost\", port = 3306, database = \"salesdatabase\", username = \"root\", password = \"@Obama123\"", "Chỉ cần database", "Chỉ cần username và password", "Đường dẫn file .sql"],
  "Khi chạy trên máy khác cần đổi các thông tin kết nối này (Change connection information)."),

S("q76", 3, 2, "Trong MainWindowEx, vì sao lớp kế thừa `Ui_MainWindow` và gọi `super().setupUi(MainWindow)`?",
  ["Để dùng lại giao diện sinh ra từ file .ui (MainWindow.py) rồi bổ sung xử lý sự kiện mà không sửa file sinh tự động", "Để tạo cửa sổ mới hoàn toàn bằng code", "Để kết nối MySQL", "Để vẽ biểu đồ"],
  "Tách giao diện (MainWindow.py) và xử lý (MainWindowEx.py)."),

S("q77", 3, 2, "Dòng lệnh nào gắn sự kiện bấm nút pushButtonCustomer với hàm loadCustomerIntoQTableWidget?",
  ["self.pushButtonCustomer.clicked.connect(self.loadCustomerIntoQTableWidget)", "self.pushButtonCustomer.onclick = self.loadCustomerIntoQTableWidget", "self.pushButtonCustomer.clicked(self.loadCustomerIntoQTableWidget())", "connect(self.pushButtonCustomer, loadCustomerIntoQTableWidget)"],
  "Truyền tên hàm (không có ngoặc) vào clicked.connect."),

S("q29", 3, 1, "Widget nào của PyQt6 dùng để hiển thị dữ liệu dạng bảng (lưới)?",
  ["QTableWidget", "QLineEdit", "QPushButton", "QLabel"],
  "Trong ví dụ, tableWidgetData là QTableWidget."),

S("q78", 3, 3, "Hàm showDataIntoTableWidget có đoạn:" + C(`table.setRowCount(0)
table.setColumnCount(len(df.columns))
for i in range(len(df.columns)):
    columnHeader = df.columns[i]
    table.setHorizontalHeaderItem(i, QTableWidgetItem(columnHeader))`) + "Đoạn này làm gì?",
  ["Xóa các dòng cũ, đặt số cột bằng số cột DataFrame và gán tiêu đề cột từ tên cột DataFrame", "Thêm dữ liệu vào từng ô", "Sắp xếp bảng theo cột đầu", "Xóa toàn bộ bảng"],
  "setRowCount(0) làm trống bảng trước khi nạp dữ liệu mới."),

S("q79", 3, 3, "Trong showDataIntoTableWidget, đoạn sau nạp dữ liệu thế nào?" + C(`row = 0
for item in df.iloc:
    arr = item.values.tolist()
    table.insertRow(row)
    j = 0
    for data in arr:
        table.setItem(row, j, QTableWidgetItem(str(data)))
        j = j + 1
    row = row + 1`),
  ["Duyệt từng dòng DataFrame, chèn một dòng mới vào bảng rồi đặt từng ô bằng QTableWidgetItem chứa giá trị dạng chuỗi", "Chèn toàn bộ DataFrame vào một ô", "Chỉ nạp dòng đầu tiên", "Nạp dữ liệu theo cột thay vì theo dòng"],
  "QTableWidgetItem nhận chuỗi nên phải dùng str(data)."),

S("q30", 3, 2, "Hàm sau làm gì?" + C(`def loadCustomerSpendScore(self):
    self.connectDatabase()
    sql = "select * from customer_spend_score"
    df = self.connector.queryDataset(sql)
    self.showDataIntoTableWidget(self.tableWidgetData, df)`),
  ["Kết nối CSDL, truy vấn bảng customer_spend_score thành DataFrame và hiển thị lên tableWidgetData", "Xóa bảng customer_spend_score", "Vẽ biểu đồ điểm chi tiêu", "Xuất dữ liệu ra file Excel"],
  "Tương tự loadCustomerIntoQTableWidget với bảng customer."),

S("q80", 3, 2, "File App.py của project khởi chạy ứng dụng như sau. Lệnh nào bắt đầu vòng lặp sự kiện của ứng dụng?" + C(`qApp = QApplication([])
qmainWindow = QMainWindow()
window = MainWindowEx()
window.setupUi(qmainWindow)
window.show()
qApp.exec()`),
  ["qApp.exec()", "window.show()", "window.setupUi(qmainWindow)", "QApplication([])"],
  "exec() chạy vòng lặp sự kiện cho đến khi đóng ứng dụng."),

S("q81", 3, 2, "Trong MainWindowEx, hàm openChartVisualization mở màn hình biểu đồ như thế nào?",
  ["Tạo QMainWindow mới, tạo ChartVisualizationEx, gọi setupUi(window) rồi show()", "Gọi trực tiếp plt.show()", "Đóng MainWindow rồi mở lại", "Nạp file ChartVisualization.ui bằng uic.loadUi"],
  "Nút pushButtonStatistic (Chart Visualization) được gắn với openChartVisualization."),

M("q82", 3, 2, "ChartVisualizationEx dùng những thư viện nào để vẽ biểu đồ nhúng trong PyQt6?",
  ["matplotlib.pyplot", "FigureCanvasQTAgg và NavigationToolbar2QT từ matplotlib.backends.backend_qt5agg", "seaborn", "plotly.express"], 3,
  "FigureCanvas nhúng hình matplotlib vào widget Qt; NavigationToolbar cung cấp thanh công cụ zoom, lưu hình."),

S("q83", 3, 3, "Hàm setupPlot trong ChartVisualizationEx:" + C(`self.figure = plt.figure()
self.canvas = FigureCanvas(self.figure)
self.toolbar = NavigationToolbar(self.canvas, self.MainWindow)
self.verticalLayoutPlot.addWidget(self.toolbar)
self.verticalLayoutPlot.addWidget(self.canvas)`) + "Mục đích của đoạn mã là gì?",
  ["Tạo figure, bọc vào canvas Qt, tạo thanh công cụ và thêm cả hai vào layout dọc của giao diện", "Vẽ biểu đồ tròn", "Đóng cửa sổ biểu đồ", "Lưu biểu đồ ra file PNG"],
  "verticalLayoutPlot là QVBoxLayout được thiết kế trên Qt Designer."),

S("q84", 3, 2, "Nút Back (pushButtonBack) trên màn hình biểu đồ gọi hàm processBackMainWindow. Hàm này làm gì?",
  ["self.MainWindow.close() để đóng màn hình biểu đồ", "Mở lại màn hình chính mới", "Xóa dữ liệu biểu đồ", "Thoát toàn bộ ứng dụng bằng sys.exit()"],
  "Màn hình chính vẫn còn mở phía sau."),

S("q85", 3, 3, "Trong showPieChartForCustomer, lệnh sau tạo ra gì?" + C(`dfGender = df.Gender.value_counts().reset_index().rename(
    columns={"index": "Gender", "Gender": "Count"})`),
  ["DataFrame 2 cột Gender và Count: số khách hàng theo từng giới tính", "Danh sách khách hàng đã sắp xếp theo giới tính", "Tổng chi tiêu theo giới tính", "Tuổi trung bình theo giới tính"],
  "value_counts đếm tần suất, reset_index biến kết quả thành DataFrame, rename đặt lại tên cột."),

S("q31", 3, 2, "Để vẽ biểu đồ tròn hiển thị tỷ lệ phần trăm từng giới tính, dùng lệnh nào?",
  ["ax.pie(dfGender['Count'], labels=dfGender['Gender'], autopct='%1.2f%%')", "ax.bar(dfGender['Count'])", "sns.lineplot(data=dfGender)", "ax.plot(dfGender['Gender'])"],
  "autopct='%1.2f%%' hiển thị phần trăm với 2 chữ số thập phân."),

S("q86", 3, 2, "Trước khi vẽ biểu đồ mới trên cùng canvas, vì sao gọi `self.figure.clear()` và `ax = self.figure.add_subplot(111)`?",
  ["Xóa biểu đồ cũ rồi tạo một vùng vẽ (1 hàng, 1 cột, ô thứ 1) mới", "Lưu biểu đồ cũ", "Tạo 111 biểu đồ con", "Phóng to biểu đồ"],
  "Sau khi vẽ xong cần `self.canvas.draw()` để cập nhật hiển thị."),

S("q87", 3, 1, "Sau khi vẽ xong trên figure, lệnh nào làm biểu đồ hiển thị lên giao diện PyQt6?",
  ["self.canvas.draw()", "plt.show()", "self.figure.save()", "self.MainWindow.close()"],
  "plt.show() mở cửa sổ matplotlib riêng, không phải canvas nhúng."),

S("q88", 3, 2, "Trong biểu đồ tròn, lệnh `ax.legend(dfGender[columnLabel], loc='lower right')` làm gì?",
  ["Thêm chú thích các giới tính ở góc dưới bên phải", "Đặt tiêu đề biểu đồ", "Đổi màu các lát cắt", "Xoay biểu đồ"],
  "Chỉ chạy khi biến legend = True."),

S("q89", 3, 3, "Câu SQL trong showLineChartForCustomer như sau. Nó lấy dữ liệu gì?" + C(`select distinct customer_spend_score.*, customer.Age
from customer, customer_spend_score
where customer.CustomerID = customer_spend_score.CustomerID`),
  ["Toàn bộ cột của customer_spend_score kèm tuổi của khách hàng, ghép hai bảng theo CustomerID và loại dòng trùng", "Chỉ cột Age của customer", "Mọi tổ hợp dòng của hai bảng không điều kiện", "Danh sách CustomerID trùng nhau"],
  "Điều kiện WHERE nối hai bảng; DISTINCT loại bỏ dòng trùng lặp."),

S("q34", 3, 1, "Từ khóa `DISTINCT` trong SQL dùng để làm gì?",
  ["Loại bỏ các dòng kết quả trùng lặp", "Sắp xếp kết quả", "Đếm số dòng", "Nối hai bảng"],
  "Ví dụ `select distinct customer_spend_score.*, customer.Age ...`."),

S("q33", 3, 2, "Trong showLineChartForCustomer, `fromAge` và `toAge` được lấy như thế nào?",
  ["fromAge = (int)(self.lineEditFromAge.text()) và toAge = (int)(self.lineEditToAge.text())", "Đọc từ CSDL", "Gán cứng 20 và 50 trong code", "Lấy từ QTableWidget"],
  "Người dùng nhập khoảng tuổi vào hai QLineEdit; text() trả về chuỗi nên ép sang int."),

S("q90", 3, 2, "Lệnh nào lọc khách hàng có tuổi trong khoảng [fromAge, toAge] rồi sắp xếp tăng dần theo tuổi?",
  ["dfAges = df[(df.Age >= fromAge) & (df.Age <= toAge)]; dfAges.sort_values(by=['Age'], ascending=True, inplace=True)", "dfAges = df[df.Age between fromAge and toAge]; dfAges.sort()", "dfAges = df.filter(Age=fromAge:toAge)", "dfAges = df[(df.Age >= fromAge) and (df.Age <= toAge)].sort_values('Age')"],
  "inplace=True sắp xếp trực tiếp trên dfAges."),

S("q32", 3, 2, "Lệnh nào vẽ biểu đồ đường điểm chi tiêu theo tuổi có đánh dấu điểm tròn màu cam?",
  ["sns.lineplot(data=dfAges, x='Age', y='Spending_Score', marker='o', color='orange')", "ax.pie(dfAges['Age'])", "sns.barplot(dfAges)", "plt.scatter('Age')"],
  "seaborn được import với tên sns."),

S("q91", 3, 2, "Lệnh `title = \"Age Distribution %s~%s\" % (fromAge, toAge)` với fromAge = 20, toAge = 50 tạo ra chuỗi nào?",
  ["Age Distribution 20~50", "Age Distribution %s~%s", "Age Distribution (20, 50)", "Age Distribution 2050"],
  "Toán tử % định dạng chuỗi thay lần lượt các %s."),

S("q92", 3, 3, "Lệnh `ax.ticklabel_format(useOffset=False, style=\"plain\")` có tác dụng gì?",
  ["Hiển thị nhãn trục dạng số thường, không dùng offset hay ký hiệu khoa học", "Ẩn nhãn trục", "Xoay nhãn trục 90 độ", "Đổi màu nhãn trục"],
  "Giúp trục hiển thị giá trị đầy đủ, dễ đọc."),
];
module.exports = QUESTIONS_C3;
