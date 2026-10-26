// ============================================================================
// CHƯƠNG 5: Thiết kế hệ thống máy học (MLBA)
// Soạn dựa trên Slide 08 của TS. Trần Duy Thanh
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c5-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c5-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C5 = [
// ================= 5.1 - 5.3: NHU CẦU VÀ DỮ LIỆU =================
S("q1", 5, 1, "Theo slide, có mô hình máy học nào bị coi là 'sai' hoàn toàn không?",
  ["Không, chỉ có mô hình phù hợp hay chưa phù hợp với tập dữ liệu/bài toán cụ thể", "Có, những mô hình chạy ra kết quả không chính xác là sai", "Có, những mô hình có độ phức tạp quá cao là sai", "Có, những mô hình không dùng thuật toán phổ biến là sai"],
  "Slide 08: 'Không có mô hình máy học nào sai, chỉ có mô hình máy học phù hợp hay chưa phù hợp'. Mô hình tốt với tập dữ liệu X chưa chắc tốt với tập dữ liệu Y."),

S("q2", 5, 2, "Khi DỮ LIỆU CHƯA CÓ SẴN trong hệ thống nhưng đã có ý tưởng máy học, ta nên làm gì?",
  ["Giả lập dữ liệu hoặc sử dụng dữ liệu ngoài hệ thống, sau đó thiết kế hệ thống tương thích với dữ liệu đó", "Chờ đến khi thu thập đủ dữ liệu mới bắt đầu làm", "Từ bỏ ý tưởng máy học và chuyển sang bài toán khác", "Chỉ sử dụng dữ liệu từ database hiện có dù nó không phù hợp"],
  "Slide 08: Khi chưa có dữ liệu, ta có thể giả lập hoặc dùng dữ liệu ngoài, nhằm 'tiên đoán trước về dữ liệu để rút ngắn thời gian chờ đợi khi xây dựng mô hình'."),

S("q3", 5, 2, "Tại sao mô hình máy học cần được cải tiến thường xuyên?",
  ["Vì nhu cầu hoặc dữ liệu có thể bị thay đổi đáng kể theo thời gian (ví dụ: sở thích khách hàng thay đổi)", "Vì thuật toán máy học tự động bị lỗi sau một thời gian", "Vì phần cứng máy chủ sẽ yếu dần đi", "Vì dữ liệu trong database luôn bị xóa"],
  "Slide 08: Mô hình cần cải tiến thường xuyên khi nhu cầu hay dữ liệu thay đổi. Ví dụ: sở thích khách hàng thay đổi theo thời gian (Dưa leo/Dưa chuột)."),

S("q4", 5, 2, "Phát biểu nào sau đây mô tả đúng về 'Mô hình tổng quan của máy học'?",
  ["Nó phụ thuộc vào kinh nghiệm và tư tưởng của kỹ sư thiết kế, mỗi người có thể đưa ra quy trình khác nhau nhưng có điểm chung cơ bản", "Chỉ có duy nhất một quy trình chuẩn áp dụng cho mọi bài toán", "Quy trình này không bao giờ thay đổi", "Nó hoàn toàn tự động, kỹ sư không cần can thiệp"],
  "Slide 08: Máy học phụ thuộc vào kinh nghiệm kỹ sư, mỗi người có quy trình khác nhau, tuy nhiên có các điểm chung cơ bản khi xây dựng mô hình."),

// ================= 4.4: PREPARING DATA (BƯỚC 0 - 4) =================
S("q5", 5, 2, "Trong lưu đồ thiết kế hệ thống máy học, 3 phiên chính (phases) là gì?",
  ["PREPARING DATA, BUILD MODEL, USE MODEL", "DATABASE, TRAIN MODEL, PREDICT", "CLEAN DATA, SELECT ALGORITHM, DEPLOY", "COLLECT DATA, EVALUATE MODEL, SAVE MODEL"],
  "Slide 08 (Lưu đồ): Có 3 phiên chính: PREPARING DATA (Chuẩn bị dữ liệu), BUILD MODEL (Xây dựng mô hình), USE MODEL (Sử dụng mô hình)."),

S("q6", 5, 1, "Trong phiên PREPARING DATA, bước số (0) đại diện cho thành phần nào?",
  ["Consumers (Người tiêu dùng/Khách hàng)", "A Service System", "Database", "Clean and normalize data"],
  "Slide 08 (Lưu đồ): Bước (0) là Consumers. Khách hàng tương tác với hệ thống."),

S("q7", 5, 1, "Trong phiên PREPARING DATA, hoạt động tương tác của khách hàng (mua sắm, review, comment...) trên hệ thống (A Service System) sẽ được lưu vào đâu?",
  ["Database (Cơ sở dữ liệu)", "File Excel", "Bộ nhớ RAM", "Mô hình máy học"],
  "Slide 08 (Lưu đồ): Bước (1) A Service System -> Bước (2) Database. Dữ liệu được lưu vào Database."),

S("q8", 5, 2, "Mục đích chính của bước (3) 'Clean and normalize data' trong lưu đồ là gì?",
  ["Làm sạch và chuẩn hóa dữ liệu để phục vụ cho việc xây dựng mô hình", "Xóa toàn bộ dữ liệu cũ khỏi database", "Mã hóa dữ liệu để bảo mật", "Tăng tốc độ truy vấn SQL"],
  "Slide 08: Bước (3) làm sạch và chuẩn hóa dữ liệu. Dữ liệu trong database không phải lúc nào cũng tốt, cần tuân thủ nguyên tắc 'Garbage In - Garbage Out'."),

S("q9", 5, 2, "Bước (4) 'Class Modeling For Database' được áp dụng nhằm mục đích gì?",
  ["Mô hình hóa hướng đối tượng cho dữ liệu để giúp việc xử lý dữ liệu và mô hình được tốt hơn", "Tạo giao diện người dùng cho database", "Phân quyền truy cập database", "Nén dữ liệu trong database"],
  "Slide 08: Bước (4) Mô hình hóa hướng đối tượng (Class Modeling) giúp việc lập trình, xử lý dữ liệu và mô hình được dễ dàng, tốt hơn."),

S("q10", 5, 2, "Nguyên tắc 'Garbage In - Garbage Out' trong bước chuẩn bị dữ liệu có nghĩa là gì?",
  ["Nếu dữ liệu đầu vào không tốt, không được làm sạch thì mô hình xây dựng ra cũng sẽ không tốt", "Dữ liệu rác phải được đưa vào mô hình để mô hình học cách loại bỏ", "Chỉ những dữ liệu rác mới cần được xử lý", "Mô hình máy học có thể tự động sửa mọi lỗi dữ liệu"],
  "Slide 08: Cần chuẩn bị dữ liệu thật tốt vì database có thể lưu dữ liệu không tốt. Nếu vi phạm GIGO, mô hình sẽ cho kết quả kém."),

// ================= 4.4: BUILD MODEL (BƯỚC 5 - 9) =================
S("q11", 5, 1, "Bước (5) 'Filter and load data' trong phiên BUILD MODEL bao gồm những công việc gì?",
  ["Lọc, nạp dữ liệu, chọn các thuộc tính/biến phù hợp và chọn tỉ lệ train/test", "Xóa các dòng bị trùng lặp", "Tạo các bảng trong database", "Vẽ biểu đồ phân tích dữ liệu"],
  "Slide 08: Bước (5) là lọc và nạp dữ liệu, chọn các thuộc tính/biến phù hợp cũng như tỉ lệ train/test, ảnh hưởng tới chất lượng mô hình."),

S("q12", 5, 2, "Ở bước (6) 'Select Algorithms', ta cần lựa chọn giải thuật máy học dựa trên yếu tố nào?",
  ["Loại bài toán (Classification, Clustering, Time Series...) và các tham số đầu vào phù hợp", "Sở thích của lập trình viên", "Ngôn ngữ lập trình đang sử dụng", "Dung lượng của ổ cứng"],
  "Slide 08: Bước (6) chọn giải thuật phù hợp với bài toán (VD: Classification dùng giải thuật gì, Clustering dùng giải thuật gì) và chọn tham số đầu vào."),

S("q13", 5, 2, "Nếu ở bước (8) 'Evaluate & Improve Model', mô hình cho chất lượng KHÔNG tốt, ta có thể quay lại bước nào để khắc phục?",
  ["Quay lại bước (5) hoặc quay lại phiên PREPARING DATA", "Chỉ có thể quay lại bước (6)", "Chỉ có thể quay lại bước (7)", "Phải bắt đầu lại từ bước (0)"],
  "Slide 08: Nếu mô hình không chất lượng, quay lại bước (5) hoặc quay lại phiên PREPARING DATA. Cả 2 nơi này đều là nguyên nhân dẫn tới mô hình không đạt yêu cầu."),

S("q14", 5, 3, "Tại sao ở bước (9) ta cần 'Save model' (Lưu mô hình) ra ổ cứng?",
  ["Vì quá trình training mô hình rất tốn thời gian, không thể bắt khách hàng chờ đợi mỗi khi cần dự đoán", "Vì mô hình sẽ bị mất nếu không lưu", "Vì cần nộp mô hình cho giảng viên", "Vì dung lượng RAM không đủ để chứa mô hình"],
  "Slide 08: Training mô hình rất lâu, khách hàng không thể ngồi chờ. Lưu mô hình để các lần sau chỉ cần tải lại (load) và tích hợp vào hệ thống."),

// ================= 4.4: USE MODEL (BƯỚC 10 - 11) =================
S("q15", 5, 1, "Bước (10) trong phiên USE MODEL là gì?",
  ["Load Model (Tải mô hình đã lưu ở bước 9)", "Train Model (Huấn luyện mô hình)", "Evaluate Model (Đánh giá mô hình)", "Clean Data (Làm sạch dữ liệu)"],
  "Slide 08 (Lưu đồ): Bước (10) Load Model. Tải mô hình đã được lưu trữ để chuẩn bị sử dụng."),

S("q16", 5, 2, "Bước (11) 'Integrated and Invoke ML Model' thực hiện công việc gì?",
  ["Tích hợp mô hình vào hệ thống, gọi các hàm predict để đưa ra kết quả dự đoán cho khách hàng", "Huấn luyện lại mô hình với dữ liệu mới", "Đánh giá lại chất lượng mô hình", "Xóa các dữ liệu cũ trong database"],
  "Slide 08: Bước (11) tích hợp và triệu gọi mô hình. Chương trình sẽ gọi các hàm `predict` để đưa ra kết quả phù hợp cho khách hàng."),

S("q17", 5, 3, "Trong lưu đồ thiết kế hệ thống máy học, sau khi kết thúc bước (11), khách hàng tương tác lại với hệ thống (bước 0) tạo thành vòng gì?",
  ["Vòng tròn khép kín (Closed loop), giúp liên tục thu thập thêm dữ liệu mới", "Vòng lặp vô hạn gây treo hệ thống", "Chu trình xử lý song song", "Chu trình phân quyền người dùng"],
  "Slide 08: Khách hàng tiếp tục tương tác ở bước (0) tạo thành vòng tròn khép kín. Mỗi lần tương tác, hệ thống lại lưu dữ liệu vào database, giúp mô hình có thêm dữ liệu để cải tiến về sau."),

// ================= PHẦN 6: ỨNG DỤNG PYQT6 =================
S("q18", 5, 1, "Framework nào được sử dụng trong bài học để xây dựng phần mềm phân tích kinh doanh tích hợp Máy học?",
  ["PyQt6", "Django", "Flask", "Tkinter"],
  "Slide 08 (Phần 6): 'Ứng dụng PyQt6 FrameWork trong xây dựng phần mềm phân tích kinh doanh tích hợp Máy học'."),

M("q19", 5, 2, "Theo quy trình thiết kế phần mềm với PyQt6 (Phần 6), những bước nào sau đây thuộc quy trình này?",
  ["Mô tả bài toán", "Thiết kế Proposal và Prototype/Mockup", "Thiết kế cơ sở dữ liệu và thu thập/giả lập dữ liệu", "Thiết kế các màn hình giao diện tương tác"], 4,
  "Slide 08: Quy trình gồm 12 bước: Mô tả bài toán, Thiết kế Proposal/Prototype, Thiết kế CSDL, Thiết kế mô hình lớp đối tượng, Thiết kế giao diện, Tiền xử lý, Chọn tỉ lệ train/test, Train, Đánh giá, Lưu mô hình, Sử dụng, và Nhận xét/ra quyết định."),

S("q20", 5, 2, "Trong quy trình xây dựng phần mềm với PyQt6, sau khi 'Đánh giá chất lượng mô hình máy học' (bước 9) ta sẽ làm gì tiếp theo?",
  ["Lưu mô hình máy học (bước 10)", "Quay lại thu thập dữ liệu", "Tạo database mới", "Thiết kế lại giao diện"],
  "Slide 08 (Phần 6.1-6.12): Thứ tự là 6.9 Đánh giá -> 6.10 Lưu mô hình -> 6.11 Sử dụng mô hình -> 6.12 Nhận xét và ra quyết định kinh doanh."),

S("q21", 5, 3, "Bước cuối cùng (6.12) trong quy trình xây dựng phần mềm tích hợp máy học là gì?",
  ["Nhận xét và ra quyết định kinh doanh từ kết quả máy học đề xuất", "Xóa mô hình để giải phóng bộ nhớ", "Nộp báo cáo cho giảng viên", "Tắt server"],
  "Slide 08: Mục tiêu cuối cùng của phân tích kinh doanh là ra quyết định. Bước 6.12 là 'Nhận xét và ra quyết định kinh doanh từ kết quả máy học đề xuất'."),

// ================= CÁC CÂU HỎI TỔNG HỢP & ĐỌC HIỂU LƯU ĐỒ =================
S("q22", 5, 3, "Nhìn vào lưu đồ, nếu mô hình đã được lưu ở bước 9, khi có một khách hàng mới truy cập vào hệ thống, chương trình sẽ thực hiện các bước nào?",
  ["(10) Load Model -> (11) Integrated and Invoke ML Model", "(5) Filter and load data -> (6) Select Algorithms -> (7) Train model", "(2) Database -> (3) Clean data", "(1) A Service System -> (2) Database"],
  "Slide 08: Khi khách hàng mới truy cập, mô hình đã có sẵn. Hệ thống chỉ cần Load Model (10) và gọi hàm predict (11) để trả kết quả ngay, không cần train lại."),

S("q23", 5, 3, "Sắp xếp thứ tự đúng của các bước trong phiên BUILD MODEL?",
  ["(5) Filter and load data -> (6) Select Algorithms -> (7) Train model -> (8) Evaluate & Improve Model -> (9) Save model", "(6) Select Algorithms -> (5) Filter and load data -> (8) Evaluate -> (7) Train model -> (9) Save model", "(5) Filter and load data -> (7) Train model -> (6) Select Algorithms -> (8) Evaluate -> (9) Save model", "(7) Train model -> (5) Filter data -> (6) Select Algorithms -> (8) Evaluate -> (9) Save model"],
  "Slide 08 (Lưu đồ): Thứ tự logic là: Lọc/nạp dữ liệu -> Chọn giải thuật -> Train mô hình -> Đánh giá -> Lưu mô hình."),

S("q24", 5, 3, "Nhìn vào lưu đồ, nếu dữ liệu trong Database (bước 2) bị lỗi, quá nhiều giá trị khuyết thiếu, điều gì sẽ xảy ra?",
  ["Mô hình sau khi train sẽ kém chất lượng (Garbage Out) dù có chọn giải thuật tốt", "Hệ thống sẽ tự động sửa lỗi dữ liệu", "Mô hình sẽ tự động chọn giải thuật khác", "Database sẽ tự động bị xóa"],
  "Slide 08: Dữ liệu đầu vào kém sẽ dẫn đến mô hình kém (GIGO). Cần quay lại bước (3) làm sạch dữ liệu hoặc bước (5) lọc lại dữ liệu."),

S("q25", 5, 2, "Một kỹ sư muốn xây dựng mô hình dự báo nhu cầu du lịch nhưng công ty chưa có dữ liệu. Theo slide, kỹ sư nên làm gì?",
  ["Sử dụng dữ liệu giả lập hoặc dữ liệu ngoài hệ thống (ví dụ từ Kaggle, API đối tác)", "Chờ 1 năm để thu thập dữ liệu", "Chuyển sang làm mô hình phân loại", "Không thể làm gì cả"],
  "Slide 08: Khi nhu cầu máy học có trước, dữ liệu có sau: sử dụng dữ liệu giả lập hoặc dữ liệu ngoài để xây dựng mô hình, sau đó thiết kế hệ thống tương thích."),

M("q26", 5, 2, "Trong bước (8) Evaluate & Improve Model, để đánh giá mô hình hồi quy, ta có thể sử dụng những độ đo nào?",
  ["MAE (Mean Absolute Error)", "MSE (Mean Squared Error)", "RMSE (Root Mean Squared Error)", "B1 (Coefficient)"], 3,
  "Slide 08 (Tham khảo kiến thức Chương 4): Các độ đo đánh giá hồi quy gồm MAE, MSE, RMSE. B1 là hệ số góc của mô hình, không phải độ đo đánh giá."),

S("q27", 5, 3, "Bước 'Class Modeling For Database' (Mô hình hóa hướng đối tượng) trong phiên PREPARING DATA giúp ích gì cho lập trình viên?",
  ["Giúp ánh xạ dữ liệu từ database thành các đối tượng (object) trong code, dễ dàng thao tác và tái sử dụng", "Giúp nén dữ liệu trong database", "Giúp phân quyền người dùng", "Giúp tạo giao diện người dùng"],
  "Slide 08: Mô hình hóa hướng đối tượng (Class Modeling) giúp việc xử lý dữ liệu, mô hình được tốt hơn, dễ dàng lập trình (như kỹ thuật ORM)."),

S("q28", 5, 3, "Lưu đồ thiết kế hệ thống máy học cho thấy sự tương tác giữa 'A Service System' (hệ thống dịch vụ) và 'Database' diễn ra như thế nào?",
  ["Hai chiều: Hệ thống ghi dữ liệu hoạt động vào Database, và Database cung cấp dữ liệu ngược lại cho Hệ thống (để hiển thị, xử lý)", "Một chiều: Chỉ ghi từ Hệ thống vào Database", "Một chiều: Chỉ đọc từ Database ra Hệ thống", "Không có sự tương tác"],
  "Slide 08 (Lưu đồ): Mũi tên 2 chiều giữa (1) A Service System và (2) Database. Hệ thống lưu hoạt động vào DB, và DB cung cấp dữ liệu cho hệ thống."),

S("q29", 5, 2, "Mục đích của việc 'tiên đoán trước về dữ liệu' khi hệ thống chưa có dữ liệu là gì?",
  ["Để rút ngắn thời gian chờ đợi khi xây dựng mô hình máy học trong tương lai", "Để lừa dối khách hàng", "Để bán dữ liệu giả", "Để giảm dung lượng lưu trữ"],
  "Slide 08: Tiên đoán trước về dữ liệu để rút ngắn thời gian chờ đợi khi xây dựng mô hình máy học, không thể chờ tới khi hệ thống có dữ liệu thật mới làm."),

S("q30", 5, 3, "Tại sao bước (4) 'Class Modeling' lại nằm trong phiên PREPARING DATA mà không phải BUILD MODEL?",
  ["Vì đây là bước chuẩn bị cấu trúc dữ liệu (tạo các class/đối tượng ánh xạ) trước khi tiến hành lọc/nạp dữ liệu (bước 5)", "Vì bước này liên quan đến việc train mô hình", "Vì bước này đánh giá mô hình", "Vì bước này lưu mô hình"],
  "Slide 08: PREPARING DATA bao gồm các bước (2),(3),(4): Database -> Clean/Normalize -> Class Modeling. Đây là khâu chuẩn bị tư liệu trước khi Build."),
];
module.exports = QUESTIONS_C5;