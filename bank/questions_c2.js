// ============================================================================
// CHƯƠNG 2: Dữ liệu (MLBA)
// Soạn dựa trên Slide 04: Dữ liệu
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c2-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c2-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C2 = [
// ================= 2.1 DỮ LIỆU LÀ GÌ =================
S("q1", 2, 1, "Theo slide, dữ liệu được ví như là gì?",
  ["Vàng", "Nước", "Không khí", "Đất"],
  "Slide 04: 'Dữ liệu là vàng. Ta có thể khai thác được nhiều thông tin có ý nghĩa từ dữ liệu.'"),

S("q2", 2, 2, "Trong mô hình DIKW (Data - Information - Knowledge), dữ liệu thô (Raw) sau khi được xử lý (Processed) sẽ trở thành gì?",
  ["Information (Thông tin)", "Knowledge (Tri thức)", "Decision-making (Ra quyết định)", "Adaptive (Thích ứng)"],
  "Slide 04 (Hình minh họa): DATA (Raw) -> INFORMATION (Processed) -> KNOWLEDGE (Actionable) -> Decision-making."),

S("q3", 2, 2, "Trong sơ đồ DIKW, 'Knowledge' (Tri thức) được mô tả có tính chất gì?",
  ["Actionable (Có thể hành động)", "Raw (Thô)", "Processed (Đã xử lý)", "Statistical (Thống kê)"],
  "Slide 04: KNOWLEDGE được chú thích là 'Actionable'."),

S("q4", 2, 1, "Theo định nghĩa trong slide, dữ liệu là gì?",
  ["Là một tập hợp thông tin bao gồm các số, chữ cái, hình ảnh, bảng biểu... giúp con người hình dung ra sự vật, sự việc", "Là các con số được lưu trong máy tính", "Là thông tin đã được xử lý và đưa ra quyết định", "Là một loại phần mềm quản lý"],
  "Slide 04: Dữ liệu là một tập hợp thông tin bao gồm các số, chữ cái, hình ảnh, bảng biểu... được ứng dụng rộng rãi trong các lĩnh vực."),

// ================= 2.2 TẦM QUAN TRỌNG CỦA DỮ LIỆU =================
M("q5", 2, 2, "Dữ liệu có tầm quan trọng như thế nào đối với doanh nghiệp?",
  ["Giúp đưa ra những quyết định tốt hơn", "Giúp nắm bắt và nâng cao hiệu suất", "Giúp hiểu sâu người tiêu dùng", "Giúp cải thiện quy trình"], 4,
  "Slide 04: Dữ liệu giúp đưa ra quyết định tốt hơn, nâng cao hiệu suất, hiểu sâu người tiêu dùng, cải thiện quy trình, phát hiện cơ hội/thách thức, là nguồn tin nghiên cứu, đem lại doanh thu và giải quyết vấn đề."),

S("q6", 2, 2, "Theo slide, việc đưa ra quyết định dựa trên dữ liệu (Data-Driven Decision Making) giúp doanh nghiệp làm được gì?",
  ["Tìm kiếm khách hàng mới dựa trên nhân khẩu học, hành vi và sở thích", "Tăng tỷ lệ quay trở lại mua hàng", "Cải thiện dịch vụ khách hàng", "Tất cả các ý trên đều đúng"],
  "Slide 04: Dữ liệu giúp tìm kiếm khách hàng mới, tăng tỷ lệ quay lại, cải thiện dịch vụ, quản lý marketing và dự đoán xu hướng."),

S("q7", 2, 1, "Dữ liệu giúp doanh nghiệp hiểu sâu người tiêu dùng thông qua việc trả lời những câu hỏi nào?",
  ["Khách hàng là ai, họ thích gì, họ chi bao nhiêu tiền", "Khách hàng làm nghề gì, ở đâu", "Khách hàng có thường xuyên khiếu nại không", "Khách hàng có sử dụng mạng xã hội không"],
  "Slide 04: Dữ liệu cho biết khách hàng của doanh nghiệp là ai? Người tiêu dùng liệu có thích sản phẩm hay không? Khách hàng sẽ chi bao nhiêu tiền?"),

S("q8", 2, 2, "Dữ liệu đem lại doanh thu cho doanh nghiệp bằng cách nào?",
  ["Giúp doanh nghiệp tìm ra cơ hội kinh doanh mới, tối ưu hóa chi phí và lợi nhuận", "Bán dữ liệu cho đối thủ cạnh tranh", "Tăng giá sản phẩm tự động", "Cắt giảm nhân viên"],
  "Slide 04: Dữ liệu giúp hiểu rõ khách hàng, thị trường, đối thủ; tìm ra cơ hội mới, cải thiện chất lượng sản phẩm, tối ưu hóa chi phí và lợi nhuận."),

// ================= 2.3 GARBAGE IN - GARBAGE OUT =================
S("q9", 2, 1, "Nguyên tắc 'Garbage In - Garbage Out' (GIGO) có nghĩa là gì?",
  ["Nếu thông tin đầu vào bị lỗi, thiên lệch hoặc chất lượng kém (rác) thì kết quả đầu ra cũng sẽ tương tự (rác)", "Rác thải đầu vào sẽ được tái chế thành dữ liệu", "Hệ thống sẽ tự động dọn dẹp rác", "Dữ liệu rác không thể tồn tại trong máy tính"],
  "Slide 04: GIGO là khái niệm chỉ việc thông tin/đầu vào bị lỗi, thiên lệch hoặc chất lượng kém sẽ tạo ra kết quả/đầu ra tương tự. Cần cải thiện chất lượng dữ liệu đầu vào."),

S("q10", 2, 2, "Để mô hình 'Great Model' (Mô hình tuyệt vời) hoạt động hiệu quả, điều kiện tiên quyết về dữ liệu là gì?",
  ["Dữ liệu đầu vào phải sạch, chất lượng tốt", "Dữ liệu đầu vào phải thật nhiều, bất kể chất lượng", "Mô hình phải được viết bằng ngôn ngữ bậc cao", "Mô hình phải chạy trên siêu máy tính"],
  "Slide 04 (Hình minh họa): Dù mô hình có tuyệt vời đến đâu, nếu đầu vào là 'Garbage Data' thì đầu ra cũng chỉ là 'Garbage Results'."),

// ================= 2.4 CÁC LOẠI DỮ LIỆU =================
S("q11", 2, 2, "Dữ liệu có cấu trúc (Structured Data) thường được lưu trữ và quản lý bằng công cụ nào?",
  ["Các hệ quản trị CSDL quan hệ (RDBMS) sử dụng SQL như MySQL, SQL Server", "Các file văn bản thuần túy (txt)", "Các file âm thanh, hình ảnh", "Các hệ thống NoSQL"],
  "Slide 04: Dữ liệu có cấu trúc được hàm chứa trong các cột và hàng, quản lý bằng SQL (MySQL, Microsoft SQL Server...)."),

S("q12", 2, 2, "Theo số liệu ước tính trong slide, dữ liệu có cấu trúc chiếm bao nhiêu phần trăm trong tổng dữ liệu doanh nghiệp?",
  ["Khoảng 20%", "Khoảng 80%", "Khoảng 50%", "Khoảng 10%"],
  "Slide 04 (Hình so sánh): Dữ liệu có cấu trúc chiếm khoảng 20% (Gartner). Dữ liệu phi cấu trúc chiếm khoảng 80%."),

M("q13", 2, 2, "Những đặc điểm nào sau đây là của Dữ liệu phi cấu trúc (Unstructured Data)?",
  ["Không thể hiển thị trong các hàng, cột và CSDL quan hệ", "Ví dụ điển hình: hình ảnh, âm thanh, video, email", "Chiếm phần lớn (khoảng 80%) dữ liệu doanh nghiệp", "Dễ dàng quản lý và tìm kiếm hơn dữ liệu có cấu trúc"], 3,
  "Slide 04: Dữ liệu phi cấu trúc chiếm 80%, không thể chứa trong hàng/cột, khó tìm kiếm/quản lý/phân tích. Ví dụ: hình ảnh, âm thanh, video, email."),

S("q14", 2, 3, "Một đoạn văn bản nội dung trong email được xem là loại dữ liệu gì, và thông tin người gửi/người nhận/thời gian của email đó là loại dữ liệu gì?",
  ["Nội dung là Phi cấu trúc, thông tin người gửi/nhận là Có cấu trúc", "Cả hai đều là Có cấu trúc", "Cả hai đều là Phi cấu trúc", "Nội dung là Bán cấu trúc, thông tin người gửi/nhận là Có cấu trúc"],
  "Slide 04: Email là ví dụ điển hình của dữ liệu bán cấu trúc. Nội dung thực chất thuộc dạng Không cấu trúc, nhưng mang dữ liệu Có cấu trúc (tên, địa chỉ, thời gian)."),

S("q15", 2, 2, "Dữ liệu bán cấu trúc (Semi-structured Data) là gì?",
  ["Là sự pha trộn giữa dữ liệu có cấu trúc và phi cấu trúc, có một số tính chất đồng nhất nhưng không phù hợp với CSDL quan hệ", "Là dữ liệu chỉ có một nửa cấu trúc", "Là dữ liệu có cấu trúc nhưng bị lỗi", "Là dữ liệu được lưu trong file CSV"],
  "Slide 04: Dữ liệu bán cấu trúc dựa trên sự pha trộn của 2 loại trên, có nhãn ngữ nghĩa (semantic tag) hoặc metadata nhưng không có cấu trúc rõ ràng cho CSDL quan hệ."),

S("q16", 2, 1, "Để đọc dữ liệu từ file CSV trong Python (sử dụng thư viện pandas), ta dùng hàm nào?",
  ["pd.read_csv()", "pd.read_excel()", "pd.read_json()", "pd.read_txt()"],
  "Slide 04 (Code minh họa): `df = pd.read_csv(\"dataset/SalesTransactions.csv\", ...)`."),

S("q17", 2, 1, "Để đọc dữ liệu từ file JSON trong Python (sử dụng pandas), ta dùng hàm nào?",
  ["pd.read_json()", "pd.read_csv()", "pd.read_excel()", "pd.read_xml()"],
  "Slide 04 (Code minh họa): `df = pd.read_json(\"dataset/SalesTransactions.json\", ...)`."),

S("q18", 2, 2, "Để đọc dữ liệu từ file XML trong Python, thư viện BeautifulSoup sử dụng cú pháp nào để phân tích cú pháp?",
  ["BeautifulSoup(data, 'xml')", "BeautifulSoup(data, 'html')", "BeautifulSoup(data, 'json')", "BeautifulSoup(data, 'csv')"],
  "Slide 04 (Code minh họa): `bs_data = BeautifulSoup(data, 'xml')`."),

S("q19", 2, 3, "Để đọc dữ liệu XML bằng pandas, người ta cài đặt thêm thư viện nào?",
  ["pandas-read-xml", "pandas-xml-reader", "lxml", "beautifulsoup4"],
  "Slide 04: Cài đặt `pip install pandas-read-xml` và sử dụng `import pandas_read_xml as pdx`."),

S("q20", 2, 2, "Hàm nào của pandas được sử dụng để đọc file Excel?",
  ["pd.read_excel()", "pd.read_csv()", "pd.read_xls()", "pd.read_json()"],
  "Slide 04 (Code minh họa): `dataframe = pd.read_excel(\"dataset/SalesTransactions.xlsx\")`."),

// ================= 2.5 DỮ LIỆU TRONG VÀ NGOÀI HỆ THỐNG =================
S("q21", 2, 2, "Khi dữ liệu CHƯA CÓ SẴN trong hệ thống nhưng ta đã có ý tưởng máy học, ta nên làm gì?",
  ["Giả lập dữ liệu hoặc sử dụng dữ liệu ngoài hệ thống, sau đó thiết kế hệ thống tương thích với dữ liệu đó khi vận hành", "Chờ đến khi hệ thống có dữ liệu mới bắt đầu làm", "Từ bỏ ý tưởng máy học", "Chỉ sử dụng dữ liệu có sẵn dù nó không phù hợp"],
  "Slide 04: Khi chưa có dữ liệu, ta có thể giả lập hoặc dùng dữ liệu ngoài. Khi vận hành, cố gắng thiết kế dữ liệu tương thích để rút ngắn thời gian chờ đợi."),

S("q22", 2, 1, "Nền tảng nào được nhắc đến là nguồn cung cấp dữ liệu mẫu phổ biến cho các nhà phân tích dữ liệu và máy học?",
  ["Kaggle", "Google Drive", "Dropbox", "GitHub"],
  "Slide 04: Kaggle là platform quen thuộc và hữu ích, có hầu hết các loại dữ liệu mẫu ta có thể thử nghiệm."),

// ================= 2.6 THIẾT KẾ CSDL =================
S("q23", 2, 2, "Trong sơ đồ thiết kế CSDL cho cửa hàng online (SQL Server), bảng nào lưu thông tin chi tiết của từng sản phẩm trong một đơn hàng?",
  ["OrderDetails", "Products", "Orders", "Customers"],
  "Slide 04 (Sơ đồ CSDL): OrderDetails lưu thông tin ProductID, UnitPrice, Quantity, Discount cho từng sản phẩm trong đơn hàng."),

S("q24", 2, 2, "Trong SQLite, để tương tác với cơ sở dữ liệu từ Python, ta sử dụng module nào có sẵn?",
  ["sqlite3", "sqlite", "sqlitedb", "db-sqlite"],
  "Slide 04 (Code minh họa): `import sqlite3`."),

S("q25", 2, 3, "Đoạn code sau thực hiện việc gì?\n`cursor.execute(query)`\n`df = pd.DataFrame(cursor.fetchall())`",
  ["Thực thi câu lệnh SQL và lấy toàn bộ kết quả để chuyển thành DataFrame", "Chỉ thực thi câu lệnh SQL mà không lấy kết quả", "Lấy 1 dòng kết quả từ câu lệnh SQL", "Đóng kết nối cơ sở dữ liệu"],
  "Slide 04: `execute` thực thi truy vấn. `fetchall()` lấy toàn bộ kết quả. `pd.DataFrame()` chuyển kết quả thành bảng."),

S("q26", 2, 2, "Để tương tác với MongoDB từ Python (thông qua PyMongo), ta thường dùng lệnh nào để kết nối?",
  ["MongoClient()", "connect()", "MongoDB()", "Client()"],
  "Slide 04 (MongoDB Compass): Thường sử dụng thư viện pymongo với `MongoClient` để kết nối đến localhost:27017."),

// ================= 2.7 THÁCH THỨC BIG DATA =================
S("q27", 2, 1, "3Vs của Big Data bao gồm những yếu tố nào?",
  ["Volume, Velocity, Variety", "Volume, Value, Veracity", "Velocity, Variety, Value", "Volume, Velocity, Value"],
  "Slide 04: 3Vs cơ bản của Big Data là Volume (Khối lượng), Velocity (Tốc độ), Variety (Đa dạng)."),

S("q28", 2, 2, "'Variety' trong 5Vs của Big Data có nghĩa là gì?",
  ["Sự đa dạng của các loại dữ liệu (có cấu trúc, phi cấu trúc, bán cấu trúc)", "Tốc độ tạo ra dữ liệu", "Kích thước của dữ liệu", "Độ tin cậy của dữ liệu"],
  "Slide 04: Variety là sự đa dạng của các loại dữ liệu."),

S("q29", 2, 2, "'Veracity' trong 5Vs của Big Data đề cập đến điều gì?",
  ["Độ tin cậy, tính xác thực của dữ liệu", "Giá trị của dữ liệu", "Khối lượng dữ liệu", "Tốc độ xử lý dữ liệu"],
  "Slide 04: Veracity là độ tin cậy, tính xác thực, nguồn gốc, danh tiếng của dữ liệu."),

S("q30", 2, 2, "Thách thức nào sau đây KHÔNG thuộc 8 thách thức khi xử lý Big Data được liệt kê trong slide?",
  ["Thiếu hụt nguồn cung cấp điện năng cho máy chủ", "Quản lý khối lượng dữ liệu khổng lồ", "Tích hợp dữ liệu từ nhiều nguồn", "Đảm bảo chất lượng dữ liệu"],
  "Slide 04: 8 thách thức gồm: Quản lý khối lượng lớn, Tích hợp nhiều nguồn, Chất lượng dữ liệu, Bảo mật, Chọn công cụ, Mở rộng hệ thống/chi phí, Thiếu nhân sự có kỹ năng, Sự phản kháng của tổ chức."),

M("q31", 2, 3, "Theo slide, đâu là những thách thức về mặt nhân sự và tổ chức khi triển khai Big Data?",
  ["Thiếu hụt các chuyên gia dữ liệu có kỹ năng", "Sự phản kháng từ phía tổ chức (Organizational resistance)", "Chi phí mua ổ cứng quá cao", "Dữ liệu quá sạch"], 2,
  "Slide 04: Thách thức số 7: Lack of skilled data professionals. Thách thức số 8: Organizational resistance."),
];
module.exports = QUESTIONS_C2;