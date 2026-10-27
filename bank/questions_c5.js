// ============================================================================
// CHƯƠNG 5: Thiết kế hệ thống máy học (MLBA)
// Nguồn: Slide 08 - Thiết kế hệ thống máy học
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c5-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c5-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

// Mô tả lưu đồ dùng chung cho các câu hỏi
const FLOW = "Quy trình tích hợp mô hình máy học vào hệ thống gồm các bước: (0) Consumers, (1) A Service System - Activities & Transactions, (2) Database, (3) Clean and normalize data, (4) Class Modeling For Database, (5) Filter and load data, (6) Select Algorithms, (7) Train model, (8) Evaluate & Improve Model, (9) Save model, (10) Load Model, (11) Integrated and Invoke ML Model. ";

const QUESTIONS_C5 = [
// ================= 5.1 XÁC ĐỊNH NHU CẦU =================
M("q31", 5, 1, "Mục tiêu khi thiết kế hệ thống máy học trong kinh doanh gồm những gì?",
  ["Xác định nhu cầu sử dụng mô hình máy học vào hoạt động kinh doanh, quản lý", "Đề xuất mô hình máy học phù hợp với từng yêu cầu cụ thể", "Giải thích các bước xử lý và tích hợp mô hình vào hệ thống kinh doanh", "Thay thế toàn bộ hệ thống quản lý bằng mô hình máy học"], 3,
  "Mô hình máy học là thành phần tích hợp, không thay thế hệ thống quản lý."),

S("q32", 5, 2, "Trước khi tích hợp máy học vào hệ thống, ta cần hiểu những gì?",
  ["Mô hình tổng quan của máy học, các bước xây dựng mô hình và cách tích hợp vào hệ thống có sẵn hoặc chưa có, tùy thiết kế CSDL và loại dữ liệu", "Chỉ cần biết một thư viện máy học", "Chỉ cần có phần cứng mạnh", "Chỉ cần dữ liệu thật nhiều"],
  "Cách tích hợp phụ thuộc nhu cầu sử dụng, thiết kế cấu trúc CSDL và loại dữ liệu."),

S("q4", 5, 2, "Phát biểu nào đúng về quy trình xây dựng mô hình máy học?",
  ["Phụ thuộc kinh nghiệm và tư tưởng của kỹ sư, mỗi người có thể có quy trình khác nhau nhưng có các điểm chung cơ bản", "Chỉ có một quy trình chuẩn duy nhất", "Không cần quy trình", "Chỉ do chuyên gia dữ liệu của Google quy định"],
  "Các điểm chung: chuẩn bị dữ liệu, xây dựng mô hình, sử dụng mô hình."),

S("q1", 5, 1, "Phát biểu nào đúng về mô hình máy học?",
  ["Không có mô hình máy học nào sai, chỉ có mô hình phù hợp hay chưa phù hợp", "Mô hình đã chạy tốt với dữ liệu X thì chắc chắn chạy tốt với mọi dữ liệu", "Mô hình chỉ cần huấn luyện một lần là dùng mãi", "Mô hình phức tạp luôn tốt hơn mô hình đơn giản"],
  "Mô hình có thể tốt với tập dữ liệu X nhưng chưa chắc tốt với tập dữ liệu Y."),

S("q3", 5, 2, "Vì sao cần cải tiến mô hình máy học thường xuyên?",
  ["Vì khi nhu cầu hoặc dữ liệu thay đổi đáng kể, mô hình có thể không còn phù hợp", "Vì thư viện máy học thay đổi phiên bản hằng ngày", "Vì mô hình tự hỏng theo thời gian dù dữ liệu không đổi", "Vì quy định pháp luật bắt buộc"],
  "Mô hình phù hợp với dữ liệu X chưa chắc phù hợp với dữ liệu Y."),

// ================= 5.2 - 5.3 DỮ LIỆU VÀ NHU CẦU =================
S("q33", 5, 1, "Trường hợp 'Dữ liệu kinh doanh có trước, nhu cầu máy học có sau' nghĩa là gì?",
  ["Dữ liệu đã có sẵn trong hệ thống, ý tưởng máy học hình thành dựa trên dữ liệu đã được thiết kế, cấu trúc trước", "Chưa có dữ liệu, phải giả lập", "Không cần dữ liệu", "Mua dữ liệu từ đối thủ"],
  "Khi đó mô hình máy học đóng vai trò như một tiện ích mở rộng của hệ thống."),

S("q2", 5, 2, "Trường hợp 'Nhu cầu máy học có trước, dữ liệu kinh doanh có sau' cần xử lý thế nào?",
  ["Giả lập dữ liệu hoặc dùng dữ liệu ngoài hệ thống; khi vận hành thiết kế dữ liệu tương thích với dữ liệu giả lập/thử nghiệm", "Đợi hệ thống có đủ dữ liệu mới bắt đầu", "Bỏ ý tưởng máy học", "Dùng dữ liệu bất kỳ không cần tương thích"],
  "Ta thiết kế hệ thống đáp ứng ý tưởng mô hình máy học."),

S("q29", 5, 2, "Mục đích của việc 'tiên đoán trước về dữ liệu' khi hệ thống chưa có dữ liệu là gì?",
  ["Rút ngắn thời gian chờ đợi khi xây dựng mô hình máy học", "Tăng dung lượng CSDL", "Giảm số bảng trong CSDL", "Tránh phải huấn luyện mô hình"],
  "Không thể chờ tới khi hệ thống có dữ liệu."),

S("q25", 5, 2, "Một công ty muốn xây dựng mô hình dự báo nhu cầu du lịch nhưng chưa có dữ liệu. Hướng đi hợp lý là gì?",
  ["Giả lập dữ liệu hoặc dùng dữ liệu ngoài hệ thống, rồi thiết kế hệ thống để thu thập dữ liệu tương thích khi vận hành", "Đợi 5 năm cho đủ dữ liệu", "Chuyển sang bài toán khác", "Dùng dữ liệu bán lẻ có sẵn mà không chỉnh sửa"],
  "Đây là trường hợp nhu cầu máy học có trước, dữ liệu có sau."),

S("q34", 5, 2, "Trong trường hợp hệ thống và dữ liệu đã có sẵn, mô hình máy học được tích hợp vào với vai trò gì?",
  ["Một tiện ích mở rộng của hệ thống", "Hệ thống thay thế hoàn toàn", "Cơ sở dữ liệu chính", "Giao diện người dùng mới"],
  "Mô hình hỗ trợ thêm chức năng như gợi ý, dự báo."),

// ================= 5.4 CÁC BƯỚC (LƯU ĐỒ) =================
S("q5", 5, 1, "Quy trình xây dựng và tích hợp mô hình máy học thường gồm 3 phiên chính nào?",
  ["PREPARING DATA, BUILD MODEL, USE MODEL", "COLLECT, TRAIN, DELETE", "INPUT, PROCESS, OUTPUT", "DESIGN, CODE, TEST"],
  "Mỗi phiên gồm nhiều bước cụ thể."),

S("q6", 5, 1, FLOW + "Bước (0) đại diện cho thành phần nào?",
  ["Người dùng/khách hàng (Consumers)", "Cơ sở dữ liệu", "Mô hình máy học", "Thuật toán"],
  "Khách hàng tương tác với hệ thống dịch vụ ở bước (1)."),

S("q7", 5, 1, FLOW + "Các hoạt động của khách hàng như tương tác sản phẩm, comment, review, đặt hàng trên hệ thống (1) được lưu vào đâu?",
  ["Database (2)", "Model (9)", "Select Algorithms (6)", "Load Model (10)"],
  "Database cần được lưu trữ và tiền xử lý tốt."),

M("q35", 5, 2, FLOW + "Những bước nào thuộc phiên PREPARING DATA?",
  ["(2) Database", "(3) Clean and normalize data", "(4) Class Modeling For Database", "(7) Train model"], 3,
  "Train model thuộc phiên BUILD MODEL."),

S("q8", 5, 2, "Mục đích của bước 'Clean and normalize data' là gì?",
  ["Làm sạch và chuẩn hóa dữ liệu; tùy dữ liệu và bài toán có thể thêm nhiều bước con với kỹ thuật khác nhau", "Xóa toàn bộ dữ liệu cũ", "Mã hóa dữ liệu để bảo mật", "Sao lưu dữ liệu ra file"],
  "Vì CSDL không phải lúc nào cũng lưu dữ liệu tốt, tối ưu."),

S("q9", 5, 2, "Bước 'Class Modeling For Database' (mô hình hóa hướng đối tượng cho dữ liệu) nhằm mục đích gì?",
  ["Giúp việc lập trình, xử lý dữ liệu và mô hình được dễ dàng, tốt hơn", "Vẽ sơ đồ ERD để nộp báo cáo", "Tạo giao diện người dùng", "Đánh giá độ chính xác mô hình"],
  "Mỗi bảng dữ liệu được ánh xạ thành lớp đối tượng tương ứng."),

S("q10", 5, 1, "Vì sao phải chuẩn bị dữ liệu thật tốt trước khi xây dựng mô hình?",
  ["Theo nguyên tắc Garbage In - Garbage Out: dữ liệu không tốt thì mô hình không tốt", "Để tốn ít dung lượng ổ cứng", "Để giao diện đẹp hơn", "Vì thuật toán không đọc được số"],
  "CSDL có thể chứa dữ liệu không có ích cho quá trình build mô hình."),

S("q20", 5, 2, "Database chứa nhiều dữ liệu lỗi, khuyết thiếu nhưng vẫn được đưa thẳng vào huấn luyện mà không làm sạch. Điều gì xảy ra?",
  ["Mô hình kém chất lượng theo nguyên tắc Garbage In - Garbage Out", "Thuật toán tự sửa dữ liệu", "Mô hình chính xác hơn vì có nhiều dữ liệu", "Không ảnh hưởng gì"],
  "Cần bước Clean and normalize data."),

M("q36", 5, 2, FLOW + "Những bước nào thuộc phiên BUILD MODEL?",
  ["(5) Filter and load data, (6) Select Algorithms", "(7) Train model", "(8) Evaluate & Improve Model, (9) Save model", "(10) Load Model"], 3,
  "Load Model thuộc phiên USE MODEL."),

S("q19", 5, 2, "Thứ tự đúng của các bước trong phiên BUILD MODEL là gì?",
  ["Filter and load data -> Select Algorithms -> Train model -> Evaluate & Improve Model -> Save model", "Select Algorithms -> Train model -> Filter and load data -> Save model -> Evaluate", "Train model -> Filter and load data -> Save model -> Select Algorithms", "Save model -> Train model -> Evaluate -> Filter"],
  "Từ bước (5) đến bước (9)."),

S("q11", 5, 1, "Bước 'Filter and load data' gồm những công việc gì?",
  ["Lọc, nạp dữ liệu; chọn các thuộc tính/biến phù hợp và tỉ lệ train/test", "Xóa dữ liệu trùng", "Lưu mô hình", "Hiển thị kết quả"],
  "Các lựa chọn này ảnh hưởng tới chất lượng mô hình."),

S("q37", 5, 2, "Việc chọn tỉ lệ dữ liệu train/test (ví dụ 80/20 hay 70/30) thuộc bước nào?",
  ["Filter and load data", "Select Algorithms", "Save model", "Integrated and Invoke ML Model"],
  "Bước (5) chọn thuộc tính và tỉ lệ train/test."),

S("q12", 5, 2, "Ở bước 'Select Algorithms', ta lựa chọn gì?",
  ["Giải thuật phù hợp với loại bài toán (Classification, Clustering, Time Series...) và các tham số đầu vào", "Ngôn ngữ lập trình", "Hệ quản trị CSDL", "Màu sắc giao diện"],
  "Ví dụ bài toán Clustering thì có thể dùng K-Means."),

S("q38", 5, 1, "Bước 'Train model' làm gì?",
  ["Huấn luyện mô hình từ tập dữ liệu, giải thuật và các tham số đã chọn", "Lưu mô hình ra ổ cứng", "Tải mô hình", "Làm sạch dữ liệu"],
  "Bước (7)."),

S("q13", 5, 2, "Sau khi đánh giá ở bước Evaluate & Improve Model, mô hình không đạt chất lượng. Ta có thể quay lại đâu?",
  ["Quay lại bước Filter and load data (5) hoặc quay lại phiên PREPARING DATA", "Chuyển thẳng sang Save model", "Bắt đầu Load Model", "Kết thúc và dùng mô hình"],
  "Cả hai nơi đều có thể là nguyên nhân khiến mô hình chưa đạt."),

M("q26", 5, 2, "Ở bước đánh giá mô hình hồi quy, có thể dùng những độ đo nào?",
  ["MAE", "MSE", "RMSE", "Elbow point"], 3,
  "Elbow dùng để chọn số cụm cho K-Means."),

S("q14", 5, 2, "Vì sao cần bước 'Save model' (xuất mô hình ra ổ cứng)?",
  ["Huấn luyện rất tốn thời gian, khách hàng không thể chờ; lưu lại để các lần sau chỉ cần tải mô hình và tích hợp", "Để xóa mô hình cũ", "Để chia sẻ lên mạng xã hội", "Vì mô hình chỉ chạy được trên ổ cứng"],
  "Ví dụ gợi ý sản phẩm trên sàn thương mại điện tử cần phản hồi ngay."),

M("q39", 5, 2, FLOW + "Những bước nào thuộc phiên USE MODEL?",
  ["(10) Load Model", "(11) Integrated and Invoke ML Model", "(9) Save model", "(3) Clean and normalize data"], 2,
  "Save model là bước cuối của BUILD MODEL."),

S("q15", 5, 1, "Bước 'Load Model' trong phiên USE MODEL làm gì?",
  ["Tải mô hình đã lưu để sử dụng, ví dụ khi khách hàng đăng nhập sàn thương mại điện tử cần gợi ý sản phẩm", "Huấn luyện lại mô hình", "Xóa mô hình", "Chọn thuật toán"],
  "Sau đó tích hợp mô hình vào hệ thống ở bước (11)."),

S("q16", 5, 2, "Bước 'Integrated and Invoke ML Model' làm gì?",
  ["Tích hợp mô hình vào hệ thống và triệu gọi các hàm predict để đưa ra kết quả phù hợp cho khách hàng", "Thu thập dữ liệu mới", "Chuẩn hóa dữ liệu", "Đánh giá MSE"],
  "Bước (11)."),

S("q18", 5, 3, "Mô hình gợi ý sản phẩm đã được lưu từ trước. Khi một khách hàng mới đăng nhập, hệ thống thực hiện những bước nào?",
  ["Load Model rồi Integrated and Invoke ML Model (gọi predict) để đưa ra gợi ý", "Train lại mô hình từ đầu rồi mới gợi ý", "Clean and normalize data rồi Save model", "Select Algorithms rồi Train model"],
  "Không cần huấn luyện lại vì mô hình đã lưu."),

S("q17", 5, 2, "Sau khi hệ thống đưa ra gợi ý, khách hàng tiếp tục tương tác và hệ thống lại lưu dữ liệu vào CSDL. Điều này tạo thành gì?",
  ["Một vòng tròn khép kín: dữ liệu mới liên tục được tích lũy để cải tiến mô hình", "Một vòng lặp vô hạn gây lỗi", "Quá trình xóa dữ liệu cũ", "Quá trình sao lưu"],
  "Mỗi lần khách hàng tương tác thì hệ thống lại lưu vào CSDL."),

S("q40", 5, 2, "Theo thời gian, sở thích khách hàng thay đổi (tháng 1 thích món này, tháng 2 thích món khác). Hệ quả với mô hình máy học là gì?",
  ["Mô hình có thể không còn chất lượng, cần đánh giá lại và có thể build lại để cải tiến", "Mô hình tự cập nhật không cần làm gì", "Phải xóa toàn bộ dữ liệu", "Không ảnh hưởng gì"],
  "Cứ thế cải tiến mô hình để có dịch vụ tốt nhất cho khách hàng."),

S("q28", 5, 2, "Quan hệ giữa hệ thống dịch vụ (A Service System) và Database trong quy trình là gì?",
  ["Hoạt động và giao dịch trên hệ thống dịch vụ được lưu vào Database, làm nguồn dữ liệu cho mô hình", "Database gửi email cho hệ thống dịch vụ", "Hai thành phần độc lập không liên quan", "Hệ thống dịch vụ chỉ đọc mô hình, không ghi dữ liệu"],
  "Từ (1) Activities & Transactions đến (2) Database."),

S("q27", 5, 3, "Vì sao bước Class Modeling được đặt trong phiên PREPARING DATA mà không phải BUILD MODEL?",
  ["Vì nó tổ chức dữ liệu thành các lớp đối tượng để dễ xử lý trước khi lọc, nạp và huấn luyện", "Vì nó dùng để huấn luyện mô hình", "Vì nó lưu mô hình", "Vì nó hiển thị giao diện"],
  "Dữ liệu được làm sạch, chuẩn hóa và mô hình hóa trước khi build."),

M("q41", 5, 2, "Những đề xuất mô hình máy học nào là đề tài thảo luận khi thiết kế hệ thống máy học?",
  ["Dự báo nhu cầu du lịch", "Mô hình về chăm sóc sức khỏe", "Đánh giá phản hồi khách hàng trên sàn thương mại điện tử để nâng cao chất lượng dịch vụ", "Thiết kế logo công ty"], 3,
  "Mỗi đề xuất cần đi qua 3 phiên PREPARING DATA, BUILD MODEL, USE MODEL."),

// ================= 6. QUY TRÌNH PHẦN MỀM PYQT6 TÍCH HỢP ML =================
S("q21", 5, 1, "Framework giao diện Python nào được dùng để xây dựng phần mềm phân tích kinh doanh tích hợp máy học?",
  ["PyQt6", "Django", "React", "Flutter"],
  "Ngoài ra còn công nghệ Microsoft (Windows Forms, ML.NET)."),

M("q22", 5, 2, "Những bước nào nằm trong quy trình xây dựng phần mềm phân tích kinh doanh tích hợp máy học bằng PyQt6?",
  ["Mô tả bài toán; thiết kế Proposal và Prototype/Mockup", "Thiết kế CSDL và thu thập/giả lập dữ liệu; thiết kế lớp đối tượng và thư viện phụ trợ", "Thiết kế màn hình; tiền xử lý; chọn tỉ lệ train/test và giải thuật", "Mua bản quyền PyQt6 trước khi phân tích yêu cầu"], 3,
  "Tiếp theo là train, đánh giá, lưu, sử dụng mô hình và ra quyết định kinh doanh."),

S("q23", 5, 2, "Trong quy trình xây dựng phần mềm tích hợp máy học, bước ngay sau 'Đánh giá chất lượng mô hình máy học' là gì?",
  ["Lưu mô hình máy học", "Train mô hình máy học", "Tiền xử lý dữ liệu", "Mô tả bài toán"],
  "Thứ tự: Train -> Đánh giá -> Lưu -> Sử dụng -> Nhận xét và ra quyết định."),

S("q24", 5, 2, "Bước cuối cùng trong quy trình xây dựng phần mềm phân tích kinh doanh tích hợp máy học là gì?",
  ["Nhận xét và ra quyết định kinh doanh từ kết quả máy học đề xuất", "Lưu mô hình", "Thiết kế giao diện", "Thu thập dữ liệu"],
  "Mục tiêu cuối cùng là hỗ trợ ra quyết định kinh doanh."),

S("q42", 5, 2, "Trong quy trình phần mềm tích hợp máy học, bước 'Thiết kế Proposal và Prototype/Mockup' diễn ra khi nào?",
  ["Ngay sau khi mô tả bài toán, trước khi thiết kế CSDL", "Sau khi train mô hình", "Sau khi lưu mô hình", "Ở bước cuối cùng"],
  "Prototype/Mockup giúp thống nhất yêu cầu trước khi xây dựng."),

S("q30", 5, 2, "Sau khi phần mềm vận hành, chất lượng mô hình giảm dần. Cần làm gì?",
  ["Thu thập phản hồi, đánh giá lại và cải thiện chất lượng mô hình trong quá trình sử dụng", "Gỡ phần mềm", "Bỏ qua vì mô hình không thay đổi", "Xóa dữ liệu mới"],
  "Phản hồi và cải thiện chất lượng mô hình là bước cuối trong các bước cần thiết của hệ thống máy học ứng dụng."),
];
module.exports = QUESTIONS_C5;
