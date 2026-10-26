// ============================================================================
// CHƯƠNG 1: Tổng quan về Máy học (MLBA) - Bao gồm Ôn tập Python
// Soạn dựa trên Slide 02 và 03 của TS. Trần Duy Thanh
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c1-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c1-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C1 = [
// ================= PHẦN 0: ÔN TẬP PYTHON - HÀM =================
S("q1", 1, 1, "Trong Python, từ khóa nào được sử dụng để định nghĩa một hàm (function)?",
  ["def", "function", "fun", "define"],
  "Slide 02: Hàm được định nghĩa với từ khóa `def`."),

S("q2", 1, 2, "Cơ chế hoạt động của hàm trong Python tuân theo nguyên lý nào?",
  ["LIFO (Last In First Out)", "FIFO (First In First Out)", "LILO (Last In Last Out)", "FILO (First In Last Out)"],
  "Slide 02: Hàm trong Python hoạt động theo cơ chế LIFO (Vào sau ra trước - giống như ngăn xếp Stack)."),

S("q3", 1, 2, "Khi muốn một biến bên trong hàm có thể thay đổi giá trị của một biến toàn cục (global) bên ngoài, ta sử dụng từ khóa nào?",
  ["global", "public", "static", "extern"],
  "Slide 02: Sử dụng từ khóa `global` trước tên biến để khai báo rằng biến đó là biến toàn cục, nếu không có từ khóa này, Python sẽ hiểu đó là biến local."),

S("q4", 1, 2, "Cho đoạn code:\n`x = 8`\n`def increment():`\n`    global x`\n`    x = 6`\n`    x = x + 1`\n`increment()`\n`print(x)`\nKết quả in ra là gì?",
  ["7", "8", "9", "Lỗi cú pháp"],
  "Slide 02: Do có từ khóa `global x`, biến x bên ngoài bị thay đổi. x được gán bằng 6, sau đó x = x + 1 thành 7. Kết quả in ra là 7."),

// ================= PHẦN 0: ÔN TẬP PYTHON - LIST =================
S("q5", 1, 1, "Trong Python, list là gì?",
  ["Một collection dùng lưu trữ các phần tử theo thứ tự, có thể chứa nhiều kiểu dữ liệu khác nhau", "Một mảng chỉ chứa các số nguyên", "Một tập hợp không có thứ tự và không thể thay đổi", "Một từ điển lưu trữ cặp key-value"],
  "Slide 02: List là một collection dùng lưu trữ các phần tử theo thứ tự, các phần tử có thể thuộc nhiều kiểu dữ liệu khác nhau."),

S("q6", 1, 2, "Cho list sau: `my_list = ['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']`. Lệnh `my_list[3:6]` trả về kết quả gì?",
  ["['Golang', 'C#', 'Java']", "['Perl', 'Ruby', 'Golang']", "['C#', 'Java', 'Swift']", "['Golang', 'C#', 'Java', 'Swift']"],
  "Slide 02: Cắt list từ index 3 đến index 5 (6-1). Kết quả: `['Golang', 'C#', 'Java']`."),

S("q7", 1, 2, "Cho list sau: `my_list = ['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']`. Lệnh `my_list[-2:]` trả về kết quả gì?",
  ["['Java', 'Swift']", "['C#', 'Java']", "['Python', 'Perl']", "['Swift']"],
  "Slide 02: Index âm đếm từ cuối mảng. `-2:` lấy từ phần tử áp chót đến hết. Kết quả: `['Java', 'Swift']`."),

S("q8", 1, 3, "Đoạn code sau in ra kết quả gì?\n`list_1 = [1, 2, 3, 4]`\n`list_2 = list_1`\n`list_1[0] = 9`\n`print(list_2)`",
  ["[9, 2, 3, 4]", "[1, 2, 3, 4]", "[9, 2, 3, 4, 1, 2, 3, 4]", "Lỗi"],
  "Slide 02: Phép gán `list_2 = list_1` trong Python là gán tham chiếu (reference). Cả 2 biến cùng trỏ vào 1 vùng nhớ. Do đó khi sửa list_1, list_2 cũng thay đổi theo."),

S("q9", 1, 3, "Để tạo một bản sao độc lập (copy) của list_1 sang list_2 (thay đổi list_1 không ảnh hưởng list_2), ta dùng lệnh nào?",
  ["list_2 = list(list_1) hoặc list_1.copy()", "list_2 = list_1", "list_2 = list_1[]", "list_2 = copy(list_1)"],
  "Slide 02: Sử dụng hàm khởi tạo `list(list_1)` hoặc phương thức `.copy()` để tạo bản sao nông (shallow copy)."),

S("q10", 1, 2, "Phương thức `append()` và `extend()` của List trong Python khác nhau như thế nào?",
  ["`append()` thêm 1 phần tử (có thể là 1 list) vào cuối, `extend()` thêm từng phần tử của một iterable vào cuối", "`append()` thêm nhiều phần tử, `extend()` chỉ thêm 1 phần tử", "Cả hai hoàn toàn giống nhau", "`append()` thêm vào đầu, `extend()` thêm vào cuối"],
  "Slide 02: append thêm nguyên vẹn đối tượng (nếu là list sẽ tạo list lồng nhau). extend sẽ bóc tách các phần tử của list con để nối vào list mẹ."),

S("q11", 1, 2, "Phương thức `pop()` của List khi không truyền tham số sẽ làm gì?",
  ["Xóa và trả về phần tử cuối cùng của list", "Xóa và trả về phần tử đầu tiên", "Xóa toàn bộ list", "Sắp xếp lại list"],
  "Slide 02: `pop()` mặc định xóa phần tử ở cuối. `pop(index)` sẽ xóa phần tử tại vị trí index."),

S("q12", 1, 2, "Để kiểm tra phần tử `7` có nằm trong list `my_list` hay không, ta dùng cú pháp nào?",
  ["7 in my_list", "my_list.contains(7)", "my_list.indexOf(7)", "7 exists my_list"],
  "Slide 02: Sử dụng toán tử `in` để kiểm tra sự tồn tại của phần tử trong list."),

S("q13", 1, 3, "Cho code:\n`my_list = ['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']`\n`print(my_list[::-1])`\nKết quả là gì?",
  ["['Swift', 'Java', 'C#', 'Golang', 'Ruby', 'Perl', 'Python']", "['Python', 'Perl', 'Ruby', 'Golang', 'C#', 'Java', 'Swift']", "['Swift', 'Java', 'C#']", "Lỗi cú pháp"],
  "Slide 02: Cú pháp `[::-1]` dùng để đảo ngược list trong Python."),

// ================= PHẦN 0: ÔN TẬP PYTHON - CLASS & SERIALIZE =================
S("q14", 1, 2, "Trong Python, phương thức nào được gọi tự động khi một đối tượng (object) được khởi tạo từ lớp (class)?",
  ["__init__", "__str__", "__main__", "__del__"],
  "Slide 02: `__init__` là hàm khởi tạo (constructor) của lớp, được gọi tự động khi tạo đối tượng. `__str__` dùng để định nghĩa chuỗi khi in đối tượng."),

S("q15", 1, 3, "Module `json` trong Python cung cấp hàm nào để chuyển đổi một đối tượng Python (dict, list) thành chuỗi JSON?",
  ["json.dumps()", "json.loads()", "json.dump()", "json.load()"],
  "Slide 02: `json.dumps()` chuyển object thành string JSON. `json.loads()` chuyển string JSON thành object."),

S("q16", 1, 3, "Cho đoạn code Serialize/Deserialize:\n`def writeData(self,path,arrData):`\n`    jsonString = json.dumps([item.__dict__ for item in arrData], default=str)`\n`    jsonFile = open(path, \"w\")`\n`    jsonFile.write(jsonString)`\n`    jsonFile.close()`\nTại sao lại dùng `item.__dict__`?",
  ["Để lấy toàn bộ thuộc tính (dưới dạng dict) của đối tượng item", "Để lấy tên class của item", "Để chuyển item thành chuỗi string", "Để gọi hàm khởi tạo của item"],
  "Slide 02: `__dict__` là thuộc tính đặc biệt chứa tất cả các biến instance của đối tượng dưới dạng dictionary, giúp dễ dàng chuyển sang JSON."),

// ================= PHẦN 1.1: TRÍ TUỆ NHÂN TẠO VÀ MÁY HỌC =================
S("q17", 1, 1, "Trí tuệ nhân tạo (AI) được định nghĩa là gì?",
  ["Trí thông minh được thể hiện bằng máy móc, bắt chước các chức năng nhận thức của con người", "Một hệ thống tự động hóa mọi công việc văn phòng", "Một loại cơ sở dữ liệu thông minh", "Một ngôn ngữ lập trình mới"],
  "Slide 02: AI là trí thông minh được thể hiện bằng máy móc, bắt chước các chức năng 'nhận thức' như 'học tập' và 'giải quyết vấn đề'."),

S("q18", 1, 2, "Máy học (Machine Learning) là gì?",
  ["Là môn khoa học phát triển các thuật toán và mô hình thống kê để hệ thống máy tính thực hiện tác vụ dựa vào khuôn mẫu mà không cần hướng dẫn cụ thể", "Là việc lập trình các quy tắc if-else thật chi tiết cho máy tính", "Là công nghệ chế tạo phần cứng máy tính", "Là phương pháp lưu trữ dữ liệu trên đám mây"],
  "Slide 02: ML phát triển thuật toán/mô hình thống kê giúp máy tính học từ khuôn mẫu dữ liệu quá khứ mà không cần hướng dẫn cụ thể."),

S("q19", 1, 2, "Học sâu (Deep Learning) được lấy cảm hứng từ đâu?",
  ["Bộ não con người", "Tốc độ của máy tính lượng tử", "Cấu trúc của Internet", "Cách hoạt động của động cơ"],
  "Slide 02: Deep Learning xử lý dữ liệu theo cách được lấy cảm hứng từ bộ não con người (mạng nơ-ron)."),

S("q20", 1, 1, "Phát biểu nào sau đây là ĐÚNG về mối quan hệ giữa AI, ML và DL?",
  ["AI bao trùm ML, ML bao trùm DL (AI > ML > DL)", "DL bao trùm ML, ML bao trùm AI", "ML bao trùm AI, AI bao trùm DL", "Ba khái niệm này hoàn toàn độc lập"],
  "Slide 02: AI là tập hợp lớn nhất. ML là một tập con của AI. DL là một tập con của ML."),

S("q21", 1, 2, "Mục đích chính của việc áp dụng máy học trong sản xuất là gì?",
  ["Bảo trì dự đoán, kiểm soát chất lượng và nghiên cứu đổi mới", "Chỉ để thay thế hoàn toàn công nhân", "Chỉ để tính lương tự động", "Để tự động hóa việc in ấn tài liệu"],
  "Slide 02: ML hỗ trợ bảo trì dự đoán, kiểm soát chất lượng, nghiên cứu đổi mới, cải thiện logistics, chuỗi cung ứng."),

M("q22", 1, 2, "Trong lĩnh vực dịch vụ tài chính, máy học được ứng dụng để làm gì?",
  ["Phân tích rủi ro", "Dự đoán giá cổ phiếu", "Phát hiện gian lận", "Chẩn đoán bệnh ung thư"], 3,
  "Slide 02: Tài chính: phân tích rủi ro, dự đoán chứng khoán, đánh giá quỹ, phát hiện gian lận. Chẩn đoán ung thư thuộc y tế."),

S("q23", 1, 3, "Theo slide, phát biểu nào sau đây về AI và ML là ĐÚNG? (Dựa vào bảng so sánh)",
  ["Tất cả các giải pháp ML đều là giải pháp AI, nhưng không phải tất cả AI đều là ML", "Tất cả AI đều là ML", "AI và ML là một", "ML không thể dùng để xác định mẫu hình trong dữ liệu lớn"],
  "Slide 02: ML là một phương pháp AI. Tất cả các giải pháp ML đều là các giải pháp AI. AI có thể dùng các phương pháp khác như dựa trên quy tắc, thị giác máy tính."),

S("q24", 1, 2, "Theo TS. Trần Duy Thanh, phát biểu nào sau đây là đúng về nỗi sợ AI thay thế con người?",
  ["AI chỉ thay thế những công việc nhàm chán (STUPID JOB), đồng thời tạo ra nhiều ngành nghề mới", "AI sẽ sớm thay thế hoàn toàn con người trong mọi lĩnh vực", "AI không bao giờ ảnh hưởng đến việc làm", "Học AI chỉ để đối phó với các trung tâm lùa gà"],
  "Slide 02: Công nghệ mới tạo ra nhiều công việc mới. AI chỉ thay thế những công việc nhàm chán, không thay thế toàn bộ con người."),

// ================= PHẦN 1.2: PHÂN LOẠI BÀI TOÁN ML =================
S("q25", 1, 1, "Bài toán Classification (Phân loại) có đặc điểm gì?",
  ["Yêu cầu chỉ ra nhãn (label) hoặc lớp của một điểm dữ liệu", "Dự đoán một giá trị số liên tục", "Phân nhóm dữ liệu dựa trên sự tương đồng mà không cần nhãn", "Điền các giá trị còn thiếu vào dữ liệu"],
  "Slide 02: Classification chỉ ra nhãn/lớp của dữ liệu. Ví dụ: phân loại nợ xấu, phân loại hình ảnh."),

S("q26", 1, 1, "Bài toán Clustering (Phân cụm) khác gì với Classification?",
  ["Clustering phân nhóm dữ liệu dựa trên sự liên quan mà không cần biết trước nhãn", "Clustering cần nhãn dữ liệu, Classification thì không", "Clustering dự đoán số, Classification dự đoán chữ", "Cả hai hoàn toàn giống nhau"],
  "Slide 02: Clustering là phân nhóm toàn bộ dữ liệu thành các nhóm nhỏ dựa trên sự liên quan (học không giám sát), không cần nhãn trước."),

S("q27", 1, 1, "Bài toán Regression (Hồi quy) có đặc điểm gì?",
  ["Nhãn là các giá trị thực, có thể là vô hạn", "Nhãn được chia thành các nhóm hữu hạn", "Không cần dữ liệu đầu vào", "Chỉ dùng để phân cụm khách hàng"],
  "Slide 02: Regression dự đoán giá trị thực (liên tục). Ví dụ: ước lượng giá nhà."),

S("q28", 1, 2, "Dựa vào sơ đồ 'A Suggestion from Scikit-learn', nếu bạn có ít hơn 100K mẫu, dữ liệu có nhãn (labeled data) và muốn dự đoán một danh mục (predicting a category), bạn nên dùng nhóm thuật toán nào?",
  ["Classification (ví dụ: SVC, KNeighbors Classifier, Naive Bayes)", "Regression (ví dụ: Lasso, RidgeRegression)", "Clustering (ví dụ: KMeans, GMM)", "Dimensionality reduction (ví dụ: PCA, Isomap)"],
  "Slide 02: Sơ đồ Scikit-learn: Dữ liệu có nhãn -> Dự đoán danh mục -> Classification. Nếu <100K mẫu, đi theo nhánh: Linear SVC, KNeighbors Classifier, Naive Bayes."),

S("q29", 1, 2, "Dựa vào sơ đồ Scikit-learn, nếu bạn muốn dự đoán một giá trị số lượng (predicting a quantity) và bạn có ít hơn 100K mẫu, bạn nên dùng nhóm thuật toán nào?",
  ["Regression (ví dụ: Lasso, ElasticNet, RidgeRegression)", "Classification (ví dụ: SVC)", "Clustering (ví dụ: KMeans)", "Dimensionality reduction (ví dụ: PCA)"],
  "Slide 02: Dự đoán số lượng -> Regression. Với <100K mẫu, dùng Lasso, ElasticNet, RidgeRegression, SVR."),

// ================= PHẦN 1.2.4: COMPLETION (ĐIỀN KHUYẾT) =================
S("q30", 1, 1, "Bài toán Completion là gì?",
  ["Điền những giá trị còn thiếu của một điểm dữ liệu dựa trên mối tương quan", "Xóa các dòng dữ liệu bị thiếu", "Dịch văn bản sang ngôn ngữ khác", "Dự đoán nhãn phân loại"],
  "Slide 03: Completion là điền giá trị còn thiếu. Ví dụ: khách hàng không đánh giá sản phẩm, ta cần dự đoán đánh giá của họ."),

S("q31", 1, 2, "Trong Python (pandas), để LỌC BỎ các dòng có chứa giá trị thiếu (Missing Data), ta dùng hàm nào?",
  ["data.dropna()", "data.fillna()", "data.remove_na()", "data.delete_missing()"],
  "Slide 03: `dropna()` dùng để lọc bỏ dữ liệu thiếu. `fillna()` dùng để điền dữ liệu thiếu."),

S("q32", 1, 3, "Cho đoạn code pandas:\n`cleaned2 = data.dropna(how='all')`\nLệnh này có tác dụng gì?",
  ["Chỉ xóa những dòng mà TẤT CẢ các cột đều bị thiếu (NA)", "Xóa tất cả các dòng có bất kỳ cột nào bị thiếu", "Điền giá trị NA bằng 0", "Chỉ giữ lại những dòng có giá trị thiếu"],
  "Slide 03: `how='all'` chỉ drop dòng nếu tất cả giá trị trong dòng đó đều là NA. Mặc định `dropna()` là xóa nếu có bất kỳ NA."),

S("q33", 1, 2, "Trong pandas, để ĐIỀN giá trị thiếu bằng giá trị trung bình của cột, ta dùng lệnh nào?",
  ["data.fillna(data.mean())", "data.dropna(data.mean())", "data.replace_na(data.mean())", "data.fill(data.mean())"],
  "Slide 03: `data.fillna(data.mean())` sẽ tính trung bình từng cột và điền vào các ô NA tương ứng."),

M("q34", 1, 2, "Bài toán Completion có thể ứng dụng trong những hệ thống nào sau đây?",
  ["Hệ thống khuyến nghị (Recommendation System)", "Bài toán Xếp hạng (Ranking)", "Bài toán truy xuất thông tin (Information Retrieval)", "Bài toán khử nhiễu (Denoising)"], 4,
  "Slide 03: Cả 4 lĩnh vực trên đều là ứng dụng của Completion."),

S("q35", 1, 3, "Phương pháp Ranking (Xếp hạng) nào biến bài toán xếp hạng thành bài toán Hồi quy (Regression)?",
  ["Phương pháp Pointwise", "Phương pháp Pairwise", "Phương pháp Listwise", "Phương pháp Weighted"],
  "Slide 03 (hình minh họa): Pointwise (Input: single candidate) -> Loss: dự đoán điểm s_i so với y_i -> Solution: Transform task into Regression."),

S("q36", 1, 3, "Phương pháp Ranking (Xếp hạng) nào biến bài toán xếp hạng thành bài toán Phân loại nhị phân (Binary Classification)?",
  ["Phương pháp Pairwise", "Phương pháp Pointwise", "Phương pháp Listwise", "Phương pháp Weighted"],
  "Slide 03 (hình minh họa): Pairwise (Input: pair of candidates) -> Loss: so sánh cặp điểm -> Solution: Transform task into Binary Classification."),

S("q37", 1, 2, "Sự khác biệt chính giữa Data Retrieval (Truy xuất dữ liệu) và Information Retrieval (Truy xuất thông tin) là gì?",
  ["Information Retrieval sử dụng các mô hình để tìm kết quả LIÊN QUAN nhất cho một truy vấn cụ thể, trong khi Data Retrieval chỉ tìm và thu thập dữ liệu thô", "Data Retrieval dùng AI, Information Retrieval không dùng AI", "Cả hai hoàn toàn giống nhau", "Data Retrieval chỉ dùng cho hình ảnh, Information Retrieval chỉ dùng cho văn bản"],
  "Slide 03: Information Retrieval dùng mô hình để tìm kết quả liên quan nhất dựa trên truy vấn. Data Retrieval chỉ là tìm và thu thập dữ liệu."),

// ================= PHẦN 1.2.5: MACHINE TRANSLATION (DỊCH MÁY) =================
S("q38", 1, 1, "Dịch máy (Machine Translation) là gì?",
  ["Sử dụng AI để tự động dịch văn bản từ ngôn ngữ này sang ngôn ngữ khác mà không cần con người", "Dịch văn bản bằng cách thuê người nước ngoài", "Chuyển đổi định dạng file từ PDF sang Word", "Dịch chuyển dữ liệu từ máy chủ này sang máy chủ khác"],
  "Slide 03: Dịch máy là quá trình sử dụng AI để tự động dịch văn bản mà không cần sự tham gia của con người."),

M("q39", 1, 2, "Những đóng góp/ưu điểm của Machine Translation là gì?",
  ["Hỗ trợ dịch tự động cho biên dịch viên", "Tốc độ nhanh và khối lượng lớn", "Hỗ trợ nhiều lựa chọn ngôn ngữ", "Dịch vụ tiết kiệm chi phí"], 4,
  "Slide 03: Cả 4 ý trên đều là ưu điểm của dịch máy."),

S("q40", 1, 3, "Mô hình dịch máy của Amazon (Amazon Translate) cho phép đầu vào (Input) từ những nguồn nào?",
  ["Amazon S3 (chứa tài liệu UTF-8) hoặc văn bản (Text)", "Chỉ nhận âm thanh (Audio)", "Chỉ nhận hình ảnh (Image)", "Chỉ nhận video (Video)"],
  "Slide 03: Mô hình Amazon Translate nhận input từ Amazon S3 (chứa tài liệu) hoặc Text (văn bản UTF-8)."),

S("q41", 1, 3, "Trong mô hình Google Translate, thành phần nào đảm nhận việc dịch văn bản chính?",
  ["Neural Machine Translation (NMT)", "Handwriting OCR", "Scene Text OCR", "Text-to-Speech Synthesis"],
  "Slide 03: Google Translate sử dụng NMT (Dịch máy nơ-ron) làm lõi xử lý văn bản chính."),

// ================= PHẦN 1.3: MÁY HỌC TRONG PHÂN TÍCH KINH DOANH =================
S("q42", 1, 2, "Máy học hỗ trợ các nhà phân tích kinh doanh (Business Analysts) theo hai cách chính nào?",
  ["Cung cấp thông tin chuyên sâu dựa trên phân tích và Tăng năng suất của nhà phân tích", "Tự động hóa hoàn toàn việc ra quyết định và Sa thải nhân viên", "Giảm chi phí phần cứng và Tăng tốc độ mạng", "Thay thế con người trong giao tiếp khách hàng và Viết báo cáo"],
  "Slide 03: 1. Providing analytics-driven insights (Cung cấp insight dựa trên phân tích). 2. Boosting analyst productivity (Tăng năng suất)."),

M("q43", 1, 2, "Những công cụ phân tích kinh doanh (Business Analytics Tools) phổ biến nào được liệt kê trong slide?",
  ["Microsoft Power BI", "Tableau", "Qlik", "Apache Spark"], 4,
  "Slide 03: Các công cụ gồm: Power BI, Tableau, Qlik, Domo, Oracle Analytics Cloud, Looker, Apache Spark, JMP PRO."),

S("q44", 1, 2, "Theo slide, 'Lùa gà' trong lĩnh vực đào tạo AI/ML có nghĩa là gì?",
  ["Cố tình tạo nên nỗi sợ hoang đường để học viên đăng ký học, mua sản phẩm", "Dạy kiến thức không đúng sự thật", "Bán phần mềm độc hại", "Tuyển dụng nhân sự không đủ trình độ"],
  "Slide 02: 'Lùa Gà' là từ lóng chỉ việc một số trung tâm, chuyên gia cố tình tạo nỗi sợ hoang đường để trục lợi từ học viên."),

// ================= CÁC CÂU HỎI TỔNG HỢP & ĐỌC HIỂU CODE KHÁC =================
S("q45", 1, 3, "Cho đoạn code Python sau:\n`def sayWelcome(): print(\"Welcome To UEL\")`\nHàm này có đặc điểm gì?",
  ["Là hàm không có đối số và không có giá trị trả về", "Là hàm có 1 đối số và có trả về", "Là hàm có đối số mặc định", "Là hàm bị lỗi cú pháp"],
  "Slide 02: Hàm không có tham số trong ngoặc (), bên trong chỉ print (không có return)."),

S("q46", 1, 3, "Cho đoạn code Python sau:\n`def lastItem(m, n=0):`\n`    last = 0`\n`    for i in range(1, m+n, 1):`\n`        last = i`\n`    return last`\nLệnh `print(lastItem(8))` in ra kết quả là gì?",
  ["8", "10", "0", "7"],
  "Slide 02: Khi gọi `lastItem(8)`, tham số n sẽ nhận giá trị mặc định là 0. Vòng lặp chạy từ 1 đến 8 (vì m+n = 8). `last` sẽ được gán bằng 8 ở lần lặp cuối. Kết quả là 8."),

S("q47", 1, 3, "Cho đoạn code Python sau:\n`list_3 = [i for i in range(4)]`\n`list_4 = [i for i in range(4) if i % 2 == 0]`\nKết quả của `list_4` là gì?",
  ["[0, 2]", "[0, 1, 2, 3]", "[1, 3]", "[2]"],
  "Slide 02: List comprehension. Lấy các số chẵn (chia hết cho 2) trong khoảng từ 0 đến 3. Kết quả là [0, 2]."),

S("q48", 1, 3, "Đoạn code sau dùng để làm gì?\n`s1 = 'madam'`\n`s_list = list(s1)`\n`s2 = \"\".join(s_list)`",
  ["Chuyển đổi qua lại giữa string và list ký tự", "Tách chuỗi thành các từ", "Đảo ngược chuỗi", "Đếm số ký tự trong chuỗi"],
  "Slide 02: `list(s1)` chuyển string thành list các ký tự. `\"\".join(list)` nối các ký tự thành string."),

S("q49", 1, 3, "Cho ma trận khởi tạo bằng code Python sau:\n`row = 3`\n`col = 4`\n`matrix = [[0]*col]*row`\n`print(matrix)`\nKết quả in ra là gì?",
  ["[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]", "[[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]", "Lỗi cú pháp", "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]"],
  "Slide 02: Tạo list 2 chiều (3 hàng, 4 cột) toàn số 0."),

M("q50", 1, 3, "Trong phần 'Completion', các bài toán 'Khử nhiễu (Denoising)' có thể áp dụng trong những lĩnh vực nào sau đây?",
  ["Khử nhiễu hình ảnh để tăng độ chính xác của OCR (Nhận dạng ký tự quang học)", "Khử nhiễu dữ liệu tài chính", "Khử nhiễu trong dự báo chỉ số thị trường chứng khoán", "Khử nhiễu âm thanh"], 3,
  "Slide 03: Nêu 3 ứng dụng: khử nhiễu hình ảnh cho OCR, khử nhiễu dữ liệu tài chính, dự báo chứng khoán bằng mô hình khử nhiễu Fourier."),
];
module.exports = QUESTIONS_C1;